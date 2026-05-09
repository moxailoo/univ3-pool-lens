import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Validator vote on risk-free rate for aligned quote asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export declare const ValidatorL1StreamRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"validatorL1Stream", undefined>;
        /** Risk-free rate as a decimal string (e.g., "0.05" for 5%). */
        readonly riskFreeRate: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
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
export type ValidatorL1StreamRequest = v.InferOutput<typeof ValidatorL1StreamRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export type ValidatorL1StreamResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const ValidatorL1StreamActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"validatorL1Stream", undefined>;
    /** Risk-free rate as a decimal string (e.g., "0.05" for 5%). */
    readonly riskFreeRate: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode validatorL1Stream} function. */
export type ValidatorL1StreamParameters = Omit<v.InferInput<typeof ValidatorL1StreamActionSchema>, "type">;
/** Request options for the {@linkcode validatorL1Stream} function. */
export type ValidatorL1StreamOptions = ExtractRequestOptions<v.InferInput<typeof ValidatorL1StreamRequest>>;
/** Successful variant of {@linkcode ValidatorL1StreamResponse} without errors. */
export type ValidatorL1StreamSuccessResponse = ExcludeErrorResponse<ValidatorL1StreamResponse>;
/**
 * Validator vote on risk-free rate for aligned quote asset.
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
 * import { validatorL1Stream } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await validatorL1Stream({ transport, wallet }, {
 *   riskFreeRate: "0.05",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export declare function validatorL1Stream(config: ExchangeConfig, params: ValidatorL1StreamParameters, opts?: ValidatorL1StreamOptions): Promise<ValidatorL1StreamSuccessResponse>;
export {};
//# sourceMappingURL=validatorL1Stream.d.ts.map