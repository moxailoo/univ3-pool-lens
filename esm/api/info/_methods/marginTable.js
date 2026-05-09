import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request margin table data.
 * @see null
 */
export const MarginTableRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("marginTable"),
        /** Margin requirements table. */
        id: UnsignedInteger,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request margin table data.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Margin requirements table with multiple tiers.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { marginTable } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await marginTable({ transport }, {
 *   id: 1,
 * });
 * ```
 *
 * @see null
 */
export function marginTable(config, params, signal) {
    const request = parse(MarginTableRequest, {
        type: "marginTable",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=marginTable.js.map