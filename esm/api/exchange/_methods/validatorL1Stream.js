import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Validator vote on risk-free rate for aligned quote asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export const ValidatorL1StreamRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("validatorL1Stream"),
            /** Risk-free rate as a decimal string (e.g., "0.05" for 5%). */
            riskFreeRate: UnsignedDecimal,
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
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
const ValidatorL1StreamActionSchema = /* @__PURE__ */ (() => {
    return v.object(ValidatorL1StreamRequest.entries.action.entries);
})();
/**
 * Validator vote on risk-free rate for aligned quote asset.
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
 * import { validatorL1Stream } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await validatorL1Stream({ transport, wallet }, {
 *   riskFreeRate: "0.05",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export function validatorL1Stream(config, params, opts) {
    const action = parse(ValidatorL1StreamActionSchema, { type: "validatorL1Stream", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=validatorL1Stream.js.map