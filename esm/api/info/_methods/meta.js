import * as v from "valibot";
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export const MetaRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("meta"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
export function meta(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = parse(MetaRequest, {
        type: "meta",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=meta.js.map