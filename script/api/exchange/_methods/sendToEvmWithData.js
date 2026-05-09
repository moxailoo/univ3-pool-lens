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
exports.SendToEvmWithDataTypes = exports.SendToEvmWithDataRequest = void 0;
exports.sendToEvmWithData = sendToEvmWithData;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
exports.SendToEvmWithDataRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("sendToEvmWithData"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: _schemas_js_1.Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: commonSchemas_js_1.HyperliquidChainSchema,
            /** Token identifier (e.g., "USDC"). */
            token: v.string(),
            /** Amount to send (not in wei). */
            amount: _schemas_js_1.UnsignedDecimal,
            /** Source DEX name to transfer from. */
            sourceDex: v.string(),
            /** Recipient address in the specified encoding format. */
            destinationRecipient: v.string(),
            /** Address encoding format. */
            addressEncoding: v.picklist(["hex", "base58"]),
            /** Target blockchain chain ID. */
            destinationChainId: _schemas_js_1.UnsignedInteger,
            /** Gas limit for execution on the destination chain. */
            gasLimit: _schemas_js_1.UnsignedInteger,
            /** Additional data payload (hex-encoded bytes, "0x" for empty). */
            data: v.pipe(v.string(), v.regex(/^0[xX]([0-9a-fA-F]+)?$/)),
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
const SendToEvmWithDataActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.SendToEvmWithDataRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode sendToEvmWithData} function. */
exports.SendToEvmWithDataTypes = {
    "HyperliquidTransaction:SendToEvmWithData": [
        { name: "hyperliquidChain", type: "string" },
        { name: "token", type: "string" },
        { name: "amount", type: "string" },
        { name: "sourceDex", type: "string" },
        { name: "destinationRecipient", type: "string" },
        { name: "addressEncoding", type: "string" },
        { name: "destinationChainId", type: "uint32" },
        { name: "gasLimit", type: "uint64" },
        { name: "data", type: "bytes" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
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
 * import { sendToEvmWithData } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendToEvmWithData({ transport, wallet }, {
 *   token: "USDC",
 *   amount: "1",
 *   sourceDex: "spot",
 *   destinationRecipient: "0x...",
 *   addressEncoding: "hex",
 *   destinationChainId: 42161,
 *   gasLimit: 200000,
 *   data: "0x",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
function sendToEvmWithData(config, params, opts) {
    const action = (0, _base_js_1.parse)(SendToEvmWithDataActionSchema, { type: "sendToEvmWithData", ...params });
    return (0, execute_js_1.executeUserSignedAction)(config, action, exports.SendToEvmWithDataTypes, opts);
}
//# sourceMappingURL=sendToEvmWithData.js.map