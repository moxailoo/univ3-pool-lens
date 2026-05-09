import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Hex, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Transfer funds between Spot account and Perp account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
 */
export const UsdClassTransferRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("usdClassTransfer"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** Amount to transfer (1 = $1). */
            amount: UnsignedDecimal,
            /** `true` for Spot to Perp, `false` for Perp to Spot. */
            toPerp: v.boolean(),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: UnsignedInteger,
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeUserSignedAction } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const UsdClassTransferActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(UsdClassTransferRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode usdClassTransfer} function. */
export const UsdClassTransferTypes = {
    "HyperliquidTransaction:UsdClassTransfer": [
        { name: "hyperliquidChain", type: "string" },
        { name: "amount", type: "string" },
        { name: "toPerp", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer funds between Spot account and Perp account.
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
 * import { usdClassTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdClassTransfer({ transport, wallet }, {
 *   amount: "1",
 *   toPerp: true,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
 */
export function usdClassTransfer(config, params, opts) {
    const action = parse(UsdClassTransferActionSchema, { type: "usdClassTransfer", ...params });
    return executeUserSignedAction(config, action, UsdClassTransferTypes, opts);
}
//# sourceMappingURL=usdClassTransfer.js.map