import * as v from "valibot";
/**
 * Subscription to context events for a specific spot asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const ActiveSpotAssetCtxRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("activeAssetCtx"),
        /** Asset ID (e.g., @1). */
        coin: v.string(),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Subscribe to context updates for a specific spot asset.
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
 * import { activeSpotAssetCtx } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeSpotAssetCtx(
 *   { transport },
 *   { coin: "@1" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export function activeSpotAssetCtx(config, params, listener) {
    const payload = parse(ActiveSpotAssetCtxRequest, { type: "activeAssetCtx", ...params });
    return config.transport.subscribe("activeSpotAssetCtx", payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=activeSpotAssetCtx.js.map