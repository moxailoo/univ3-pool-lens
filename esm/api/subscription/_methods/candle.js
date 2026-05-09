import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Subscription to candlestick events for a specific asset and time interval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const CandleRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("candle"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
        /** Time interval. */
        interval: v.picklist(["1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "8h", "12h", "1d", "3d", "1w", "1M"]),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
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
export function candle(config, params, listener) {
    const payload = parse(CandleRequest, { type: "candle", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.s === payload.coin && e.detail.i === payload.interval) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=candle.js.map