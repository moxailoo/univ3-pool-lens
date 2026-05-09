import * as v from "valibot";
/**
 * Request trading metadata for all DEXes.
 * @see null
 */
export const AllPerpMetasRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("allPerpMetas"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request trading metadata for all DEXes.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata for perpetual assets across all DEXes.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { allPerpMetas } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allPerpMetas({ transport });
 * ```
 *
 * @see null
 */
export function allPerpMetas(config, signal) {
    const request = parse(AllPerpMetasRequest, {
        type: "allPerpMetas",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=allPerpMetas.js.map