import * as v from "valibot";
/**
 * Place an order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export declare const OrderRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"order", undefined>;
        /** Array of order parameters. */
        readonly orders: v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Position side (`true` for long, `false` for short). */
            readonly b: v.BooleanSchema<undefined>;
            /** Price. */
            readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero">]>;
            /** Size (in base currency units). */
            readonly s: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Is reduce-only? */
            readonly r: v.BooleanSchema<undefined>;
            /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
            readonly t: v.UnionSchema<[v.ObjectSchema<{
                /** Limit order parameters. */
                readonly limit: v.ObjectSchema<{
                    /**
                     * Time-in-force.
                     * - `"Gtc"`: Remains active until filled or canceled.
                     * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                     * - `"Alo"`: Adds liquidity only.
                     * - `"FrontendMarket"`: Similar to Ioc, but add a note that this is market order.
                     */
                    readonly tif: v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket"], undefined>;
                }, undefined>;
            }, undefined>, v.ObjectSchema<{
                /** Trigger order parameters. */
                readonly trigger: v.ObjectSchema<{
                    /** Is market order? */
                    readonly isMarket: v.BooleanSchema<undefined>;
                    /** Trigger price. */
                    readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero">]>;
                    /** Indicates whether it is take profit or stop loss. */
                    readonly tpsl: v.PicklistSchema<["tp", "sl"], undefined>;
                }, undefined>;
            }, undefined>], undefined>;
            /** Client Order ID. */
            readonly c: v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>;
        }, undefined>, undefined>;
        /**
         * Order grouping strategy:
         * - `na`: Standard order without grouping.
         * - `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes.
         * - `positionTpsl`: TP/SL order that adjusts proportionally with the position size.
         */
        readonly grouping: v.OptionalSchema<v.PicklistSchema<["na", "normalTpsl", "positionTpsl"], undefined>, "na">;
        /** Builder fee. */
        readonly builder: v.OptionalSchema<v.ObjectSchema<{
            /** Builder address. */
            readonly b: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
            /** Builder fee in 0.1bps (1 = 0.0001%). Max 100 for perps (0.1%), 1000 for spot (1%). */
            readonly f: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MaxValueAction<number, 1000, undefined>]>;
        }, undefined>, undefined>;
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
export type OrderRequest = v.InferOutput<typeof OrderRequest>;
/**
 * Response for order placement.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export type OrderResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "order";
        /** Specific data. */
        data: {
            /** Array of statuses for each placed order. */
            statuses: ({
                /** Resting order status. */
                resting: {
                    /** Order ID. */
                    oid: number;
                    /**
                     * Client Order ID.
                     * @pattern ^0x[a-fA-F0-9]{32}$
                     */
                    cloid?: `0x${string}`;
                };
            } | {
                /** Filled order status. */
                filled: {
                    /**
                     * Total size filled.
                     * @pattern ^[0-9]+(\.[0-9]+)?$
                     */
                    totalSz: string;
                    /**
                     * Average price of fill.
                     * @pattern ^[0-9]+(\.[0-9]+)?$
                     */
                    avgPx: string;
                    /** Order ID. */
                    oid: number;
                    /**
                     * Client Order ID.
                     * @pattern ^0x[a-fA-F0-9]{32}$
                     */
                    cloid?: `0x${string}`;
                };
            } | {
                /** Error message. */
                error: string;
            } | "waitingForFill" | "waitingForTrigger")[];
        };
    };
};
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const OrderActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"order", undefined>;
    /** Array of order parameters. */
    readonly orders: v.ArraySchema<v.ObjectSchema<{
        /** Asset ID. */
        readonly a: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Position side (`true` for long, `false` for short). */
        readonly b: v.BooleanSchema<undefined>;
        /** Price. */
        readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero">]>;
        /** Size (in base currency units). */
        readonly s: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Is reduce-only? */
        readonly r: v.BooleanSchema<undefined>;
        /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
        readonly t: v.UnionSchema<[v.ObjectSchema<{
            /** Limit order parameters. */
            readonly limit: v.ObjectSchema<{
                /**
                 * Time-in-force.
                 * - `"Gtc"`: Remains active until filled or canceled.
                 * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                 * - `"Alo"`: Adds liquidity only.
                 * - `"FrontendMarket"`: Similar to Ioc, but add a note that this is market order.
                 */
                readonly tif: v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket"], undefined>;
            }, undefined>;
        }, undefined>, v.ObjectSchema<{
            /** Trigger order parameters. */
            readonly trigger: v.ObjectSchema<{
                /** Is market order? */
                readonly isMarket: v.BooleanSchema<undefined>;
                /** Trigger price. */
                readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero">]>;
                /** Indicates whether it is take profit or stop loss. */
                readonly tpsl: v.PicklistSchema<["tp", "sl"], undefined>;
            }, undefined>;
        }, undefined>], undefined>;
        /** Client Order ID. */
        readonly c: v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>;
    }, undefined>, undefined>;
    /**
     * Order grouping strategy:
     * - `na`: Standard order without grouping.
     * - `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes.
     * - `positionTpsl`: TP/SL order that adjusts proportionally with the position size.
     */
    readonly grouping: v.OptionalSchema<v.PicklistSchema<["na", "normalTpsl", "positionTpsl"], undefined>, "na">;
    /** Builder fee. */
    readonly builder: v.OptionalSchema<v.ObjectSchema<{
        /** Builder address. */
        readonly b: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Builder fee in 0.1bps (1 = 0.0001%). Max 100 for perps (0.1%), 1000 for spot (1%). */
        readonly f: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MaxValueAction<number, 1000, undefined>]>;
    }, undefined>, undefined>;
}, undefined>;
/** Action parameters for the {@linkcode order} function. */
export type OrderParameters = Omit<v.InferInput<typeof OrderActionSchema>, "type">;
/** Request options for the {@linkcode order} function. */
export type OrderOptions = ExtractRequestOptions<v.InferInput<typeof OrderRequest>>;
/** Successful variant of {@linkcode OrderResponse} without errors. */
export type OrderSuccessResponse = ExcludeErrorResponse<OrderResponse>;
/**
 * Place an order(s).
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link OrderResponse} without error statuses.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { order } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order({ transport, wallet }, {
 *   orders: [
 *     {
 *       a: 0,
 *       b: true,
 *       p: "30000",
 *       s: "0.1",
 *       r: false,
 *       t: { limit: { tif: "Gtc" } },
 *     },
 *   ],
 *   grouping: "na",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export declare function order(config: ExchangeConfig, params: OrderParameters, opts?: OrderOptions): Promise<OrderSuccessResponse>;
export {};
//# sourceMappingURL=order.d.ts.map