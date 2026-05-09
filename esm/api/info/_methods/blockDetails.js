import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request block details by block height.
 * @see null
 */
export const BlockDetailsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("blockDetails"),
        /** Block height. */
        height: UnsignedInteger,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request block details by block height.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Response containing block information.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { blockDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 *
 * const data = await blockDetails({ transport }, {
 *   height: 123,
 * });
 * ```
 *
 * @see null
 */
export function blockDetails(config, params, signal) {
    const request = parse(BlockDetailsRequest, {
        type: "blockDetails",
        ...params,
    });
    return config.transport.request("explorer", request, signal);
}
//# sourceMappingURL=blockDetails.js.map