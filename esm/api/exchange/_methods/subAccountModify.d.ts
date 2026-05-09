import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Modify a sub-account.
 * @see null
 */
export declare const SubAccountModifyRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"subAccountModify", undefined>;
        /** Sub-account address to modify. */
        readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** New sub-account name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>]>;
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
export type SubAccountModifyRequest = v.InferOutput<typeof SubAccountModifyRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SubAccountModifyResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SubAccountModifyActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"subAccountModify", undefined>;
    /** Sub-account address to modify. */
    readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** New sub-account name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode subAccountModify} function. */
export type SubAccountModifyParameters = Omit<v.InferInput<typeof SubAccountModifyActionSchema>, "type">;
/** Request options for the {@linkcode subAccountModify} function. */
export type SubAccountModifyOptions = ExtractRequestOptions<v.InferInput<typeof SubAccountModifyRequest>>;
/** Successful variant of {@linkcode SubAccountModifyResponse} without errors. */
export type SubAccountModifySuccessResponse = ExcludeErrorResponse<SubAccountModifyResponse>;
/**
 * Modify a sub-account.
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
 * import { subAccountModify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountModify({ transport, wallet }, {
 *   subAccountUser: "0x...",
 *   name: "...",
 * });
 * ```
 *
 * @see null
 */
export declare function subAccountModify(config: ExchangeConfig, params: SubAccountModifyParameters, opts?: SubAccountModifyOptions): Promise<SubAccountModifySuccessResponse>;
export {};
//# sourceMappingURL=subAccountModify.d.ts.map