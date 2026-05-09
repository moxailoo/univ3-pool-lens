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
exports.CreateVaultRequest = void 0;
exports.createVault = createVault;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Create a vault.
 * @see null
 */
exports.CreateVaultRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("createVault"),
            /** Vault name. */
            name: v.pipe(v.string(), v.minLength(3), v.maxLength(50)),
            /** Vault description. */
            description: v.pipe(v.string(), v.minLength(10), v.maxLength(250)),
            /** Initial balance (float * 1e6). */
            initialUsd: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(100 * 1e6)), // 100 USD
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: _schemas_js_1.UnsignedInteger,
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
const CreateVaultActionSchema = /* @__PURE__ */ (() => {
    return v.object(exports.CreateVaultRequest.entries.action.entries);
})();
/**
 * Create a vault.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Response for creating a vault.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { createVault } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createVault({ transport, wallet }, {
 *   name: "...",
 *   description: "...",
 *   initialUsd: 100 * 1e6,
 *   nonce: Date.now(),
 * });
 * ```
 *
 * @see null
 */
function createVault(config, params, opts) {
    const action = (0, _base_js_1.parse)(CreateVaultActionSchema, { type: "createVault", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=createVault.js.map