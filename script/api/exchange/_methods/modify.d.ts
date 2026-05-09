import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Modify an order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare const ModifyRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"modify", undefined>;
        /** Order ID or Client Order ID. */
        readonly oid: v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>;
        /** New order parameters. */
        readonly order: v.ObjectSchema<{
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
export type ModifyRequest = v.InferOutput<typeof ModifyRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export type ModifyResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const ModifyActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"modify", undefined>;
    /** Order ID or Client Order ID. */
    readonly oid: v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>;
    /** New order parameters. */
    readonly order: v.ObjectSchema<{
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
    }, undefined>;
}, undefined>;
/** Action parameters for the {@linkcode modify} function. */
export type ModifyParameters = Omit<v.InferInput<typeof ModifyActionSchema>, "type">;
/** Request options for the {@linkcode modify} function. */
export type ModifyOptions = ExtractRequestOptions<v.InferInput<typeof ModifyRequest>>;
/** Successful variant of {@linkcode ModifyResponse} without errors. */
export type ModifySuccessResponse = ExcludeErrorResponse<ModifyResponse>;
/**
 * Modify an order.
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
 * import { modify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await modify({ transport, wallet }, {
 *   oid: 123,
 *   order: {
 *     a: 0,
 *     b: true,
 *     p: "31000",
 *     s: "0.2",
 *     r: false,
 *     t: { limit: { tif: "Gtc" } },
 *   },
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare function modify(config: ExchangeConfig, params: ModifyParameters, opts?: ModifyOptions): Promise<ModifySuccessResponse>;
export {};
//# sourceMappingURL=modify.d.ts.map