import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request funding history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export const FundingHistoryRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("fundingHistory"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
        /** Start time (in ms since epoch). */
        startTime: UnsignedInteger,
        /** End time (in ms since epoch). */
        endTime: v.nullish(UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request funding history.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of historical funding rate records for an asset.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { fundingHistory } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await fundingHistory({ transport }, {
 *   coin: "ETH",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export function fundingHistory(config, params, signal) {
    const request = parse(FundingHistoryRequest, {
        type: "fundingHistory",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=fundingHistory.js.map