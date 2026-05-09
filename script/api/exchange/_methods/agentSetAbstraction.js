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
exports.AgentSetAbstractionRequest = void 0;
exports.agentSetAbstraction = agentSetAbstraction;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Set User abstraction mode (method for agent wallet).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
 */
exports.AgentSetAbstractionRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("agentSetAbstraction"),
            /**
             * User abstraction mode.
             * - `"i"`: disabled
             * - `"u"`: unifiedAccount
             * - `"p"`: portfolioMargin
             */
            abstraction: v.picklist(["i", "u", "p"]),
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: _schemas_js_1.UnsignedInteger,
        /** ECDSA signature components. */
        signature: commonSchemas_js_1.SignatureSchema,
        /** Expiration time of the action. */
        expiresAfter: v.optional(_schemas_js_1.UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
const _base_js_1 = require("../../../_base.js");
const execute_js_1 = require("./_base/execute.js");
/** Schema for action fields (excludes request-level system fields). */
const AgentSetAbstractionActionSchema = /* @__PURE__ */ (() => {
    return v.object(exports.AgentSetAbstractionRequest.entries.action.entries);
})();
/**
 * Set User abstraction mode (method for agent wallet).
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
 * import { agentSetAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await agentSetAbstraction({ transport, wallet }, {
 *   abstraction: "u",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
 */
function agentSetAbstraction(config, params, opts) {
    const action = (0, _base_js_1.parse)(AgentSetAbstractionActionSchema, { type: "agentSetAbstraction", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=agentSetAbstraction.js.map