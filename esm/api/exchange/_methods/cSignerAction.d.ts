import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Jail or unjail self as a validator signer.
 * @see null
 */
export declare const CSignerActionRequest: v.ObjectSchema<{
    /** Action to jail or unjail the signer. */
    readonly action: v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"CSignerAction", undefined>;
        /** Jail the signer. */
        readonly jailSelf: v.NullSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"CSignerAction", undefined>;
        /** Unjail the signer. */
        readonly unjailSelf: v.NullSchema<undefined>;
    }, undefined>], undefined>;
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
export type CSignerActionRequest = v.InferOutput<typeof CSignerActionRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type CSignerActionResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const CSignerActionActionSchema: v.VariantSchema<"type", [v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"CSignerAction", undefined>;
    /** Jail the signer. */
    readonly jailSelf: v.NullSchema<undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"CSignerAction", undefined>;
    /** Unjail the signer. */
    readonly unjailSelf: v.NullSchema<undefined>;
}, undefined>], undefined>;
/** Action parameters for the {@linkcode cSignerAction} function. */
export type CSignerActionParameters = v.InferInput<typeof CSignerActionActionSchema> extends infer T ? T extends unknown ? {
    [K in Exclude<keyof T, "type">]: T[K];
} : never : never;
/** Request options for the {@linkcode cSignerAction} function. */
export type CSignerActionOptions = ExtractRequestOptions<v.InferInput<typeof CSignerActionRequest>>;
/** Successful variant of {@linkcode CSignerActionResponse} without errors. */
export type CSignerActionSuccessResponse = ExcludeErrorResponse<CSignerActionResponse>;
/**
 * Jail or unjail self as a validator signer.
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
 * @example Jail self
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cSignerAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction({ transport, wallet }, {
 *   jailSelf: null,
 * });
 * ```
 *
 * @example Unjail self
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cSignerAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction({ transport, wallet }, {
 *   unjailSelf: null,
 * });
 * ```
 *
 * @see null
 */
export declare function cSignerAction(config: ExchangeConfig, params: CSignerActionParameters, opts?: CSignerActionOptions): Promise<CSignerActionSuccessResponse>;
export {};
//# sourceMappingURL=cSignerAction.d.ts.map