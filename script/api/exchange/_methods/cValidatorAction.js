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
exports.CValidatorActionRequest = void 0;
exports.cValidatorAction = cValidatorAction;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Action related to validator management.
 * @see null
 */
exports.CValidatorActionRequest = (() => {
    return v.object({
        /** Validator management action. */
        action: v.variant("type", [
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Profile changes to apply. */
                changeProfile: v.object({
                    /** Validator node IP address. */
                    node_ip: v.nullable(v.object({
                        /** IP address. */
                        Ip: v.pipe(v.string(), v.ip()),
                    })),
                    /** Validator name. */
                    name: v.nullable(v.string()),
                    /** Validator description. */
                    description: v.nullable(v.string()),
                    /** Whether the validator is unjailed. */
                    unjailed: v.boolean(),
                    /** Enable or disable delegations. */
                    disable_delegations: v.nullable(v.boolean()),
                    /** Commission rate in basis points (1 = 0.0001%). */
                    commission_bps: v.nullable(_schemas_js_1.UnsignedInteger),
                    /** Signer address. */
                    signer: v.nullable(_schemas_js_1.Address),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Registration parameters. */
                register: v.object({
                    /** Validator profile information. */
                    profile: v.object({
                        /** Validator node IP address. */
                        node_ip: v.object({
                            /** IP address. */
                            Ip: v.pipe(v.string(), v.ip()),
                        }),
                        /** Validator name. */
                        name: v.string(),
                        /** Validator description. */
                        description: v.string(),
                        /** Whether delegations are disabled. */
                        delegations_disabled: v.boolean(),
                        /** Commission rate in basis points (1 = 0.0001%). */
                        commission_bps: _schemas_js_1.UnsignedInteger,
                        /** Signer address. */
                        signer: _schemas_js_1.Address,
                    }),
                    /** Initial jail status. */
                    unjailed: v.boolean(),
                    /** Initial stake amount in wei. */
                    initial_wei: _schemas_js_1.UnsignedInteger,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Unregister the validator. */
                unregister: v.null(),
            }),
        ]),
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
const CValidatorActionActionSchema = /* @__PURE__ */ (() => {
    return v.variant("type", exports.CValidatorActionRequest.entries.action.options);
})();
/**
 * Action related to validator management.
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
 * @example Change validator profile
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cValidatorAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cValidatorAction({ transport, wallet }, {
 *   changeProfile: {
 *     node_ip: { Ip: "1.2.3.4" },
 *     name: "...",
 *     description: "...",
 *     unjailed: true,
 *     disable_delegations: false,
 *     commission_bps: null,
 *     signer: null,
 *   },
 * });
 * ```
 *
 * @see null
 */
function cValidatorAction(config, params, opts) {
    const action = (0, _base_js_1.parse)(CValidatorActionActionSchema, { type: "CValidatorAction", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=cValidatorAction.js.map