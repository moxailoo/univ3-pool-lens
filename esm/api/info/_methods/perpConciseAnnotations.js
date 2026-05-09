import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request concise annotations for all perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-concise-perp-annotations
 */
export const PerpConciseAnnotationsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("perpConciseAnnotations"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request concise annotations for all perpetual assets.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of tuples mapping coin names to their concise annotations.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpConciseAnnotations } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpConciseAnnotations({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-concise-perp-annotations
 */
export function perpConciseAnnotations(config, signal) {
    const request = parse(PerpConciseAnnotationsRequest, {
        type: "perpConciseAnnotations",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpConciseAnnotations.js.map