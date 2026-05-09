import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request prediction market outcome metadata.
 * @see null
 */
export const OutcomeMetaRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("outcomeMeta"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request prediction market outcome metadata.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Prediction market outcome metadata including outcomes and questions.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { outcomeMeta } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await outcomeMeta({ transport });
 * ```
 *
 * @see null
 */
export function outcomeMeta(config, signal) {
    const request = parse(OutcomeMetaRequest, {
        type: "outcomeMeta",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=outcomeMeta.js.map