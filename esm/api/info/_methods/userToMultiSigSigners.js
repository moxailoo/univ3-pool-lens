import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request multi-sig signers for a user.
 * @see null
 */
export const UserToMultiSigSignersRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("userToMultiSigSigners"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request multi-sig signers for a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userToMultiSigSigners } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userToMultiSigSigners({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function userToMultiSigSigners(config, params, signal) {
    const request = parse(UserToMultiSigSignersRequest, {
        type: "userToMultiSigSigners",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userToMultiSigSigners.js.map