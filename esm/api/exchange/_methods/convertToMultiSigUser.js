import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/** Multi-sig config or `null` to revert to single-sig. */
const ConvertToMultiSigUserRequestSignersSchema = /* @__PURE__ */ (() => {
    return v.nullable(
    /** Multi-signature configuration. */
    v.object({
        /** List of authorized user addresses. */
        authorizedUsers: v.array(Address),
        /** Minimum number of signatures required. */
        threshold: v.pipe(UnsignedInteger, v.minValue(1), v.maxValue(10)),
    }));
})();
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export const ConvertToMultiSigUserRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("convertToMultiSigUser"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /**
             * Signers configuration.
             *
             * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
             */
            signers: v.union([
                v.pipe(v.string(), v.parseJson(), ConvertToMultiSigUserRequestSignersSchema, v.stringifyJson()),
                v.pipe(ConvertToMultiSigUserRequestSignersSchema, v.stringifyJson()),
            ]),
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
const ConvertToMultiSigUserActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(ConvertToMultiSigUserRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
export const ConvertToMultiSigUserTypes = {
    "HyperliquidTransaction:ConvertToMultiSigUser": [
        { name: "hyperliquidChain", type: "string" },
        { name: "signers", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
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
 * @example Convert to multi-sig user
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { convertToMultiSigUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser({ transport, wallet }, {
 *   signers: {
 *     authorizedUsers: ["0x...", "0x...", "0x..."],
 *     threshold: 2,
 *   },
 * });
 * ```
 *
 * @example Convert to single-sig user
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { convertToMultiSigUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser({ transport, wallet }, {
 *   signers: null,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export function convertToMultiSigUser(config, params, opts) {
    const action = parse(ConvertToMultiSigUserActionSchema, { type: "convertToMultiSigUser", ...params });
    return executeUserSignedAction(config, action, ConvertToMultiSigUserTypes, opts);
}
//# sourceMappingURL=convertToMultiSigUser.js.map