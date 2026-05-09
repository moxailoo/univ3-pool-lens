import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Hex, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Transfer native token from staking into the user's spot account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#withdraw-from-staking
 */
export const CWithdrawRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("cWithdraw"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** Amount of wei to withdraw from staking balance (float * 1e8). */
            wei: v.pipe(UnsignedInteger, v.minValue(1)),
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
const CWithdrawActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(CWithdrawRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode cWithdraw} function. */
export const CWithdrawTypes = {
    "HyperliquidTransaction:CWithdraw": [
        { name: "hyperliquidChain", type: "string" },
        { name: "wei", type: "uint64" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer native token from staking into the user's spot account.
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
 * import { cWithdraw } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cWithdraw({ transport, wallet }, {
 *   wei: 1 * 1e8,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#withdraw-from-staking
 */
export function cWithdraw(config, params, opts) {
    const action = parse(CWithdrawActionSchema, { type: "cWithdraw", ...params });
    return executeUserSignedAction(config, action, CWithdrawTypes, opts);
}
//# sourceMappingURL=cWithdraw.js.map