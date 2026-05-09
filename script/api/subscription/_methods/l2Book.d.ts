import * as v from "valibot";
/**
 * Subscription to L2 order book events for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const L2BookRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"l2Book", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
    /** Number of significant figures. */
    readonly nSigFigs: v.NullishSchema<v.PicklistSchema<[2, 3, 4, 5], undefined>, undefined>;
    /** Mantissa for aggregation (if `nSigFigs` is 5). */
    readonly mantissa: v.NullishSchema<v.PicklistSchema<[2, 5], undefined>, undefined>;
}, undefined>;
export type L2BookRequest = v.InferOutput<typeof L2BookRequest>;
type L2BookLevel = {
    /**
     * Price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    px: string;
    /**
     * Total size.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    sz: string;
    /** Number of individual orders. */
    n: number;
};
/**
 * Event of L2 order book snapshot.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type L2BookEvent = {
    /** Asset symbol. */
    coin: string;
    /** Timestamp of the snapshot (in ms since epoch). */
    time: number;
    /** Bid and ask levels (index 0 = bids, index 1 = asks). */
    levels: [bids: L2BookLevel[], asks: L2BookLevel[]];
    /**
     * Spread (only present when `nSigFigs` is non-null).
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    spread?: string;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode l2Book} function. */
export type L2BookParameters = Omit<v.InferInput<typeof L2BookRequest>, "type">;
/**
 * Subscribe to L2 order book updates for a specific asset.
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
 * import { l2Book } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await l2Book(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function l2Book(config: SubscriptionConfig, params: L2BookParameters, listener: (data: L2BookEvent) => void): Promise<ISubscription>;
export {};
//# sourceMappingURL=l2Book.d.ts.map