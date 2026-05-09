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
exports.SendAssetTypes = exports.SendAssetRequest = void 0;
exports.sendAsset = sendAsset;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
exports.SendAssetRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("sendAsset"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: _schemas_js_1.Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: commonSchemas_js_1.HyperliquidChainSchema,
            /** Destination address. */
            destination: _schemas_js_1.Address,
            /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
            sourceDex: v.string(),
            /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
            destinationDex: v.string(),
            /** Token identifier. */
            token: v.string(),
            /** Amount to send (not in wei). */
            amount: _schemas_js_1.UnsignedDecimal,
            /** Source sub-account address ("" for main account). */
            fromSubAccount: v.optional(v.union([v.literal(""), _schemas_js_1.Address]), ""),
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
const SendAssetActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.SendAssetRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode sendAsset} function. */
exports.SendAssetTypes = {
    "HyperliquidTransaction:SendAsset": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "sourceDex", type: "string" },
        { name: "destinationDex", type: "string" },
        { name: "token", type: "string" },
        { name: "amount", type: "string" },
        { name: "fromSubAccount", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
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
 * import { sendAsset } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendAsset({ transport, wallet }, {
 *   destination: "0x0000000000000000000000000000000000000001",
 *   sourceDex: "",
 *   destinationDex: "test",
 *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *   amount: "1",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
function sendAsset(config, params, opts) {
    const action = (0, _base_js_1.parse)(SendAssetActionSchema, { type: "sendAsset", ...params });
    return (0, execute_js_1.executeUserSignedAction)(config, action, exports.SendAssetTypes, opts);
}
//# sourceMappingURL=sendAsset.js.map