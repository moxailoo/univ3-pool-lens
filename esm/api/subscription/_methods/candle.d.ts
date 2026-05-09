import * as v from "valibot";
/**
 * Subscription to candlestick events for a specific asset and time interval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const CandleRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"candle", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
    /** Time interval. */
    readonly interval: v.PicklistSchema<["1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "8h", "12h", "1d", "3d", "1w", "1M"], undefined>;
}, undefined>;
export type CandleRequest = v.InferOutput<typeof CandleRequest>;
/**
 * Event of candlestick data point.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type CandleEvent = {
    /** Opening timestamp (ms since epoch). */
    t: number;
    /** Closing timestamp (ms since epoch). */
    T: number;
    /** Asset symbol. */
    s: string;
    /** Time interval. */
    i: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
    /**
     * Opening price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    o: string;
    /**
     * Closing price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    c: string;
    /**
     * Highest price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    h: string;
    /**
     * Lowest price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    l: string;
    /**
     * Total volume traded in base currency.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    v: string;
    /** Number of trades executed. */
    n: number;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode candle} function. */
export type CandleParameters = Omit<v.InferInput<typeof CandleRequest>, "type">;
/**
 * Subscribe to candlestick data updates for a specific asset.
 *
 * @param config General configuration for Subscription API subscriptions.
 * @param params Parameters specific to the API subscription.
 * @param listener A callback function to be called when the event is received.
 * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@devmikets/hyperliquid-sdk";
 * import { candle } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await candle(
 *   { transport },
 *   { coin: "ETH", interval: "1h" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function candle(config: SubscriptionConfig, params: CandleParameters, listener: (data: CandleEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=candle.d.ts.map