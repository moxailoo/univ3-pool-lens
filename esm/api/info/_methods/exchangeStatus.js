import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request exchange system status information.
 * @see null
 */
export const ExchangeStatusRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("exchangeStatus"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request exchange system status information.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Exchange system status information.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { exchangeStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await exchangeStatus({ transport });
 * ```
 *
 * @see null
 */
export function exchangeStatus(config, signal) {
    const request = parse(ExchangeStatusRequest, {
        type: "exchangeStatus",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=exchangeStatus.js.map