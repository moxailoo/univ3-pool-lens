/**
 * Execute helpers for L1 and user-signed Exchange API actions.
 * @module
 */
import * as v from "valibot";
import { parse } from "../../../../_base.js";
import { getWalletAddress, getWalletChainId, signL1Action, signMultiSigAction, signUserSignedAction, } from "../../../../signing/mod.js";
import { Address, Hex, UnsignedInteger } from "../../../_schemas.js";
import { globalNonceManager } from "./_nonce.js";
import { withLock } from "./_semaphore.js";
import { assertSuccessResponse } from "./errors.js";
// ============================================================
// Execute L1 Action
// ============================================================
/**
 * Execute an L1 action on the Hyperliquid Exchange.
 *
 * Handles both single-wallet and multi-sig signing.
 *
 * @param config Exchange API configuration
 * @param action Action payload to execute
 * @param options Additional options for the request
 * @return API response
 *
 * @throws {ApiRequestError} If the API returns an error response
 */
export async function executeL1Action(config, action, options) {
    const { transport } = config;
    const leader = getLeader(config);
    const walletAddress = await getWalletAddress(leader);
    // Semaphore ensures requests arrive at server in nonce order (prevents out-of-order delivery)
    const key = `${walletAddress}:${transport.isTestnet}`;
    return await withLock(key, async () => {
        const nonce = await (config.nonceManager?.(walletAddress) ?? globalNonceManager.getNonce(key));
        // Validate and resolve options
        const vaultAddress = parse(v.optional(Address), options?.vaultAddress ?? config.defaultVaultAddress);
        const expiresAfter = parse(v.optional(UnsignedInteger), options?.expiresAfter ??
            (typeof config.defaultExpiresAfter === "number"
                ? config.defaultExpiresAfter
                : await config.defaultExpiresAfter?.()));
        const signal = options?.signal;
        // Sign action (multi-sig or single wallet)
        const [finalAction, signature] = "wallet" in config
            ? [
                action,
                await signL1Action({
                    wallet: leader,
                    action,
                    nonce,
                    isTestnet: transport.isTestnet,
                    vaultAddress,
                    expiresAfter,
                }),
            ]
            : await signMultiSigL1(config, action, walletAddress, nonce, vaultAddress, expiresAfter);
        // Send request and validate response
        const response = await transport.request("exchange", {
            action: finalAction,
            signature,
            nonce,
            vaultAddress,
            expiresAfter,
        }, signal);
        assertSuccessResponse(response);
        return response;
    });
}
// ============================================================
// Execute User-Signed Action
// ============================================================
/** Extract nonce field name from EIP-712 types ("nonce" or "time"). */
function getNonceFieldName(types) {
    const primaryType = Object.keys(types)[0];
    const field = types[primaryType].find((f) => f.name === "nonce" || f.name === "time");
    return field?.name ?? "nonce";
}
/**
 * Execute a user-signed action (EIP-712) on the Hyperliquid Exchange.
 *
 * Handles both single-wallet and multi-sig signing.
 * Automatically adds signatureChainId, hyperliquidChain, and nonce/time.
 *
 * @param config Exchange API configuration
 * @param action Action payload to execute
 * @param types EIP-712 type definitions for signing
 * @param options Additional options for the request
 * @return API response
 *
 * @throws {ApiRequestError} If the API returns an error response
 */
export async function executeUserSignedAction(config, action, types, options) {
    const { transport } = config;
    const leader = getLeader(config);
    const walletAddress = await getWalletAddress(leader);
    // Semaphore ensures requests arrive at server in nonce order (prevents out-of-order delivery)
    const key = `${walletAddress}:${transport.isTestnet}`;
    return withLock(key, async () => {
        const nonce = await (config.nonceManager?.(walletAddress) ?? globalNonceManager.getNonce(key));
        const signal = options?.signal;
        // Add system fields for user-signed actions
        const { type, ...restAction } = action;
        const nonceFieldName = getNonceFieldName(types);
        const fullAction = {
            type,
            signatureChainId: await getSignatureChainId(config),
            hyperliquidChain: transport.isTestnet ? "Testnet" : "Mainnet",
            ...restAction,
            [nonceFieldName]: nonce,
        };
        // Sign action (multi-sig or single wallet)
        const [finalAction, signature] = "wallet" in config
            ? [fullAction, await signUserSignedAction({ wallet: leader, action: fullAction, types })]
            : await signMultiSigUserSigned(config, fullAction, types, walletAddress, nonce);
        // Send request and validate response
        const response = await transport.request("exchange", {
            action: finalAction,
            signature,
            nonce,
        }, signal);
        assertSuccessResponse(response);
        return response;
    });
}
// ============================================================
// Multi-sig signing
// ============================================================
/** Remove leading zeros from signature components (required by Hyperliquid). */
function trimSignature(sig) {
    return {
        r: sig.r.replace(/^0x0+/, "0x"),
        s: sig.s.replace(/^0x0+/, "0x"),
        v: sig.v,
    };
}
/** Sign an L1 action with multi-sig. */
async function signMultiSigL1(config, action, outerSigner, nonce, vaultAddress, expiresAfter) {
    const { transport: { isTestnet }, signers, multiSigUser } = config;
    const multiSigUser_ = parse(Address, multiSigUser);
    const outerSigner_ = parse(Address, outerSigner);
    // Collect signatures from all signers
    const signatures = await Promise.all(signers.map(async (signer) => {
        const signature = await signL1Action({
            wallet: signer,
            action: [multiSigUser_, outerSigner_, action],
            nonce,
            isTestnet,
            vaultAddress,
            expiresAfter,
        });
        return trimSignature(signature);
    }));
    // Build multi-sig action wrapper
    const multiSigAction = {
        type: "multiSig",
        signatureChainId: await getSignatureChainId(config),
        signatures,
        payload: {
            multiSigUser: multiSigUser_,
            outerSigner: outerSigner_,
            action,
        },
    };
    // Sign the wrapper with the leader
    const signature = await signMultiSigAction({
        wallet: signers[0],
        action: multiSigAction,
        nonce,
        isTestnet,
        vaultAddress,
        expiresAfter,
    });
    return [multiSigAction, signature];
}
/** Sign a user-signed action (EIP-712) with multi-sig. */
async function signMultiSigUserSigned(config, action, types, outerSigner, nonce) {
    const { signers, multiSigUser, transport: { isTestnet } } = config;
    const multiSigUser_ = parse(Address, multiSigUser);
    const outerSigner_ = parse(Address, outerSigner);
    // Collect signatures from all signers
    const signatures = await Promise.all(signers.map(async (signer) => {
        const signature = await signUserSignedAction({
            wallet: signer,
            action: {
                payloadMultiSigUser: multiSigUser_,
                outerSigner: outerSigner_,
                ...action,
            },
            types,
        });
        return trimSignature(signature);
    }));
    // Build multi-sig action wrapper
    const multiSigAction = {
        type: "multiSig",
        signatureChainId: await getSignatureChainId(config),
        signatures,
        payload: {
            multiSigUser: multiSigUser_,
            outerSigner: outerSigner_,
            action,
        },
    };
    // Sign the wrapper with the leader
    const signature = await signMultiSigAction({
        wallet: signers[0],
        action: multiSigAction,
        nonce,
        isTestnet,
    });
    return [multiSigAction, signature];
}
// ============================================================
// Helpers
// ============================================================
/** Get the leader wallet (first signer for the single wallet, or multi-sig). */
function getLeader(config) {
    return "wallet" in config ? config.wallet : config.signers[0];
}
/** Resolve signature chain ID from config or wallet. */
async function getSignatureChainId(config) {
    if (config.signatureChainId) {
        const id = typeof config.signatureChainId === "function"
            ? await config.signatureChainId()
            : config.signatureChainId;
        return parse(Hex, id);
    }
    return getWalletChainId(getLeader(config));
}
//# sourceMappingURL=execute.js.map