import * as v from "valibot";
/**
 * Subscription to context events for all perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const AssetCtxsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("assetCtxs"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function assetCtxs(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = parse(AssetCtxsRequest, {
        type: "assetCtxs",
        ...params,
        dex: params.dex ?? "", // Same value as in response
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.dex === payload.dex) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=assetCtxs.js.map