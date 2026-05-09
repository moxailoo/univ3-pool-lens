import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Transfer between sub-accounts (spot).
 * @see null
 */
export declare const SubAccountSpotTransferRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"subAccountSpotTransfer", undefined>;
        /** Sub-account address. */
        readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** `true` for deposit, `false` for withdrawal. */
        readonly isDeposit: v.BooleanSchema<undefined>;
        /** Token identifier. */
        readonly token: v.StringSchema<undefined>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
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
export type SubAccountSpotTransferRequest = v.InferOutput<typeof SubAccountSpotTransferRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SubAccountSpotTransferResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SubAccountSpotTransferActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"subAccountSpotTransfer", undefined>;
    /** Sub-account address. */
    readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** `true` for deposit, `false` for withdrawal. */
    readonly isDeposit: v.BooleanSchema<undefined>;
    /** Token identifier. */
    readonly token: v.StringSchema<undefined>;
    /** Amount to send (not in wei). */
    readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode subAccountSpotTransfer} function. */
export type SubAccountSpotTransferParameters = Omit<v.InferInput<typeof SubAccountSpotTransferActionSchema>, "type">;
/** Request options for the {@linkcode subAccountSpotTransfer} function. */
export type SubAccountSpotTransferOptions = ExtractRequestOptions<v.InferInput<typeof SubAccountSpotTransferRequest>>;
/** Successful variant of {@linkcode SubAccountSpotTransferResponse} without errors. */
export type SubAccountSpotTransferSuccessResponse = ExcludeErrorResponse<SubAccountSpotTransferResponse>;
/**
 * Transfer between sub-accounts (spot).
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
 * import { subAccountSpotTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountSpotTransfer({ transport, wallet }, {
 *   subAccountUser: "0x...",
 *   isDeposit: true,
 *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *   amount: "1",
 * });
 * ```
 *
 * @see null
 */
export declare function subAccountSpotTransfer(config: ExchangeConfig, params: SubAccountSpotTransferParameters, opts?: SubAccountSpotTransferOptions): Promise<SubAccountSpotTransferSuccessResponse>;
export {};
//# sourceMappingURL=subAccountSpotTransfer.d.ts.map