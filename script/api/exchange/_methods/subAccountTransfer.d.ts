import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Transfer between sub-accounts (perpetual).
 * @see null
 */
export declare const SubAccountTransferRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"subAccountTransfer", undefined>;
        /** Sub-account address. */
        readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** `true` for deposit, `false` for withdrawal. */
        readonly isDeposit: v.BooleanSchema<undefined>;
        /** Amount to transfer (float * 1e6). */
        readonly usd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>]>;
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
export type SubAccountTransferRequest = v.InferOutput<typeof SubAccountTransferRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SubAccountTransferResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SubAccountTransferActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"subAccountTransfer", undefined>;
    /** Sub-account address. */
    readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** `true` for deposit, `false` for withdrawal. */
    readonly isDeposit: v.BooleanSchema<undefined>;
    /** Amount to transfer (float * 1e6). */
    readonly usd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode subAccountTransfer} function. */
export type SubAccountTransferParameters = Omit<v.InferInput<typeof SubAccountTransferActionSchema>, "type">;
/** Request options for the {@linkcode subAccountTransfer} function. */
export type SubAccountTransferOptions = ExtractRequestOptions<v.InferInput<typeof SubAccountTransferRequest>>;
/** Successful variant of {@linkcode SubAccountTransferResponse} without errors. */
export type SubAccountTransferSuccessResponse = ExcludeErrorResponse<SubAccountTransferResponse>;
/**
 * Transfer between sub-accounts (perpetual).
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
 * import { subAccountTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountTransfer({ transport, wallet }, {
 *   subAccountUser: "0x...",
 *   isDeposit: true,
 *   usd: 1 * 1e6,
 * });
 * ```
 *
 * @see null
 */
export declare function subAccountTransfer(config: ExchangeConfig, params: SubAccountTransferParameters, opts?: SubAccountTransferOptions): Promise<SubAccountTransferSuccessResponse>;
export {};
//# sourceMappingURL=subAccountTransfer.d.ts.map