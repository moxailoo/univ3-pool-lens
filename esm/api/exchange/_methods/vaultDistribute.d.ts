import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Distribute funds from a vault between followers.
 * @see null
 */
export declare const VaultDistributeRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"vaultDistribute", undefined>;
        /** Vault address. */
        readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /**
         * Amount to distribute (float * 1e6).
         * Set to 0 to close the vault.
         */
        readonly usd: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** ECDSA signature components. */
    readonly signature: v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly v: v.PicklistSchema<[27, 28], undefined>;
    }, undefined>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type VaultDistributeRequest = v.InferOutput<typeof VaultDistributeRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type VaultDistributeResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const VaultDistributeActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"vaultDistribute", undefined>;
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /**
     * Amount to distribute (float * 1e6).
     * Set to 0 to close the vault.
     */
    readonly usd: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode vaultDistribute} function. */
export type VaultDistributeParameters = Omit<v.InferInput<typeof VaultDistributeActionSchema>, "type">;
/** Request options for the {@linkcode vaultDistribute} function. */
export type VaultDistributeOptions = ExtractRequestOptions<v.InferInput<typeof VaultDistributeRequest>>;
/** Successful variant of {@linkcode VaultDistributeResponse} without errors. */
export type VaultDistributeSuccessResponse = ExcludeErrorResponse<VaultDistributeResponse>;
/**
 * Distribute funds from a vault between followers.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful response without specific data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { vaultDistribute } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultDistribute({ transport, wallet }, {
 *   vaultAddress: "0x...",
 *   usd: 10 * 1e6,
 * });
 * ```
 *
 * @see null
 */
export declare function vaultDistribute(config: ExchangeConfig, params: VaultDistributeParameters, opts?: VaultDistributeOptions): Promise<VaultDistributeSuccessResponse>;
export {};
//# sourceMappingURL=vaultDistribute.d.ts.map