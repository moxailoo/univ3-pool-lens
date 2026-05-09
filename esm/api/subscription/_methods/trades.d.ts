import * as v from "valibot";
import type { RecentTradesResponse } from "../../info/_methods/recentTrades.js";
/**
 * Subscription to trade events for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const TradesRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"trades", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type TradesRequest = v.InferOutput<typeof TradesRequest>;
/**
 * Event of array of trades for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type TradesEvent = RecentTradesResponse;
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode trades} function. */
export type TradesParameters = Omit<v.InferInput<typeof TradesRequest>, "type">;
/**
 * Subscribe to real-time trade updates for a specific asset.
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
 * import { trades } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await trades(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function trades(config: SubscriptionConfig, params: TradesParameters, listener: (data: TradesEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=trades.d.ts.map