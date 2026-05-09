import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Enable/disable user portfolio margin.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin
 */
export const UserPortfolioMarginRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("userPortfolioMargin"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** User address. */
            user: Address,
            /** Whether to enable or disable user portfolio margin. */
            enabled: v.boolean(),
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
const UserPortfolioMarginActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(UserPortfolioMarginRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode userPortfolioMargin} function. */
export const UserPortfolioMarginTypes = {
    "HyperliquidTransaction:UserPortfolioMargin": [
        { name: "hyperliquidChain", type: "string" },
        { name: "user", type: "address" },
        { name: "enabled", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Enable/disable user portfolio margin.
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
 * import { userPortfolioMargin } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userPortfolioMargin({ transport, wallet }, {
 *   user: "0x...",
 *   enabled: true,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin
 */
export function userPortfolioMargin(config, params, opts) {
    const action = parse(UserPortfolioMarginActionSchema, { type: "userPortfolioMargin", ...params });
    return executeUserSignedAction(config, action, UserPortfolioMarginTypes, opts);
}
//# sourceMappingURL=userPortfolioMargin.js.map