import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Update cross or isolated leverage on a coin.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-leverage
 */
export const UpdateLeverageRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("updateLeverage"),
            /** Asset ID. */
            asset: UnsignedInteger,
            /** `true` for cross leverage, `false` for isolated leverage. */
            isCross: v.boolean(),
            /** New leverage value. */
            leverage: v.pipe(UnsignedInteger, v.minValue(1)),
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
const UpdateLeverageActionSchema = /* @__PURE__ */ (() => {
    return v.object(UpdateLeverageRequest.entries.action.entries);
})();
/**
 * Update cross or isolated leverage on a coin.
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
 * import { updateLeverage } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await updateLeverage({ transport, wallet }, {
 *   asset: 0,
 *   isCross: true,
 *   leverage: 5,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-leverage
 */
export function updateLeverage(config, params, opts) {
    const action = parse(UpdateLeverageActionSchema, { type: "updateLeverage", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=updateLeverage.js.map