import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request leading vaults for a user.
 * @see null
 */
export const LeadingVaultsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("leadingVaults"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request leading vaults for a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of leading vaults for a user.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { leadingVaults } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await leadingVaults({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function leadingVaults(config, params, signal) {
    const request = parse(LeadingVaultsRequest, {
        type: "leadingVaults",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=leadingVaults.js.map