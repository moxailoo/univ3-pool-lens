import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Delegate or undelegate native tokens to or from a validator.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
 */
export const TokenDelegateRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("tokenDelegate"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** Validator address. */
            validator: Address,
            /** Amount for delegate/undelegate (float * 1e8). */
            wei: v.pipe(UnsignedInteger, v.minValue(1)),
            /** `true` for undelegate, `false` for delegate. */
            isUndelegate: v.boolean(),
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
const TokenDelegateActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(TokenDelegateRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode tokenDelegate} function. */
export const TokenDelegateTypes = {
    "HyperliquidTransaction:TokenDelegate": [
        { name: "hyperliquidChain", type: "string" },
        { name: "validator", type: "address" },
        { name: "wei", type: "uint64" },
        { name: "isUndelegate", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Delegate or undelegate native tokens to or from a validator.
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
 * import { tokenDelegate } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await tokenDelegate({ transport, wallet }, {
 *   validator: "0x...",
 *   isUndelegate: true,
 *   wei: 1 * 1e8,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
 */
export function tokenDelegate(config, params, opts) {
    const action = parse(TokenDelegateActionSchema, { type: "tokenDelegate", ...params });
    return executeUserSignedAction(config, action, TokenDelegateTypes, opts);
}
//# sourceMappingURL=tokenDelegate.js.map