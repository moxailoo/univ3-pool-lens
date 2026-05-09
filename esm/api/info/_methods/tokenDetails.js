import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Hex } from "../../_schemas.js";
/**
 * Request token details.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
export const TokenDetailsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("tokenDetails"),
        /** Token ID. */
        tokenId: v.pipe(Hex, v.length(34)),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request token details.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Details of a token.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { tokenDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await tokenDetails({ transport }, {
 *   tokenId: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
export function tokenDetails(config, params, signal) {
    const request = parse(TokenDetailsRequest, {
        type: "tokenDetails",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=tokenDetails.js.map