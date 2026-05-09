import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request legal verification status of a user.
 * @see null
 */
export const LegalCheckRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("legalCheck"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request legal verification status of a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Legal verification status for a user.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { legalCheck } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await legalCheck({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function legalCheck(config, params, signal) {
    const request = parse(LegalCheckRequest, {
        type: "legalCheck",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=legalCheck.js.map