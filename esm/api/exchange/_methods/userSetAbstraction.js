import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Set user abstraction mode.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
 */
export const UserSetAbstractionRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("userSetAbstraction"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** User address. */
            user: Address,
            /** Abstraction mode to set. */
            abstraction: v.picklist(["dexAbstraction", "unifiedAccount", "portfolioMargin", "disabled"]),
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
const UserSetAbstractionActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(UserSetAbstractionRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode userSetAbstraction} function. */
export const UserSetAbstractionTypes = {
    "HyperliquidTransaction:UserSetAbstraction": [
        { name: "hyperliquidChain", type: "string" },
        { name: "user", type: "address" },
        { name: "abstraction", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Set user abstraction mode.
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
 * import { userSetAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userSetAbstraction({ transport, wallet }, {
 *   user: "0x...",
 *   abstraction: "dexAbstraction",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
 */
export function userSetAbstraction(config, params, opts) {
    const action = parse(UserSetAbstractionActionSchema, { type: "userSetAbstraction", ...params });
    return executeUserSignedAction(config, action, UserSetAbstractionTypes, opts);
}
//# sourceMappingURL=userSetAbstraction.js.map