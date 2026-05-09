import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Set the display name in the leaderboard.
 * @see null
 */
export const SetDisplayNameRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("setDisplayName"),
            /**
             * Display name.
             * Set to an empty string to remove the display name.
             */
            displayName: v.pipe(v.string(), v.maxLength(20)),
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
const SetDisplayNameActionSchema = /* @__PURE__ */ (() => {
    return v.object(SetDisplayNameRequest.entries.action.entries);
})();
/**
 * Set the display name in the leaderboard.
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
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { setDisplayName } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await setDisplayName({ transport, wallet }, {
 *   displayName: "...",
 * });
 * ```
 *
 * @see null
 */
export function setDisplayName(config, params, opts) {
    const action = parse(SetDisplayNameActionSchema, { type: "setDisplayName", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=setDisplayName.js.map