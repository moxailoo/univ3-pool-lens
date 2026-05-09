/**
 * Execute helpers for L1 and user-signed Exchange API actions.
 * @module
 */
import { type AbstractWallet } from "../../../../signing/mod.js";
import type { IRequestTransport } from "../../../../transport/mod.js";
type MaybePromise<T> = T | Promise<T>;
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
/** Options for any execute functions. */
interface BaseOptions {
    /** {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel a request. */
    signal?: AbortSignal;
}
/** Extract request options from a request type (excludes action, nonce, signature). */
export type ExtractRequestOptions<T extends {
    action: Record<string, unknown>;
}> = Prettify<BaseOptions & Omit<T, "action" | "nonce" | "signature">>;
/** Base configuration shared by single-wallet and multi-sig configs. */
interface BaseConfig<T extends IRequestTransport = IRequestTransport> {
    /** The transport used to connect to the Hyperliquid Exchange API. */
    transport: T;
    /** Signature chain ID for EIP-712 signing, defaults to wallet's chain ID. */
    signatureChainId?: `0x${string}` | (() => MaybePromise<`0x${string}`>);
    /**
     * Default vault address for vault-based operations, used when not specified in action options.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#subaccounts-and-vaults
     */
    defaultVaultAddress?: `0x${string}`;
    /**
     * Default expiration time in milliseconds, used when not specified in action options.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#expires-after
     */
    defaultExpiresAfter?: number | (() => MaybePromise<number>);
    /**
     * Custom nonce generator function.
     * Defaults to a global manager using timestamp with auto-increment.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/nonces-and-api-wallets#hyperliquid-nonces
     */
    nonceManager?: (address: string) => MaybePromise<number>;
}
/** Configuration for single-wallet Exchange API requests. */
export interface ExchangeSingleWalletConfig<T extends IRequestTransport = IRequestTransport> extends BaseConfig<T> {
    /** The wallet used to sign requests. */
    wallet: AbstractWallet;
}
/** Configuration for multi-signature Exchange API requests. */
export interface ExchangeMultiSigConfig<T extends IRequestTransport = IRequestTransport> extends BaseConfig<T> {
    /** Array of wallets for multi-sig. First wallet is the leader. */
    signers: readonly [AbstractWallet, ...AbstractWallet[]];
    /** The multi-signature account address. */
    multiSigUser: `0x${string}`;
}
/** Union type for all Exchange API configurations. */
export type ExchangeConfig<T extends IRequestTransport = IRequestTransport> = ExchangeSingleWalletConfig<T> | ExchangeMultiSigConfig<T>;
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
export declare function executeL1Action<T>(config: ExchangeConfig, action: Record<string, unknown>, options?: {
    vaultAddress?: string;
    expiresAfter?: string | number;
    signal?: AbortSignal;
}): Promise<T>;
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
export declare function executeUserSignedAction<T>(config: ExchangeConfig, action: Record<string, unknown>, types: Record<string, {
    name: string;
    type: string;
}[]>, options?: {
    signal?: AbortSignal;
}): Promise<T>;
export {};
//# sourceMappingURL=execute.d.ts.map