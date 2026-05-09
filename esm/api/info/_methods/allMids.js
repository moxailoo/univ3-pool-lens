import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request mid coin prices.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export const AllMidsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("allMids"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function allMids(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = parse(AllMidsRequest, {
        type: "allMids",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=allMids.js.map