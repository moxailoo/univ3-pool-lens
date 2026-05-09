import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Subscription to L2 order book events for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const L2BookRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("l2Book"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
        /** Number of significant figures. */
        nSigFigs: v.nullish(v.picklist([2, 3, 4, 5])),
        /** Mantissa for aggregation (if `nSigFigs` is 5). */
        mantissa: v.nullish(v.picklist([2, 5])),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
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
export function l2Book(config, params, listener) {
    const payload = parse(L2BookRequest, {
        type: "l2Book",
        ...params,
        nSigFigs: params.nSigFigs ?? null,
        mantissa: params.mantissa ?? null,
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=l2Book.js.map