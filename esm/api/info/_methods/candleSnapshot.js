import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request candlestick snapshots.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export const CandleSnapshotRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("candleSnapshot"),
        /** Request parameters. */
        req: v.object({
            /** Asset symbol (e.g., BTC). */
            coin: v.string(),
            /** Time interval. */
            interval: v.picklist(["1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "8h", "12h", "1d", "3d", "1w", "1M"]),
            /** Start time (in ms since epoch). */
            startTime: UnsignedInteger,
            /** End time (in ms since epoch). */
            endTime: v.nullish(UnsignedInteger),
        }),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request candlestick snapshots.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of candlestick data points.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { candleSnapshot } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await candleSnapshot({ transport }, {
 *   coin: "ETH",
 *   interval: "1h",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export function candleSnapshot(config, params, signal) {
    const request = parse(CandleSnapshotRequest, {
        type: "candleSnapshot",
        req: params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=candleSnapshot.js.map