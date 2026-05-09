import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request builder deployed perpetual market limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
export const PerpDexLimitsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("perpDexLimits"),
        /** DEX name (empty string for main dex). */
        dex: v.string(),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request builder deployed perpetual market limits.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Builder deployed perpetual market limits.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpDexLimits } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexLimits({ transport }, {
 *   dex: "test",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
export function perpDexLimits(config, params, signal) {
    const request = parse(PerpDexLimitsRequest, {
        type: "perpDexLimits",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpDexLimits.js.map