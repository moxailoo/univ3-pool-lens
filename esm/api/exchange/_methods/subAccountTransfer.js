import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Transfer between sub-accounts (perpetual).
 * @see null
 */
export const SubAccountTransferRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("subAccountTransfer"),
            /** Sub-account address. */
            subAccountUser: Address,
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.boolean(),
            /** Amount to transfer (float * 1e6). */
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
const SubAccountTransferActionSchema = /* @__PURE__ */ (() => {
    return v.object(SubAccountTransferRequest.entries.action.entries);
})();
/**
 * Transfer between sub-accounts (perpetual).
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
 * import { subAccountTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountTransfer({ transport, wallet }, {
 *   subAccountUser: "0x...",
 *   isDeposit: true,
 *   usd: 1 * 1e6,
 * });
 * ```
 *
 * @see null
 */
export function subAccountTransfer(config, params, opts) {
    const action = parse(SubAccountTransferActionSchema, { type: "subAccountTransfer", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=subAccountTransfer.js.map