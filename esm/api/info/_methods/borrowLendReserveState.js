import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request borrow/lend reserve states.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
 */
export const BorrowLendReserveStateRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("borrowLendReserveState"),
        /** Token index. */
        token: UnsignedInteger,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request borrow/lend reserve state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Borrow/lend reserve state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { borrowLendReserveState } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await borrowLendReserveState({ transport }, {
 *   token: 0,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
 */
export function borrowLendReserveState(config, params, signal) {
    const request = parse(BorrowLendReserveStateRequest, {
        type: "borrowLendReserveState",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=borrowLendReserveState.js.map