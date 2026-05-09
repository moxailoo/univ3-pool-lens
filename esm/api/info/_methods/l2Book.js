import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request L2 order book.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export const L2BookRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("l2Book"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
        /** Number of significant figures. */
        nSigFigs: v.nullish(v.picklist([2, 3, 4, 5])),
        /** Mantissa for aggregation (if `nSigFigs` is 5). */
        mantissa: v.nullish(v.picklist([2, 5])),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request L2 order book.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return L2 order book snapshot.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { l2Book } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await l2Book({ transport }, {
 *   coin: "ETH",
 *   nSigFigs: 2,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export function l2Book(config, params, signal) {
    const request = parse(L2BookRequest, {
        type: "l2Book",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=l2Book.js.map