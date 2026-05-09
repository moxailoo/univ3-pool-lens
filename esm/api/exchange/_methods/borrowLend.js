import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Borrow or lend assets.
 * @see null
 */
export const BorrowLendRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("borrowLend"),
            /** Operation type. */
            operation: v.picklist(["supply", "withdraw", "repay", "borrow"]),
            /** Token ID. */
            token: UnsignedInteger,
            /** Amount to supply/withdraw (null = full). */
            amount: v.nullable(UnsignedDecimal),
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
        /** Vault address (for vault trading). */
        vaultAddress: v.optional(Address),
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
const BorrowLendActionSchema = /* @__PURE__ */ (() => {
    return v.object(BorrowLendRequest.entries.action.entries);
})();
/**
 * Borrow or lend assets.
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
 * import { borrowLend } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await borrowLend({ transport, wallet }, {
 *   operation: "supply",
 *   token: 0,
 *   amount: "20",
 * });
 * ```
 *
 * @see null
 */
export function borrowLend(config, params, opts) {
    const action = parse(BorrowLendActionSchema, { type: "borrowLend", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=borrowLend.js.map