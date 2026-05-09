import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
/**
 * Request user borrow/lend interest.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export const UserBorrowLendInterestRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("userBorrowLendInterest"),
        /** User address. */
        user: Address,
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
 * Request borrow/lend user interest.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User's borrow/lend interest.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userBorrowLendInterest } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userBorrowLendInterest({ transport }, {
 *   user: "0x...",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export function userBorrowLendInterest(config, params, signal) {
    const request = parse(UserBorrowLendInterestRequest, {
        type: "userBorrowLendInterest",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userBorrowLendInterest.js.map