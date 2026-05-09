/**
 * Abstract wallet interfaces and signing utilities for EIP-712 typed data.
 * @module
 */
import { HyperliquidError } from "../_base.js";
/** Common domain type for EIP-712 typed data signing. */
interface TypedDataDomain {
    name: string;
    version: string;
    chainId: number;
    verifyingContract: `0x${string}`;
}
/** Common types structure for EIP-712 typed data. */
interface TypedDataTypes {
    [key: string]: {
        name: string;
        type: string;
    }[];
}
/** Abstract interface for an {@link https://docs.ethers.org/v6/api/providers/#Signer | ethers.js v6}. */
export interface AbstractEthersV6Signer {
    signTypedData(domain: TypedDataDomain, types: TypedDataTypes, value: Record<string, unknown>): Promise<string>;
    getAddress(): Promise<string>;
    provider?: {
        getNetwork(): Promise<{
            chainId: number | bigint;
        }>;
    } | null;
}
/** Abstract interface for an {@link https://docs.ethers.org/v5/api/signer/ | ethers.js v5}. */
export interface AbstractEthersV5Signer {
    _signTypedData(domain: TypedDataDomain, types: TypedDataTypes, value: Record<string, unknown>): Promise<string>;
    getAddress(): Promise<string>;
    provider?: {
        getNetwork(): Promise<{
            chainId: number | bigint;
        }>;
    } | null;
}
/** Viem-style typed data parameters. */
interface ViemTypedDataParams {
    domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    };
    types: TypedDataTypes;
    primaryType: string;
    message: Record<string, unknown>;
}
/** Abstract interface for a {@link https://viem.sh/docs/accounts/jsonRpc#json-rpc-account | viem JSON-RPC Account}. */
export interface AbstractViemJsonRpcAccount {
    signTypedData(params: ViemTypedDataParams, options?: unknown): Promise<`0x${string}`>;
    getAddresses(): Promise<`0x${string}`[]>;
    getChainId(): Promise<number>;
}
/** Abstract interface for a {@link https://viem.sh/docs/accounts/local | viem Local Account}. */
export interface AbstractViemLocalAccount {
    signTypedData(params: ViemTypedDataParams, options?: unknown): Promise<`0x${string}`>;
    address: `0x${string}`;
}
/** Abstract interface for a wallet that can sign typed data. */
export type AbstractWallet = AbstractViemJsonRpcAccount | AbstractViemLocalAccount | AbstractEthersV6Signer | AbstractEthersV5Signer;
/** ECDSA signature components. */
export interface Signature {
    /** First 32-byte component of ECDSA signature. */
    r: `0x${string}`;
    /** Second 32-byte component of ECDSA signature. */
    s: `0x${string}`;
    /** Recovery identifier. */
    v: 27 | 28;
}
/** Thrown when an error occurs in AbstractWallet operations (e.g., signing, getting address). */
export declare class AbstractWalletError extends HyperliquidError {
    constructor(message: string, options?: ErrorOptions);
}
/**
 * Signs EIP-712 typed data using the provided wallet.
 *
 * @param args The wallet, domain, types, primary type, and message to sign
 * @return The ECDSA signature components
 *
 * @throws {AbstractWalletError} If the wallet type is unknown or signing fails
 */
export declare function signTypedData(args: {
    wallet: AbstractWallet;
    domain: TypedDataDomain;
    types: TypedDataTypes;
    primaryType: string;
    message: Record<string, unknown>;
}): Promise<Signature>;
/**
 * Gets the chain ID of the wallet.
 *
 * @param wallet The wallet to query
 * @return The chain ID as a hex string
 *
 * @throws {AbstractWalletError} If getting the chain ID fails
 */
export declare function getWalletChainId(wallet: AbstractWallet): Promise<`0x${string}`>;
/**
 * Gets the lowercase wallet address from various wallet types.
 *
 * @param wallet The wallet to query
 * @return The lowercase wallet address as a hex string
 *
 * @throws {AbstractWalletError} If getting the address fails or wallet type is unknown
 */
export declare function getWalletAddress(wallet: AbstractWallet): Promise<`0x${string}`>;
export {};
//# sourceMappingURL=_abstractWallet.d.ts.map