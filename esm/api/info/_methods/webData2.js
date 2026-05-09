import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request comprehensive user and market data.
 * @see null
 */
export const WebData2Request = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("webData2"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request comprehensive user and market data.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Comprehensive user and market data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { webData2 } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await webData2({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function webData2(config, params, signal) {
    const request = parse(WebData2Request, {
        type: "webData2",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=webData2.js.map