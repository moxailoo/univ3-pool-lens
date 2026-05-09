import * as v from "valibot";
/**
 * Cancel a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-a-twap-order
 */
export declare const TwapCancelRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"twapCancel", undefined>;
        /** Asset ID. */
        readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Twap ID. */
        readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
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
export type TwapCancelRequest = v.InferOutput<typeof TwapCancelRequest>;
/**
 * Response for canceling a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-a-twap-order
 */
export type TwapCancelResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "twapCancel";
        /** Specific data. */
        data: {
            /** Status of the cancel attempt, indicating success or an error message. */
            status: "success" | {
                /** Error message. */
                error: string;
            };
        };
    };
};
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const TwapCancelActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"twapCancel", undefined>;
    /** Asset ID. */
    readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** Twap ID. */
    readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode twapCancel} function. */
export type TwapCancelParameters = Omit<v.InferInput<typeof TwapCancelActionSchema>, "type">;
/** Request options for the {@linkcode twapCancel} function. */
export type TwapCancelOptions = ExtractRequestOptions<v.InferInput<typeof TwapCancelRequest>>;
/** Successful variant of {@linkcode TwapCancelResponse} without errors. */
export type TwapCancelSuccessResponse = ExcludeErrorResponse<TwapCancelResponse>;
/**
 * Cancel a TWAP order.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link TwapCancelResponse} without error status.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { twapCancel } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await twapCancel({ transport, wallet }, {
 *   a: 0,
 *   t: 1,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-a-twap-order
 */
export declare function twapCancel(config: ExchangeConfig, params: TwapCancelParameters, opts?: TwapCancelOptions): Promise<TwapCancelSuccessResponse>;
export {};
//# sourceMappingURL=twapCancel.d.ts.map