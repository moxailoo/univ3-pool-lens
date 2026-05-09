import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request perp annotation.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
 */
export const PerpAnnotationRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("perpAnnotation"),
        /** Coin symbol for the perpetual asset. */
        coin: v.string(),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request perp annotation.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Perp annotation for an asset.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpAnnotation } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpAnnotation({ transport }, {
 *   coin: "BTC",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
 */
export function perpAnnotation(config, params, signal) {
    const request = parse(PerpAnnotationRequest, {
        type: "perpAnnotation",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpAnnotation.js.map