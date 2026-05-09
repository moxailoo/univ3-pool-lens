import * as v from "valibot";
/**
 * Subscription to mid price events for all coins.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const AllMidsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("allMids"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function allMids(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = parse(AllMidsRequest, {
        type: "allMids",
        ...params,
        dex: params.dex || undefined, // Same value as in response
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.dex === payload.dex) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=allMids.js.map