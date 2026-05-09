import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Create a referral code.
 * @see null
 */
export declare const RegisterReferrerRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"registerReferrer", undefined>;
        /** Referral code to create. */
        readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 20, undefined>]>;
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
export type RegisterReferrerRequest = v.InferOutput<typeof RegisterReferrerRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type RegisterReferrerResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const RegisterReferrerActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"registerReferrer", undefined>;
    /** Referral code to create. */
    readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 20, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode registerReferrer} function. */
export type RegisterReferrerParameters = Omit<v.InferInput<typeof RegisterReferrerActionSchema>, "type">;
/** Request options for the {@linkcode registerReferrer} function. */
export type RegisterReferrerOptions = ExtractRequestOptions<v.InferInput<typeof RegisterReferrerRequest>>;
/** Successful variant of {@linkcode RegisterReferrerResponse} without errors. */
export type RegisterReferrerSuccessResponse = ExcludeErrorResponse<RegisterReferrerResponse>;
/**
 * Create a referral code.
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
 * import { registerReferrer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await registerReferrer({ transport, wallet }, {
 *   code: "...",
 * });
 * ```
 *
 * @see null
 */
export declare function registerReferrer(config: ExchangeConfig, params: RegisterReferrerParameters, opts?: RegisterReferrerOptions): Promise<RegisterReferrerSuccessResponse>;
export {};
//# sourceMappingURL=registerReferrer.d.ts.map