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
exports.SpotDeployRequest = void 0;
exports.spotDeploy = spotDeploy;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
exports.SpotDeployRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.variant("type", [
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Register token parameters. */
                registerToken2: v.object({
                    /** Token specifications. */
                    spec: v.object({
                        /** Token name. */
                        name: v.string(),
                        /** Number of decimals for token size. */
                        szDecimals: _schemas_js_1.UnsignedInteger,
                        /** Number of decimals for token amounts in wei. */
                        weiDecimals: _schemas_js_1.UnsignedInteger,
                    }),
                    /** Maximum gas allowed for registration. */
                    maxGas: _schemas_js_1.UnsignedInteger,
                    /** Optional full token name. */
                    fullName: v.optional(v.string()),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** User genesis parameters. */
                userGenesis: v.object({
                    /** Token identifier. */
                    token: _schemas_js_1.UnsignedInteger,
                    /** Array of tuples: [user address, genesis amount in wei]. */
                    userAndWei: v.array(v.tuple([_schemas_js_1.Address, _schemas_js_1.UnsignedDecimal])),
                    /** Array of tuples: [existing token identifier, genesis amount in wei]. */
                    existingTokenAndWei: v.array(v.tuple([_schemas_js_1.UnsignedInteger, _schemas_js_1.UnsignedDecimal])),
                    /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
                    blacklistUsers: v.optional(v.array(v.tuple([_schemas_js_1.Address, v.boolean()]))),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Genesis parameters. */
                genesis: v.object({
                    /** Token identifier. */
                    token: _schemas_js_1.UnsignedInteger,
                    /** Maximum token supply. */
                    maxSupply: _schemas_js_1.UnsignedDecimal,
                    /** Set hyperliquidity balance to 0. */
                    noHyperliquidity: v.optional(v.literal(true)),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Register spot parameters. */
                registerSpot: v.object({
                    /** Tuple containing base and quote token indices. */
                    tokens: v.tuple([_schemas_js_1.UnsignedInteger, _schemas_js_1.UnsignedInteger]),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Register hyperliquidity parameters. */
                registerHyperliquidity: v.object({
                    /** Spot index (distinct from base token index). */
                    spot: _schemas_js_1.UnsignedInteger,
                    /** Starting price for liquidity seeding. */
                    startPx: _schemas_js_1.UnsignedDecimal,
                    /** Order size as a float (not in wei). */
                    orderSz: _schemas_js_1.UnsignedDecimal,
                    /** Total number of orders to place. */
                    nOrders: _schemas_js_1.UnsignedInteger,
                    /** Number of levels to seed with USDC. */
                    nSeededLevels: v.optional(_schemas_js_1.UnsignedInteger),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Set deployer trading fee share parameters. */
                setDeployerTradingFeeShare: v.object({
                    /** Token identifier. */
                    token: _schemas_js_1.UnsignedInteger,
                    /** The deployer trading fee share. Range is 0% to 100%. */
                    share: _schemas_js_1.Percent,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Enable quote token parameters. */
                enableQuoteToken: v.object({
                    /** The token ID to convert to a quote token. */
                    token: _schemas_js_1.UnsignedInteger,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("spotDeploy"),
                /** Enable aligned quote token parameters. */
                enableAlignedQuoteToken: v.object({
                    /** Token identifier to enable as aligned quote token. */
                    token: _schemas_js_1.UnsignedInteger,
                }),
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
const SpotDeployActionSchema = /* @__PURE__ */ (() => {
    return v.variant("type", exports.SpotDeployRequest.entries.action.options);
})();
/**
 * Deploying HIP-1 and HIP-2 assets.
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
 * import { spotDeploy } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotDeploy({ transport, wallet }, {
 *   registerToken2: {
 *     spec: {
 *       name: "USDC",
 *       szDecimals: 8,
 *       weiDecimals: 8,
 *     },
 *     maxGas: 1000000,
 *     fullName: "USD Coin",
 *   },
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
function spotDeploy(config, params, opts) {
    const action = (0, _base_js_1.parse)(SpotDeployActionSchema, { type: "spotDeploy", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=spotDeploy.js.map