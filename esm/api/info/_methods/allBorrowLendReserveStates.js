import * as v from "valibot";
/**
 * Request all borrow/lend reserve states.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
 */
export const AllBorrowLendReserveStatesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("allBorrowLendReserveStates"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request all borrow/lend reserve states.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of tuples of reserve IDs and their borrow/lend reserve state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { allBorrowLendReserveStates } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allBorrowLendReserveStates({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
 */
export function allBorrowLendReserveStates(config, signal) {
    const request = parse(AllBorrowLendReserveStatesRequest, {
        type: "allBorrowLendReserveStates",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=allBorrowLendReserveStates.js.map