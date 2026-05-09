/**
 * Abstract wallet interfaces and signing utilities for EIP-712 typed data.
 * @module
 */
import { HyperliquidError } from "../_base.js";
function isEthersV6Signer(wallet) {
    return "signTypedData" in wallet && typeof wallet.signTypedData === "function" &&
        wallet.signTypedData.length === 3 &&
        "getAddress" in wallet && typeof wallet.getAddress === "function";
}
function isEthersV5Signer(wallet) {
    return "_signTypedData" in wallet && typeof wallet._signTypedData === "function" &&
        wallet._signTypedData.length === 3 &&
        "getAddress" in wallet && typeof wallet.getAddress === "function";
}
function isViemJsonRpcAccount(wallet) {
    return "signTypedData" in wallet && typeof wallet.signTypedData === "function" &&
        (wallet.signTypedData.length === 1 || wallet.signTypedData.length === 2) &&
        "getAddresses" in wallet && typeof wallet.getAddresses === "function" &&
        "getChainId" in wallet && typeof wallet.getChainId === "function";
}
function isViemLocalAccount(wallet) {
    return "signTypedData" in wallet && typeof wallet.signTypedData === "function" &&
        (wallet.signTypedData.length === 1 || wallet.signTypedData.length === 2) &&
        "address" in wallet && typeof wallet.address === "string";
}
/** Thrown when an error occurs in AbstractWallet operations (e.g., signing, getting address). */
export class AbstractWalletError extends HyperliquidError {
    constructor(message, options) {
        super(message, options);
        this.name = "AbstractWalletError";
    }
}
/**
 * Signs EIP-712 typed data using the provided wallet.
 *
 * @param args The wallet, domain, types, primary type, and message to sign
 * @return The ECDSA signature components
 *
 * @throws {AbstractWalletError} If the wallet type is unknown or signing fails
 */
export async function signTypedData(args) {
    const { wallet, domain, types, primaryType, message } = args;
    const isViemWallet = isViemJsonRpcAccount(wallet) || isViemLocalAccount(wallet);
    const isEthersV6 = isEthersV6Signer(wallet);
    const isEthersV5 = isEthersV5Signer(wallet);
    let signature;
    try {
        if (isViemWallet) {
            signature = await wallet.signTypedData({
                domain,
                types: {
                    EIP712Domain: [
                        { name: "name", type: "string" },
                        { name: "version", type: "string" },
                        { name: "chainId", type: "uint256" },
                        { name: "verifyingContract", type: "address" },
                    ],
                    ...types,
                },
                primaryType,
                message,
            });
        }
        else if (isEthersV6) {
            signature = await wallet.signTypedData(domain, types, message);
        }
        else if (isEthersV5) {
            signature = await wallet._signTypedData(domain, types, message);
        }
        else {
            throw new AbstractWalletError("Failed to sign typed data: unknown wallet type");
        }
    }
    catch (error) {
        if (error instanceof AbstractWalletError)
            throw error;
        const walletType = isViemWallet ? "viem" : isEthersV6 ? "ethers v6" : "ethers v5";
        throw new AbstractWalletError(`Failed to sign typed data with ${walletType} wallet`, { cause: error });
    }
    return splitSignature(signature);
}
function splitSignature(signature) {
    if (signature.length !== 132) {
        throw new AbstractWalletError(`Expected 65-byte signature (132 hex chars), got ${signature.length}`);
    }
    const r = `0x${signature.slice(2, 66)}`;
    const s = `0x${signature.slice(66, 130)}`;
    let v = parseInt(signature.slice(130, 132), 16);
    if (v === 0 || v === 1)
        v += 27;
    if (v !== 27 && v !== 28) {
        throw new AbstractWalletError(`Invalid signature recovery value: ${v}, expected 27 or 28`);
    }
    return { r, s, v };
}
// ============================================================
// Helpers
// ============================================================
/**
 * Gets the chain ID of the wallet.
 *
 * @param wallet The wallet to query
 * @return The chain ID as a hex string
 *
 * @throws {AbstractWalletError} If getting the chain ID fails
 */
export async function getWalletChainId(wallet) {
    try {
        // Viem JSON-RPC account has getChainId method
        if (isViemJsonRpcAccount(wallet)) {
            const chainId = await wallet.getChainId();
            return `0x${chainId.toString(16)}`;
        }
        // Ethers signers use provider.getNetwork()
        const isEthersSigner = isEthersV6Signer(wallet) || isEthersV5Signer(wallet);
        if (isEthersSigner && wallet.provider) {
            const network = await wallet.provider.getNetwork();
            return `0x${network.chainId.toString(16)}`;
        }
    }
    catch (error) {
        throw new AbstractWalletError("Failed to get chain ID from wallet", { cause: error });
    }
    // Default chain ID for local accounts or signers without provider
    return "0x1";
}
/**
 * Gets the lowercase wallet address from various wallet types.
 *
 * @param wallet The wallet to query
 * @return The lowercase wallet address as a hex string
 *
 * @throws {AbstractWalletError} If getting the address fails or wallet type is unknown
 */
export async function getWalletAddress(wallet) {
    try {
        // Viem JSON-RPC account uses getAddresses()
        if (isViemJsonRpcAccount(wallet)) {
            const addresses = await wallet.getAddresses();
            if (!addresses.length)
                throw new AbstractWalletError("Wallet returned no addresses");
            return addresses[0].toLowerCase();
        }
        // Viem local account has address property
        if (isViemLocalAccount(wallet)) {
            return wallet.address.toLowerCase();
        }
        // Ethers signers use getAddress()
        if (isEthersV6Signer(wallet) || isEthersV5Signer(wallet)) {
            const address = await wallet.getAddress();
            return address.toLowerCase();
        }
    }
    catch (error) {
        throw new AbstractWalletError("Failed to get address from wallet", { cause: error });
    }
    throw new AbstractWalletError("Failed to get wallet address: unknown wallet type");
}
//# sourceMappingURL=_abstractWallet.js.map