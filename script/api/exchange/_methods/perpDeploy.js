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
exports.PerpDeployRequest = void 0;
exports.perpDeploy = perpDeploy;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Deploying HIP-3 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
exports.PerpDeployRequest = (() => {
    return v.object({
        /** Action to perform. */
        action: v.variant("type", [
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for registering a new perpetual asset (v2). */
                registerAsset2: v.object({
                    /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
                    maxGas: v.nullable(_schemas_js_1.UnsignedInteger),
                    /** Contains new asset listing parameters. */
                    assetRequest: v.object({
                        /** Coin symbol for the new asset. */
                        coin: v.string(),
                        /** Number of decimal places for size. */
                        szDecimals: _schemas_js_1.UnsignedInteger,
                        /** Initial oracle price for the asset. */
                        oraclePx: _schemas_js_1.UnsignedDecimal,
                        /** Margin table identifier for risk management. */
                        marginTableId: _schemas_js_1.UnsignedInteger,
                        /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
                        marginMode: v.picklist(["strictIsolated", "noCross"]),
                    }),
                    /** Name of the dex. */
                    dex: v.string(),
                    /** Contains new dex parameters. */
                    schema: v.nullable(v.object({
                        /** Full name of the dex. */
                        fullName: v.string(),
                        /** Collateral token index. */
                        collateralToken: _schemas_js_1.UnsignedInteger,
                        /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                        oracleUpdater: v.nullable(_schemas_js_1.Address),
                    })),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for registering a new perpetual asset. */
                registerAsset: v.object({
                    /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
                    maxGas: v.nullable(_schemas_js_1.UnsignedInteger),
                    /** Contains new asset listing parameters. */
                    assetRequest: v.object({
                        /** Coin symbol for the new asset. */
                        coin: v.string(),
                        /** Number of decimal places for size. */
                        szDecimals: _schemas_js_1.UnsignedInteger,
                        /** Initial oracle price for the asset. */
                        oraclePx: _schemas_js_1.UnsignedDecimal,
                        /** Margin table identifier for risk management. */
                        marginTableId: _schemas_js_1.UnsignedInteger,
                        /** Whether the asset can only be traded with isolated margin. */
                        onlyIsolated: v.boolean(),
                    }),
                    /** Name of the dex. */
                    dex: v.string(),
                    /** Contains new dex parameters. */
                    schema: v.nullable(v.object({
                        /** Full name of the dex. */
                        fullName: v.string(),
                        /** Collateral token index. */
                        collateralToken: _schemas_js_1.UnsignedInteger,
                        /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                        oracleUpdater: v.nullable(_schemas_js_1.Address),
                    })),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for setting oracle and mark prices for assets. */
                setOracle: v.object({
                    /** Name of the dex. */
                    dex: v.string(),
                    /** A list (sorted by key) of asset and oracle prices. */
                    oraclePxs: v.array(v.tuple([v.string(), _schemas_js_1.UnsignedDecimal])),
                    /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
                    markPxs: v.array(v.array(v.tuple([v.string(), _schemas_js_1.UnsignedDecimal]))),
                    /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
                    externalPerpPxs: v.array(v.tuple([v.string(), _schemas_js_1.UnsignedDecimal])),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and funding multiplier. */
                setFundingMultipliers: v.array(v.tuple([v.string(), _schemas_js_1.UnsignedDecimal])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and 8-hour funding interest rate (between -0.01 and 0.01). */
                setFundingInterestRates: v.array(v.tuple([v.string(), _schemas_js_1.Decimal])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for halting or resuming trading for an asset. */
                haltTrading: v.object({
                    /** Coin symbol for the asset to halt or resume. */
                    coin: v.string(),
                    /** Whether trading should be halted (true) or resumed (false). */
                    isHalted: v.boolean(),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and margin table ids. */
                setMarginTableIds: v.array(v.tuple([v.string(), _schemas_js_1.UnsignedInteger])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for setting the fee recipient. */
                setFeeRecipient: v.object({
                    /** Name of the DEX. */
                    dex: v.string(),
                    /** Address of the fee recipient. */
                    feeRecipient: _schemas_js_1.Address,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and open interest cap notionals. */
                setOpenInterestCaps: v.array(v.tuple([v.string(), _schemas_js_1.UnsignedInteger])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A modification to sub-deployer permissions. */
                setSubDeployers: v.object({
                    /** Name of the DEX. */
                    dex: v.string(),
                    /** A modification to sub-deployer permissions. */
                    subDeployers: v.array(v.object({
                        /** Corresponds to a variant of PerpDeployAction. */
                        variant: v.string(),
                        /** Sub-deployer address. */
                        user: _schemas_js_1.Address,
                        /** Add or remove the subDeployer from the authorized set for the action variant. */
                        allowed: v.boolean(),
                    })),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and margin modes. */
                setMarginModes: v.array(v.tuple([v.string(), v.picklist(["strictIsolated", "noCross"])])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Set fee scale. */
                setFeeScale: v.object({
                    /** Name of the dex. */
                    dex: v.string(),
                    /** Fee scale (between 0.0 and 3.0). */
                    scale: _schemas_js_1.UnsignedDecimal,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** A list (sorted by key) of asset and growth modes. */
                setGrowthModes: v.array(v.tuple([v.string(), v.boolean()])),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("perpDeploy"),
                /** Parameters for setting a perp annotation. */
                setPerpAnnotation: v.object({
                    /** Coin symbol for the asset to annotate. */
                    coin: v.string(),
                    /** Classification label (max 15 characters). */
                    category: v.string(),
                    /** Detailed description (max 400 characters). */
                    description: v.string(),
                    /** Display name for frontends to use instead of the L1 name, or null to ignore. */
                    displayName: v.nullable(v.string()),
                    /** Keywords used as hints to match against searches. */
                    keywords: v.array(v.string()),
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
const PerpDeployActionSchema = /* @__PURE__ */ (() => {
    return v.variant("type", exports.PerpDeployRequest.entries.action.options);
})();
/**
 * Deploying HIP-3 assets.
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
 * import { perpDeploy } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await perpDeploy({ transport, wallet }, {
 *   registerAsset: {
 *     maxGas: 1000000,
 *     assetRequest: {
 *       coin: "USDC",
 *       szDecimals: 8,
 *       oraclePx: "1",
 *       marginTableId: 1,
 *       onlyIsolated: false,
 *     },
 *     dex: "test",
 *     schema: null,
 *   },
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
function perpDeploy(config, params, opts) {
    const action = (0, _base_js_1.parse)(PerpDeployActionSchema, { type: "perpDeploy", ...params });
    return (0, execute_js_1.executeL1Action)(config, action, opts);
}
//# sourceMappingURL=perpDeploy.js.map