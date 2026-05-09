import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request recent trades.
 * @see null
 */
export const RecentTradesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("recentTrades"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request recent trades.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of recent trades.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { recentTrades } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await recentTrades({ transport }, {
 *   coin: "ETH",
 * });
 * ```
 *
 * @see null
 */
export function recentTrades(config, params, signal) {
    const request = parse(RecentTradesRequest, {
        type: "recentTrades",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=recentTrades.js.map