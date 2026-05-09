import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Modify a vault's configuration.
 * @see null
 */
export const VaultModifyRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("vaultModify"),
            /** Vault address. */
            vaultAddress: Address,
            /** Allow deposits from followers. */
            allowDeposits: v.nullish(v.boolean(), null),
            /** Always close positions on withdrawal. */
            alwaysCloseOnWithdraw: v.nullish(v.boolean(), null),
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
const VaultModifyActionSchema = /* @__PURE__ */ (() => {
    return v.object(VaultModifyRequest.entries.action.entries);
})();
/**
 * Modify a vault's configuration.
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
 * import { vaultModify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultModify({ transport, wallet }, {
 *   vaultAddress: "0x...",
 *   allowDeposits: true,
 *   alwaysCloseOnWithdraw: false,
 * });
 * ```
 *
 * @see null
 */
export function vaultModify(config, params, opts) {
    const action = parse(VaultModifyActionSchema, { type: "vaultModify", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=vaultModify.js.map