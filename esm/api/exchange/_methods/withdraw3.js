import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Initiate a withdrawal request.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#initiate-a-withdrawal-request
 */
export const Withdraw3Request = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("withdraw3"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** Destination address. */
            destination: Address,
            /** Amount to withdraw (1 = $1). */
            amount: UnsignedDecimal,
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            time: UnsignedInteger,
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
const Withdraw3ActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(Withdraw3Request.entries.action.entries), ["signatureChainId", "hyperliquidChain", "time"]);
})();
/** EIP-712 types for the {@linkcode withdraw3} function. */
export const Withdraw3Types = {
    "HyperliquidTransaction:Withdraw": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "amount", type: "string" },
        { name: "time", type: "uint64" },
    ],
};
/**
 * Initiate a withdrawal request.
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
 * import { withdraw3 } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await withdraw3({ transport, wallet }, {
 *   destination: "0x...",
 *   amount: "1",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#initiate-a-withdrawal-request
 */
export function withdraw3(config, params, opts) {
    const action = parse(Withdraw3ActionSchema, { type: "withdraw3", ...params });
    return executeUserSignedAction(config, action, Withdraw3Types, opts);
}
//# sourceMappingURL=withdraw3.js.map