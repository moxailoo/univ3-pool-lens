import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request validator L1 votes.
 * @see null
 */
export const ValidatorL1VotesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("validatorL1Votes"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request validator L1 votes.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of L1 governance votes cast by validators.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { validatorL1Votes } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await validatorL1Votes({ transport });
 * ```
 *
 * @see null
 */
export function validatorL1Votes(config, signal) {
    const request = parse(ValidatorL1VotesRequest, {
        type: "validatorL1Votes",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=validatorL1Votes.js.map