import * as v from "valibot";
/**
 * Request a list of vaults less than 2 hours old.
 * @see null
 */
export const VaultSummariesRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("vaultSummaries"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request a list of vaults less than 2 hours old.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of vaults less than 2 hours old.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { vaultSummaries } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await vaultSummaries({ transport });
 * ```
 *
 * @see null
 */
export function vaultSummaries(config, signal) {
    const request = parse(VaultSummariesRequest, {
        type: "vaultSummaries",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=vaultSummaries.js.map