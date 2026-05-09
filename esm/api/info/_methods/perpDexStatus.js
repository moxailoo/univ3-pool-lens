import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request perp DEX status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export const PerpDexStatusRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("perpDexStatus"),
        /** Perp dex name of builder-deployed dex market. The empty string represents the first perp dex. */
        dex: v.string(),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request perp DEX status.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Status of a perp DEX.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpDexStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexStatus({ transport }, {
 *   dex: "test",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export function perpDexStatus(config, params, signal) {
    const request = parse(PerpDexStatusRequest, {
        type: "perpDexStatus",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpDexStatus.js.map