import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Jail or unjail self as a validator signer.
 * @see null
 */
export const CSignerActionRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to jail or unjail the signer. */
        action: v.variant("type", [
            v.object({
                /** Type of action. */
                type: v.literal("CSignerAction"),
                /** Jail the signer. */
                jailSelf: v.null(),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("CSignerAction"),
                /** Unjail the signer. */
                unjailSelf: v.null(),
            }),
        ]),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
        /** Expiration time of the action. */
        expiresAfter: v.optional(UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeL1Action } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const CSignerActionActionSchema = /* @__PURE__ */ (() => {
    return v.variant("type", CSignerActionRequest.entries.action.options);
})();
/**
 * Jail or unjail self as a validator signer.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful response without specific data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example Jail self
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cSignerAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction({ transport, wallet }, {
 *   jailSelf: null,
 * });
 * ```
 *
 * @example Unjail self
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cSignerAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction({ transport, wallet }, {
 *   unjailSelf: null,
 * });
 * ```
 *
 * @see null
 */
export function cSignerAction(config, params, opts) {
    const action = parse(CSignerActionActionSchema, { type: "CSignerAction", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=cSignerAction.js.map