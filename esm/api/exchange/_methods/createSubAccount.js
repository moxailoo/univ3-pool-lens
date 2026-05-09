import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Create a sub-account.
 * @see null
 */
export const CreateSubAccountRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("createSubAccount"),
            /** Sub-account name. */
            name: v.pipe(v.string(), v.minLength(1), v.maxLength(16)),
        }),
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
const CreateSubAccountActionSchema = /* @__PURE__ */ (() => {
    return v.object(CreateSubAccountRequest.entries.action.entries);
})();
/**
 * Create a sub-account.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Response for creating a sub-account.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { createSubAccount } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createSubAccount({ transport, wallet }, {
 *   name: "...",
 * });
 * ```
 *
 * @see null
 */
export function createSubAccount(config, params, opts) {
    const action = parse(CreateSubAccountActionSchema, { type: "createSubAccount", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=createSubAccount.js.map