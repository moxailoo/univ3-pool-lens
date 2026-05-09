import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request perpetuals at open interest cap.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export const PerpsAtOpenInterestCapRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("perpsAtOpenInterestCap"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function perpsAtOpenInterestCap(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = parse(PerpsAtOpenInterestCapRequest, {
        type: "perpsAtOpenInterestCap",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpsAtOpenInterestCap.js.map