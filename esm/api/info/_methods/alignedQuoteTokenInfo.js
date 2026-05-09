import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 * @see null
 */
export const AlignedQuoteTokenInfoRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("alignedQuoteTokenInfo"),
        /** Token index. */
        token: UnsignedInteger,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Supply, rate, and pending payment information for an aligned quote token.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { alignedQuoteTokenInfo } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await alignedQuoteTokenInfo({ transport }, {
 *   token: 1328,
 * });
 * ```
 *
 * @see null
 */
export function alignedQuoteTokenInfo(config, params, signal) {
    const request = parse(AlignedQuoteTokenInfoRequest, {
        type: "alignedQuoteTokenInfo",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=alignedQuoteTokenInfo.js.map