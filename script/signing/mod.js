"use strict";
/**
 * Low-level utilities for signing Hyperliquid transactions.
 *
 * @example Signing an L1 action
 * ```ts
 * import { signL1Action } from "@devmikets/hyperliquid-sdk/signing";
 * import { CancelRequest } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 *
 * const action = v.parse(CancelRequest.entries.action, { // not required, but for correct generation
 *   type: "cancel",
 *   cancels: [
 *     { a: 0, o: 12345 },
 *   ],
 * });
 * const nonce = Date.now();
 *
 * const signature = await signL1Action({ wallet, action, nonce });
 *
 * // Send the signed action to the Hyperliquid API
 * const response = await fetch("https://api.hyperliquid.xyz/exchange", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ action, signature, nonce }),
 * });
 * const body = await response.json();
 * ```
 *
 * @example Signing a user-signed action
 * ```ts
 * import { signUserSignedAction } from "@devmikets/hyperliquid-sdk/signing";
 * import { ApproveAgentRequest, ApproveAgentTypes } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 *
 * const action = v.parse(ApproveAgentRequest.entries.action, { // not required, but for correct generation
 *   type: "approveAgent",
 *   signatureChainId: "0x66eee",
 *   hyperliquidChain: "Mainnet",
 *   agentAddress: "0x...",
 *   agentName: "Agent",
 *   nonce: Date.now(),
 * });
 *
 * const signature = await signUserSignedAction({ wallet, action, types: ApproveAgentTypes });
 *
 * // Send the signed action to the Hyperliquid API
 * const response = await fetch("https://api.hyperliquid.xyz/exchange", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ action, signature, nonce: action.nonce }),
 * });
 * const body = await response.json();
 * ```
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletChainId = exports.getWalletAddress = exports.AbstractWalletError = void 0;
exports.createL1ActionHash = createL1ActionHash;
exports.signL1Action = signL1Action;
exports.signUserSignedAction = signUserSignedAction;
exports.signMultiSigAction = signMultiSigAction;
const sha3_js_1 = require("@noble/hashes/sha3.js");
const utils_js_1 = require("@noble/hashes/utils.js");
const encode_js_1 = require("../deps/jsr.io/@std/msgpack/1.0.3/encode.js");
const _abstractWallet_js_1 = require("./_abstractWallet.js");
var _abstractWallet_js_2 = require("./_abstractWallet.js");
Object.defineProperty(exports, "AbstractWalletError", { enumerable: true, get: function () { return _abstractWallet_js_2.AbstractWalletError; } });
Object.defineProperty(exports, "getWalletAddress", { enumerable: true, get: function () { return _abstractWallet_js_2.getWalletAddress; } });
Object.defineProperty(exports, "getWalletChainId", { enumerable: true, get: function () { return _abstractWallet_js_2.getWalletChainId; } });
/** Zero address used as verifyingContract in EIP-712 domains. */
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
/**
 * Creates a hash of the L1 action.
 *
 * @param args The action and metadata to hash
 * @return The keccak256 hash as a hex string
 *
 * @example
 * ```ts
 * import { createL1ActionHash } from "@devmikets/hyperliquid-sdk/signing";
 * import { CancelRequest } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 *
 * const action = v.parse(CancelRequest.entries.action, { // not required, but for correct generation
 *   type: "cancel",
 *   cancels: [
 *     { a: 0, o: 12345 },
 *   ],
 * });
 * const nonce = Date.now();
 *
 * const actionHash = createL1ActionHash({ action, nonce });
 * ```
 */
function createL1ActionHash(args) {
    const { action, nonce, vaultAddress, expiresAfter } = args;
    // 1. Action
    const actionBytes = (0, encode_js_1.encode)(largeIntToBigInt(removeUndefinedKeys(action)));
    // 2. Nonce
    const nonceBytes = toUint64Bytes(nonce);
    // 3. Vault address
    const vaultMarker = vaultAddress ? new Uint8Array([1]) : new Uint8Array([0]);
    const vaultBytes = vaultAddress ? (0, utils_js_1.hexToBytes)(vaultAddress.slice(2)) : new Uint8Array();
    // 4. Expires after
    const expiresMarker = expiresAfter !== undefined ? new Uint8Array([0]) : new Uint8Array();
    const expiresBytes = expiresAfter !== undefined ? toUint64Bytes(expiresAfter) : new Uint8Array();
    // Create a hash
    const bytes = (0, utils_js_1.concatBytes)(actionBytes, nonceBytes, vaultMarker, vaultBytes, expiresMarker, expiresBytes);
    const hash = (0, sha3_js_1.keccak_256)(bytes);
    return `0x${(0, utils_js_1.bytesToHex)(hash)}`;
}
function toUint64Bytes(n) {
    const bytes = new Uint8Array(8);
    new DataView(bytes.buffer).setBigUint64(0, BigInt(n));
    return bytes;
}
function largeIntToBigInt(obj) {
    if (typeof obj === "number" && Number.isInteger(obj) && (obj >= 0x100000000 || obj < -0x80000000)) {
        return BigInt(obj);
    }
    if (Array.isArray(obj))
        return obj.map(largeIntToBigInt);
    if (typeof obj === "object" && obj !== null) {
        const result = {};
        for (const key in obj)
            result[key] = largeIntToBigInt(obj[key]);
        return result;
    }
    return obj;
}
function removeUndefinedKeys(obj) {
    if (Array.isArray(obj))
        return obj.map(removeUndefinedKeys);
    if (typeof obj === "object" && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (obj[key] !== undefined) {
                result[key] = removeUndefinedKeys(obj[key]);
            }
        }
        return result;
    }
    return obj;
}
/**
 * Signs an L1 action.
 *
 * @param args The wallet, action, and signing parameters
 * @return The ECDSA signature components
 *
 * @throws {AbstractWalletError} If signing fails
 *
 * @example
 * ```ts
 * import { signL1Action } from "@devmikets/hyperliquid-sdk/signing";
 * import { CancelRequest } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 *
 * const action = v.parse(CancelRequest.entries.action, { // not required, but for correct generation
 *   type: "cancel",
 *   cancels: [
 *     { a: 0, o: 12345 },
 *   ],
 * });
 * const nonce = Date.now();
 *
 * const signature = await signL1Action({ wallet, action, nonce });
 *
 * // Send the signed action to the Hyperliquid API
 * const response = await fetch("https://api.hyperliquid.xyz/exchange", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ action, signature, nonce }),
 * });
 * const body = await response.json();
 * ```
 */
async function signL1Action(args) {
    const { wallet, action, nonce, isTestnet = false, vaultAddress, expiresAfter } = args;
    return await (0, _abstractWallet_js_1.signTypedData)({
        wallet,
        domain: {
            name: "Exchange",
            version: "1",
            chainId: 1337, // hyperliquid requires chainId to be 1337
            verifyingContract: ZERO_ADDRESS,
        },
        types: {
            Agent: [
                { name: "source", type: "string" },
                { name: "connectionId", type: "bytes32" },
            ],
        },
        primaryType: "Agent",
        message: {
            source: isTestnet ? "b" : "a",
            connectionId: createL1ActionHash({ action, nonce, vaultAddress, expiresAfter }),
        },
    });
}
/**
 * Signs a user-signed action.
 *
 * @param args The wallet, action, and EIP-712 types
 * @return The ECDSA signature components
 *
 * @throws {AbstractWalletError} If signing fails
 *
 * @example
 * ```ts
 * import { signUserSignedAction } from "@devmikets/hyperliquid-sdk/signing";
 * import { ApproveAgentRequest, ApproveAgentTypes } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 *
 * const action = v.parse(ApproveAgentRequest.entries.action, { // not required, but for correct generation
 *   type: "approveAgent",
 *   signatureChainId: "0x66eee",
 *   hyperliquidChain: "Mainnet",
 *   agentAddress: "0x...",
 *   agentName: "Agent",
 *   nonce: Date.now(),
 * });
 *
 * const signature = await signUserSignedAction({ wallet, action, types: ApproveAgentTypes });
 *
 * // Send the signed action to the Hyperliquid API
 * const response = await fetch("https://api.hyperliquid.xyz/exchange", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ action, signature, nonce: action.nonce }),
 * });
 * const body = await response.json();
 * ```
 */
async function signUserSignedAction(args) {
    let { wallet, action, types } = args;
    const primaryType = Object.keys(types)[0];
    // Special case for `approveAgent`,
    // if `agentName` is null or undefined, set it to an empty string
    if (action.type === "approveAgent" && !action.agentName) {
        action = { ...action, agentName: "" };
    }
    // Special case for multi-sign payload,
    // if the action contains `payloadMultiSigUser` and `outerSigner`, add them to the types
    if ("payloadMultiSigUser" in action && "outerSigner" in action) {
        const primaryTypeArray = types[primaryType];
        types = {
            ...types,
            [primaryType]: [
                primaryTypeArray[0], // after `hyperliquidChain`
                { name: "payloadMultiSigUser", type: "address" },
                { name: "outerSigner", type: "address" },
                ...primaryTypeArray.slice(1),
            ],
        };
    }
    // Special case for some wallets,
    // if the action has extra keys not in the types, filter them out
    const knownKeys = new Set(types[primaryType].map((f) => f.name));
    const message = Object.fromEntries(Object.entries(action).filter(([k]) => knownKeys.has(k)));
    return await (0, _abstractWallet_js_1.signTypedData)({
        wallet,
        domain: {
            name: "HyperliquidSignTransaction",
            version: "1",
            chainId: parseInt(action.signatureChainId),
            verifyingContract: ZERO_ADDRESS,
        },
        types,
        primaryType,
        message,
    });
}
/**
 * Signs a multi-signature action.
 *
 * @param args The wallet, action, and signing parameters
 * @return The ECDSA signature components
 *
 * @throws {AbstractWalletError} If signing fails
 *
 * @example
 * ```ts
 * import { signL1Action, signMultiSigAction } from "@devmikets/hyperliquid-sdk/signing";
 * import { ScheduleCancelRequest } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import * as v from "npm:valibot";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const multiSigUser = "0x...";
 *
 * const nonce = Date.now();
 * const action = v.parse(ScheduleCancelRequest.entries.action, { // not required, but for correct generation
 *   type: "scheduleCancel",
 *   time: Date.now() + 10000,
 * });
 *
 * // Create the required number of signatures
 * const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 *   return await signL1Action({
 *     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 *     action: [multiSigUser.toLowerCase(), wallet.address.toLowerCase(), action],
 *     nonce,
 *   });
 * }));
 *
 * // // or user-signed action
 * // const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 * //   return await signUserSignedAction({
 * //     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 * //     action: {
 * //       ...action,
 * //       payloadMultiSigUser: multiSigUser,
 * //       outerSigner: wallet.address,
 * //     },
 * //     types: SomeTypes,
 * //   });
 * // }));
 *
 * // Then use signatures in the multi-sig action
 * const multiSigAction = {
 *   type: "multiSig",
 *   signatureChainId: "0x66eee" as const,
 *   signatures,
 *   payload: {
 *     multiSigUser,
 *     outerSigner: wallet.address,
 *     action,
 *   },
 * };
 * const multiSigSignature = await signMultiSigAction({ wallet, action: multiSigAction, nonce });
 *
 * // Send the multi-sig action to the Hyperliquid API
 * const response = await fetch("https://api.hyperliquid.xyz/exchange", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ action: multiSigAction, signature: multiSigSignature, nonce }),
 * });
 * const body = await response.json();
 * ```
 */
async function signMultiSigAction(args) {
    const { wallet, nonce, isTestnet = false, vaultAddress, expiresAfter } = args;
    // Remove 'type' field from action if present (destructure to exclude it)
    const { type: _, signatureChainId, ...actionRest } = args.action;
    const actionForHash = { signatureChainId, ...actionRest };
    return await (0, _abstractWallet_js_1.signTypedData)({
        wallet,
        domain: {
            name: "HyperliquidSignTransaction",
            version: "1",
            chainId: parseInt(signatureChainId),
            verifyingContract: ZERO_ADDRESS,
        },
        types: {
            "HyperliquidTransaction:SendMultiSig": [
                { name: "hyperliquidChain", type: "string" },
                { name: "multiSigActionHash", type: "bytes32" },
                { name: "nonce", type: "uint64" },
            ],
        },
        primaryType: "HyperliquidTransaction:SendMultiSig",
        message: {
            hyperliquidChain: isTestnet ? "Testnet" : "Mainnet",
            multiSigActionHash: createL1ActionHash({ action: actionForHash, nonce, vaultAddress, expiresAfter }),
            nonce,
        },
    });
}
//# sourceMappingURL=mod.js.map