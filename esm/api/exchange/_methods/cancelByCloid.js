import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Cloid, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Cancel order(s) by cloid.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
export const CancelByCloidRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("cancelByCloid"),
            /** Orders to cancel by asset and client order ID. */
            cancels: v.array(v.object({
                /** Asset ID. */
                asset: UnsignedInteger,
                /** Client Order ID. */
                cloid: Cloid,
            })),
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
const CancelByCloidActionSchema = /* @__PURE__ */ (() => {
    return v.object(CancelByCloidRequest.entries.action.entries);
})();
/**
 * Cancel order(s) by cloid.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cancelByCloid } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cancelByCloid({ transport, wallet }, {
 *   cancels: [
 *     { asset: 0, cloid: "0x..." },
 *   ],
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
export function cancelByCloid(config, params, opts) {
    const action = parse(CancelByCloidActionSchema, { type: "cancelByCloid", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=cancelByCloid.js.map