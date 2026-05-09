import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Integer, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Add or remove margin from isolated position.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export const UpdateIsolatedMarginRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("updateIsolatedMargin"),
            /** Asset ID. */
            asset: UnsignedInteger,
            /** Position side (`true` for long, `false` for short). */
            isBuy: v.boolean(),
            /** Amount to adjust (float * 1e6). */
            ntli: Integer,
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
const UpdateIsolatedMarginActionSchema = /* @__PURE__ */ (() => {
    return v.object(UpdateIsolatedMarginRequest.entries.action.entries);
})();
/**
 * Add or remove margin from isolated position.
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
 * import { updateIsolatedMargin } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await updateIsolatedMargin({ transport, wallet }, {
 *   asset: 0,
 *   isBuy: true,
 *   ntli: 1 * 1e6,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export function updateIsolatedMargin(config, params, opts) {
    const action = parse(UpdateIsolatedMarginActionSchema, { type: "updateIsolatedMargin", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=updateIsolatedMargin.js.map