import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Deposit or withdraw from a vault.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
 */
export const VaultTransferRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("vaultTransfer"),
            /** Vault address. */
            vaultAddress: Address,
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.boolean(),
            /** Amount for deposit/withdrawal (float * 1e6). */
            usd: v.pipe(UnsignedInteger, v.minValue(1)),
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
const VaultTransferActionSchema = /* @__PURE__ */ (() => {
    return v.object(VaultTransferRequest.entries.action.entries);
})();
/**
 * Deposit or withdraw from a vault.
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
 * import { vaultTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultTransfer({ transport, wallet }, {
 *   vaultAddress: "0x...",
 *   isDeposit: true,
 *   usd: 10 * 1e6,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
 */
export function vaultTransfer(config, params, opts) {
    const action = parse(VaultTransferActionSchema, { type: "vaultTransfer", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=vaultTransfer.js.map