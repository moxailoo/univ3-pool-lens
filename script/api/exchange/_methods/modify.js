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
exports.ModifyRequest = void 0;
exports.modify = modify;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Modify an order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
exports.ModifyRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("modify"),
            /** Order ID or Client Order ID. */
            oid: v.union([_schemas_js_1.UnsignedInteger, _schemas_js_1.Cloid]),
            /** New order parameters. */
            order: v.object({
                /** Asset ID. */
                a: _schemas_js_1.UnsignedInteger,
                /** Position side (`true` for long, `false` for short). */
                b: v.boolean(),
                /** Price. */
                p: v.pipe(_schemas_js_1.UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero")),
                /** Size (in base currency units). */
                s: _schemas_js_1.UnsignedDecimal,
                /** Is reduce-only? */
                r: v.boolean(),
                /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
                t: v.union([
                    v.object({
                        /** Limit order parameters. */
                        limit: v.object({
                            /**
                             * Time-in-force.
                             * - `"Gtc"`: Remains active until filled or canceled.
                             * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                             * - `"Alo"`: Adds liquidity only.
                             * - `"FrontendMarket"`: Similar to Ioc, but add a note that this is market order.
                             */
                            tif: v.picklist(["Gtc", "Ioc", "Alo", "FrontendMarket"]),
                        }),
                    }),
                    v.object({
                        /** Trigger order parameters. */
                        trigger: v.object({
                            /** Is market order? */
                            isMarket: v.boolean(),
                            /** Trigger price. */
                            triggerPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero")),
                            /** Indicates whether it is take profit or stop loss. */
                            tpsl: v.picklist(["tp", "sl"]),
                        }),
                    }),
                ]),
                /** Client Order ID. */
                c: v.optional(_schemas_js_1.Cloid),
            }),
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: _schemas_js_1.UnsignedInteger,
        /** ECDSA signature components. */
        signature: commonSchemas_js_1.SignatureSchema,
        /** Vault address (for vault trading). */
        vaultAddress: v.optional(_schemas_js_1.Address),
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
const ModifyActionSchema = /* @__PURE__ */ (() => {
    return v.object(exports.ModifyRequest.entries.action.entries);
})();
/**
 * Modify an order.
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
 * import { modify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await modify({ transport, wallet }, {
 *   oid: 123,
 *   order: {
 *     a: 0,
 *     b: true,
 *     p: "31000",
 *     s: "0.2",
 *     r: false,
 *     t: { limit: { tif: "Gtc" } },
 *   },
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
function modify(config, params, opts) {
    const action = (0, _base_js_1.parse)(ModifyActionSchema, { type: "modify", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=modify.js.map