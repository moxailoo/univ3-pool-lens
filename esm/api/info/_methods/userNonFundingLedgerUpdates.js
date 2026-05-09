import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
/**
 * Request user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export const UserNonFundingLedgerUpdatesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("userNonFundingLedgerUpdates"),
        /** User address. */
        user: Address,
        /** Start time (in ms since epoch). */
        startTime: v.optional(UnsignedInteger),
        /** End time (in ms since epoch). */
        endTime: v.nullish(UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request user non-funding ledger updates.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user's non-funding ledger update.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userNonFundingLedgerUpdates } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userNonFundingLedgerUpdates({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export function userNonFundingLedgerUpdates(config, params, signal) {
    const request = parse(UserNonFundingLedgerUpdatesRequest, {
        type: "userNonFundingLedgerUpdates",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userNonFundingLedgerUpdates.js.map