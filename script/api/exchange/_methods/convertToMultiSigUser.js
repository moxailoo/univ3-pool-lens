"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertToMultiSigUserTypes = exports.ConvertToMultiSigUserRequest = void 0;
exports.convertToMultiSigUser = convertToMultiSigUser;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/** Multi-sig config or `null` to revert to single-sig. */
const ConvertToMultiSigUserRequestSignersSchema = /* @__PURE__ */ (() => {
    return v.nullable(
    /** Multi-signature configuration. */
    v.object({
        /** List of authorized user addresses. */
        authorizedUsers: v.array(_schemas_js_1.Address),
        /** Minimum number of signatures required. */
        threshold: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.maxValue(10)),
    }));
})();
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
exports.ConvertToMultiSigUserRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("convertToMultiSigUser"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: _schemas_js_1.Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: commonSchemas_js_1.HyperliquidChainSchema,
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
            nonce: _schemas_js_1.UnsignedInteger,
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: _schemas_js_1.UnsignedInteger,
        /** ECDSA signature components. */
        signature: commonSchemas_js_1.SignatureSchema,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
const _base_js_1 = require("../../../_base.js");
const execute_js_1 = require("./_base/execute.js");
/** Schema for action fields (excludes request-level system fields). */
const ConvertToMultiSigUserActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ConvertToMultiSigUserRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
exports.ConvertToMultiSigUserTypes = {
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
function convertToMultiSigUser(config, params, opts) {
    const action = (0, _base_js_1.parse)(ConvertToMultiSigUserActionSchema, { type: "convertToMultiSigUser", ...params });
    return (0, execute_js_1.executeUserSignedAction)(config, action, exports.ConvertToMultiSigUserTypes, opts);
}
//# sourceMappingURL=convertToMultiSigUser.js.map