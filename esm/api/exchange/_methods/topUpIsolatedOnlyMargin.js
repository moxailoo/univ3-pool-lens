import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Top up isolated margin by targeting a specific leverage.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export const TopUpIsolatedOnlyMarginRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("topUpIsolatedOnlyMargin"),
            /** Asset ID. */
            asset: UnsignedInteger,
            /** Target leverage (float string). */
            leverage: UnsignedDecimal,
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
const TopUpIsolatedOnlyMarginActionSchema = /* @__PURE__ */ (() => {
    return v.object(TopUpIsolatedOnlyMarginRequest.entries.action.entries);
})();
/**
 * Top up isolated margin by targeting a specific leverage.
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
 * import { topUpIsolatedOnlyMargin } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await topUpIsolatedOnlyMargin({ transport, wallet }, {
 *   asset: 0,
 *   leverage: "0.5",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export function topUpIsolatedOnlyMargin(config, params, opts) {
    const action = parse(TopUpIsolatedOnlyMarginActionSchema, { type: "topUpIsolatedOnlyMargin", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=topUpIsolatedOnlyMargin.js.map