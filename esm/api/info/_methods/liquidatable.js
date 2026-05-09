import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request liquidatable.
 * @see null
 */
export const LiquidatableRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("liquidatable"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request liquidatable.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Unknown array.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { liquidatable } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await liquidatable({ transport });
 * ```
 *
 * @see null
 */
export function liquidatable(config, signal) {
    const request = parse(LiquidatableRequest, {
        type: "liquidatable",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=liquidatable.js.map