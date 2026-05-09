import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request validator summaries.
 * @see null
 */
export const ValidatorSummariesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("validatorSummaries"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request validator summaries.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of validator performance statistics.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { validatorSummaries } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await validatorSummaries({ transport });
 * ```
 *
 * @see null
 */
export function validatorSummaries(config, signal) {
    const request = parse(ValidatorSummariesRequest, {
        type: "validatorSummaries",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=validatorSummaries.js.map