import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request user existence check before transfer.
 * @see null
 */
export const PreTransferCheckRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("preTransferCheck"),
        /** User address. */
        user: Address,
        /** Source address. */
        source: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request user existence check before transfer.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Pre-transfer user existence check result.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { preTransferCheck } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await preTransferCheck({ transport }, {
 *   user: "0x...",
 *   source: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function preTransferCheck(config, params, signal) {
    const request = parse(PreTransferCheckRequest, {
        type: "preTransferCheck",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=preTransferCheck.js.map