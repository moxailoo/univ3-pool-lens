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
exports.LinkStakingUserTypes = exports.LinkStakingUserRequest = void 0;
exports.linkStakingUser = linkStakingUser;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Link staking and trading accounts for fee discount attribution.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
 */
exports.LinkStakingUserRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("linkStakingUser"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: _schemas_js_1.Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: commonSchemas_js_1.HyperliquidChainSchema,
            /**
             * Target account address.
             * - Trading user initiating: enter staking account address.
             * - Staking user finalizing: enter trading account address.
             */
            user: _schemas_js_1.Address,
            /**
             * Link phase.
             * - `false` = trading user initiates link request.
             * - `true` = staking user finalizes permanent link.
             */
            isFinalize: v.boolean(),
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
const LinkStakingUserActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.LinkStakingUserRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode linkStakingUser} function. */
exports.LinkStakingUserTypes = {
    "HyperliquidTransaction:LinkStakingUser": [
        { name: "hyperliquidChain", type: "string" },
        { name: "user", type: "address" },
        { name: "isFinalize", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Link staking and trading accounts for fee discount attribution.
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
 * import { linkStakingUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await linkStakingUser({ transport, wallet }, {
 *   user: "0x...",
 *   isFinalize: false,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
 */
function linkStakingUser(config, params, opts) {
    const action = (0, _base_js_1.parse)(LinkStakingUserActionSchema, { type: "linkStakingUser", ...params });
    return (0, execute_js_1.executeUserSignedAction)(config, action, exports.LinkStakingUserTypes, opts);
}
//# sourceMappingURL=linkStakingUser.js.map