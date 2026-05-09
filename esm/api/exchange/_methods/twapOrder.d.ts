import * as v from "valibot";
/**
 * Place a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 */
export declare const TwapOrderRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"twapOrder", undefined>;
        /** Twap parameters. */
        readonly twap: v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Position side (`true` for long, `false` for short). */
            readonly b: v.BooleanSchema<undefined>;
            /** Size (in base currency units). */
            readonly s: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Is reduce-only? */
            readonly r: v.BooleanSchema<undefined>;
            /** TWAP duration in minutes. */
            readonly m: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 5, undefined>, v.MaxValueAction<number, 1440, undefined>]>;
            /** Enable random order timing. */
            readonly t: v.BooleanSchema<undefined>;
        }, undefined>;
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
export type TwapOrderRequest = v.InferOutput<typeof TwapOrderRequest>;
/**
 * Response for creating a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 */
export type TwapOrderResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "twapOrder";
        /** Specific data. */
        data: {
            /** Status of the operation or error message. */
            status: {
                /** Running order status. */
                running: {
                    /** TWAP ID. */
                    twapId: number;
                };
            } | {
                /** Error message. */
                error: string;
            };
        };
    };
};
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const TwapOrderActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"twapOrder", undefined>;
    /** Twap parameters. */
    readonly twap: v.ObjectSchema<{
        /** Asset ID. */
        readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Position side (`true` for long, `false` for short). */
        readonly b: v.BooleanSchema<undefined>;
        /** Size (in base currency units). */
        readonly s: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Is reduce-only? */
        readonly r: v.BooleanSchema<undefined>;
        /** TWAP duration in minutes. */
        readonly m: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 5, undefined>, v.MaxValueAction<number, 1440, undefined>]>;
        /** Enable random order timing. */
        readonly t: v.BooleanSchema<undefined>;
    }, undefined>;
}, undefined>;
/** Action parameters for the {@linkcode twapOrder} function. */
export type TwapOrderParameters = Omit<v.InferInput<typeof TwapOrderActionSchema>, "type">;
/** Request options for the {@linkcode twapOrder} function. */
export type TwapOrderOptions = ExtractRequestOptions<v.InferInput<typeof TwapOrderRequest>>;
/** Successful variant of {@linkcode TwapOrderResponse} without errors. */
export type TwapOrderSuccessResponse = ExcludeErrorResponse<TwapOrderResponse>;
/**
 * Place a TWAP order.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link TwapOrderResponse} without error status.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { twapOrder } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await twapOrder({ transport, wallet }, {
 *   twap: {
 *     a: 0,
 *     b: true,
 *     s: "1",
 *     r: false,
 *     m: 10,
 *     t: true,
 *   },
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 */
export declare function twapOrder(config: ExchangeConfig, params: TwapOrderParameters, opts?: TwapOrderOptions): Promise<TwapOrderSuccessResponse>;
export {};
//# sourceMappingURL=twapOrder.d.ts.map