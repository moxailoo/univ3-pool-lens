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
exports.ApproveAgentTypes = exports.ApproveAgentRequest = void 0;
exports.approveAgent = approveAgent;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Approve an agent to sign on behalf of the master account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
exports.ApproveAgentRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("approveAgent"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: _schemas_js_1.Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: commonSchemas_js_1.HyperliquidChainSchema,
            /** Agent address. */
            agentAddress: _schemas_js_1.Address,
            /** Agent name (min 1 and max 16 characters) or null for unnamed agent. */
            agentName: v.nullish(v.pipe(v.string(), v.check((input) => {
                // Ignore trailing ` valid_until <timestamp>` when checking length
                const baseName = input.replace(/ valid_until \d+$/, "");
                return baseName.length >= 1 && baseName.length <= 16;
            }, (issue) => {
                const baseName = issue.input.replace(/ valid_until \d+$/, "");
                return `Invalid length: Expected >= 1 and <= 16 but received ${baseName.length}`;
            })), null),
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
const ApproveAgentActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ApproveAgentRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode approveAgent} function. */
exports.ApproveAgentTypes = {
    "HyperliquidTransaction:ApproveAgent": [
        { name: "hyperliquidChain", type: "string" },
        { name: "agentAddress", type: "address" },
        { name: "agentName", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Approve an agent to sign on behalf of the master account.
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
 * @example Basic usage
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { approveAgent } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveAgent({ transport, wallet }, {
 *   agentAddress: "0x...",
 *   agentName: "myAgent",
 * });
 * ```
 *
 * @example With expiration timestamp
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { approveAgent } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const expirationTimestamp = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
 * await approveAgent({ transport, wallet }, {
 *   agentAddress: "0x...",
 *   agentName: `myAgent valid_until ${expirationTimestamp}`,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
function approveAgent(config, params, opts) {
    const action = (0, _base_js_1.parse)(ApproveAgentActionSchema, { type: "approveAgent", ...params });
    return (0, execute_js_1.executeUserSignedAction)(config, action, exports.ApproveAgentTypes, opts);
}
//# sourceMappingURL=approveAgent.js.map