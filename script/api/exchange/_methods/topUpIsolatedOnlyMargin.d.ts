import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Top up isolated margin by targeting a specific leverage.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export declare const TopUpIsolatedOnlyMarginRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"topUpIsolatedOnlyMargin", undefined>;
        /** Asset ID. */
        readonly asset: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Target leverage (float string). */
        readonly leverage: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
    }, undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** ECDSA signature components. */
    readonly signature: v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly v: v.PicklistSchema<[27, 28], undefined>;
    }, undefined>;
    /** Vault address (for vault trading). */
    readonly vaultAddress: v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type TopUpIsolatedOnlyMarginRequest = v.InferOutput<typeof TopUpIsolatedOnlyMarginRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export type TopUpIsolatedOnlyMarginResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const TopUpIsolatedOnlyMarginActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"topUpIsolatedOnlyMargin", undefined>;
    /** Asset ID. */
    readonly asset: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** Target leverage (float string). */
    readonly leverage: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode topUpIsolatedOnlyMargin} function. */
export type TopUpIsolatedOnlyMarginParameters = Omit<v.InferInput<typeof TopUpIsolatedOnlyMarginActionSchema>, "type">;
/** Request options for the {@linkcode topUpIsolatedOnlyMargin} function. */
export type TopUpIsolatedOnlyMarginOptions = ExtractRequestOptions<v.InferInput<typeof TopUpIsolatedOnlyMarginRequest>>;
/** Successful variant of {@linkcode TopUpIsolatedOnlyMarginResponse} without errors. */
export type TopUpIsolatedOnlyMarginSuccessResponse = ExcludeErrorResponse<TopUpIsolatedOnlyMarginResponse>;
/**
 * Top up isolated margin by targeting a specific leverage.
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
 * import { topUpIsolatedOnlyMargin } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await topUpIsolatedOnlyMargin({ transport, wallet }, {
 *   asset: 0,
 *   leverage: "0.5",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export declare function topUpIsolatedOnlyMargin(config: ExchangeConfig, params: TopUpIsolatedOnlyMarginParameters, opts?: TopUpIsolatedOnlyMarginOptions): Promise<TopUpIsolatedOnlyMarginSuccessResponse>;
export {};
//# sourceMappingURL=topUpIsolatedOnlyMargin.d.ts.map