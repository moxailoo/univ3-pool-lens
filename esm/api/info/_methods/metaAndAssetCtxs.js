import * as v from "valibot";
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export const MetaAndAssetCtxsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("metaAndAssetCtxs"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function metaAndAssetCtxs(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = parse(MetaAndAssetCtxsRequest, {
        type: "metaAndAssetCtxs",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=metaAndAssetCtxs.js.map