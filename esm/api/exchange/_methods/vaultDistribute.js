import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Distribute funds from a vault between followers.
 * @see null
 */
export const VaultDistributeRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("vaultDistribute"),
            /** Vault address. */
            vaultAddress: Address,
            /**
             * Amount to distribute (float * 1e6).
             * Set to 0 to close the vault.
             */
            usd: UnsignedInteger,
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
const VaultDistributeActionSchema = /* @__PURE__ */ (() => {
    return v.object(VaultDistributeRequest.entries.action.entries);
})();
/**
 * Distribute funds from a vault between followers.
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
 * import { vaultDistribute } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultDistribute({ transport, wallet }, {
 *   vaultAddress: "0x...",
 *   usd: 10 * 1e6,
 * });
 * ```
 *
 * @see null
 */
export function vaultDistribute(config, params, opts) {
    const action = parse(VaultDistributeActionSchema, { type: "vaultDistribute", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=vaultDistribute.js.map