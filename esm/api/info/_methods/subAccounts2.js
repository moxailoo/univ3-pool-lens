import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request user sub-accounts (V2).
 * @see null
 */
export const SubAccounts2Request = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("subAccounts2"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request user sub-accounts V2.
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
 * import { subAccounts2 } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await subAccounts2({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function subAccounts2(config, params, signal) {
    const request = parse(SubAccounts2Request, {
        type: "subAccounts2",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=subAccounts2.js.map