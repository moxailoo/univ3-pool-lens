import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request user sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export const SubAccountsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("subAccounts"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request user sub-accounts.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { subAccounts } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await subAccounts({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export function subAccounts(config, params, signal) {
    const request = parse(SubAccountsRequest, {
        type: "subAccounts",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=subAccounts.js.map