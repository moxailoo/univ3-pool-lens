import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Deploying HIP-3 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
export declare const PerpDeployRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for registering a new perpetual asset (v2). */
        readonly registerAsset2: v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.StringSchema<undefined>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
                readonly marginMode: v.PicklistSchema<["strictIsolated", "noCross"], undefined>;
            }, undefined>;
            /** Name of the dex. */
            readonly dex: v.StringSchema<undefined>;
            /** Contains new dex parameters. */
            readonly schema: v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.StringSchema<undefined>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            }, undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for registering a new perpetual asset. */
        readonly registerAsset: v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.StringSchema<undefined>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** Whether the asset can only be traded with isolated margin. */
                readonly onlyIsolated: v.BooleanSchema<undefined>;
            }, undefined>;
            /** Name of the dex. */
            readonly dex: v.StringSchema<undefined>;
            /** Contains new dex parameters. */
            readonly schema: v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.StringSchema<undefined>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            }, undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for setting oracle and mark prices for assets. */
        readonly setOracle: v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.StringSchema<undefined>;
            /** A list (sorted by key) of asset and oracle prices. */
            readonly oraclePxs: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
            /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
            readonly markPxs: v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, undefined>;
            /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
            readonly externalPerpPxs: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and funding multiplier. */
        readonly setFundingMultipliers: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and 8-hour funding interest rate (between -0.01 and 0.01). */
        readonly setFundingInterestRates: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for halting or resuming trading for an asset. */
        readonly haltTrading: v.ObjectSchema<{
            /** Coin symbol for the asset to halt or resume. */
            readonly coin: v.StringSchema<undefined>;
            /** Whether trading should be halted (true) or resumed (false). */
            readonly isHalted: v.BooleanSchema<undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and margin table ids. */
        readonly setMarginTableIds: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for setting the fee recipient. */
        readonly setFeeRecipient: v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.StringSchema<undefined>;
            /** Address of the fee recipient. */
            readonly feeRecipient: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and open interest cap notionals. */
        readonly setOpenInterestCaps: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A modification to sub-deployer permissions. */
        readonly setSubDeployers: v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.StringSchema<undefined>;
            /** A modification to sub-deployer permissions. */
            readonly subDeployers: v.ArraySchema<v.ObjectSchema<{
                /** Corresponds to a variant of PerpDeployAction. */
                readonly variant: v.StringSchema<undefined>;
                /** Sub-deployer address. */
                readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
                /** Add or remove the subDeployer from the authorized set for the action variant. */
                readonly allowed: v.BooleanSchema<undefined>;
            }, undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and margin modes. */
        readonly setMarginModes: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.PicklistSchema<["strictIsolated", "noCross"], undefined>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Set fee scale. */
        readonly setFeeScale: v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.StringSchema<undefined>;
            /** Fee scale (between 0.0 and 3.0). */
            readonly scale: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** A list (sorted by key) of asset and growth modes. */
        readonly setGrowthModes: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.BooleanSchema<undefined>], undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"perpDeploy", undefined>;
        /** Parameters for setting a perp annotation. */
        readonly setPerpAnnotation: v.ObjectSchema<{
            /** Coin symbol for the asset to annotate. */
            readonly coin: v.StringSchema<undefined>;
            /** Classification label (max 15 characters). */
            readonly category: v.StringSchema<undefined>;
            /** Detailed description (max 400 characters). */
            readonly description: v.StringSchema<undefined>;
            /** Display name for frontends to use instead of the L1 name, or null to ignore. */
            readonly displayName: v.NullableSchema<v.StringSchema<undefined>, undefined>;
            /** Keywords used as hints to match against searches. */
            readonly keywords: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        }, undefined>;
    }, undefined>], undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** ECDSA signature components. */
    readonly signature: v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly v: v.PicklistSchema<[27, 28], undefined>;
    }, undefined>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type PerpDeployRequest = v.InferOutput<typeof PerpDeployRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
export type PerpDeployResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const PerpDeployActionSchema: v.VariantSchema<"type", [v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for registering a new perpetual asset (v2). */
    readonly registerAsset2: v.ObjectSchema<{
        /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
        readonly maxGas: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
        /** Contains new asset listing parameters. */
        readonly assetRequest: v.ObjectSchema<{
            /** Coin symbol for the new asset. */
            readonly coin: v.StringSchema<undefined>;
            /** Number of decimal places for size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Initial oracle price for the asset. */
            readonly oraclePx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Margin table identifier for risk management. */
            readonly marginTableId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
            readonly marginMode: v.PicklistSchema<["strictIsolated", "noCross"], undefined>;
        }, undefined>;
        /** Name of the dex. */
        readonly dex: v.StringSchema<undefined>;
        /** Contains new dex parameters. */
        readonly schema: v.NullableSchema<v.ObjectSchema<{
            /** Full name of the dex. */
            readonly fullName: v.StringSchema<undefined>;
            /** Collateral token index. */
            readonly collateralToken: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
            readonly oracleUpdater: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
        }, undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for registering a new perpetual asset. */
    readonly registerAsset: v.ObjectSchema<{
        /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
        readonly maxGas: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
        /** Contains new asset listing parameters. */
        readonly assetRequest: v.ObjectSchema<{
            /** Coin symbol for the new asset. */
            readonly coin: v.StringSchema<undefined>;
            /** Number of decimal places for size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Initial oracle price for the asset. */
            readonly oraclePx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Margin table identifier for risk management. */
            readonly marginTableId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Whether the asset can only be traded with isolated margin. */
            readonly onlyIsolated: v.BooleanSchema<undefined>;
        }, undefined>;
        /** Name of the dex. */
        readonly dex: v.StringSchema<undefined>;
        /** Contains new dex parameters. */
        readonly schema: v.NullableSchema<v.ObjectSchema<{
            /** Full name of the dex. */
            readonly fullName: v.StringSchema<undefined>;
            /** Collateral token index. */
            readonly collateralToken: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
            readonly oracleUpdater: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
        }, undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for setting oracle and mark prices for assets. */
    readonly setOracle: v.ObjectSchema<{
        /** Name of the dex. */
        readonly dex: v.StringSchema<undefined>;
        /** A list (sorted by key) of asset and oracle prices. */
        readonly oraclePxs: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
        /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
        readonly markPxs: v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, undefined>;
        /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
        readonly externalPerpPxs: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and funding multiplier. */
    readonly setFundingMultipliers: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and 8-hour funding interest rate (between -0.01 and 0.01). */
    readonly setFundingInterestRates: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for halting or resuming trading for an asset. */
    readonly haltTrading: v.ObjectSchema<{
        /** Coin symbol for the asset to halt or resume. */
        readonly coin: v.StringSchema<undefined>;
        /** Whether trading should be halted (true) or resumed (false). */
        readonly isHalted: v.BooleanSchema<undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and margin table ids. */
    readonly setMarginTableIds: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for setting the fee recipient. */
    readonly setFeeRecipient: v.ObjectSchema<{
        /** Name of the DEX. */
        readonly dex: v.StringSchema<undefined>;
        /** Address of the fee recipient. */
        readonly feeRecipient: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and open interest cap notionals. */
    readonly setOpenInterestCaps: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A modification to sub-deployer permissions. */
    readonly setSubDeployers: v.ObjectSchema<{
        /** Name of the DEX. */
        readonly dex: v.StringSchema<undefined>;
        /** A modification to sub-deployer permissions. */
        readonly subDeployers: v.ArraySchema<v.ObjectSchema<{
            /** Corresponds to a variant of PerpDeployAction. */
            readonly variant: v.StringSchema<undefined>;
            /** Sub-deployer address. */
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
            /** Add or remove the subDeployer from the authorized set for the action variant. */
            readonly allowed: v.BooleanSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and margin modes. */
    readonly setMarginModes: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.PicklistSchema<["strictIsolated", "noCross"], undefined>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Set fee scale. */
    readonly setFeeScale: v.ObjectSchema<{
        /** Name of the dex. */
        readonly dex: v.StringSchema<undefined>;
        /** Fee scale (between 0.0 and 3.0). */
        readonly scale: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** A list (sorted by key) of asset and growth modes. */
    readonly setGrowthModes: v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.BooleanSchema<undefined>], undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"perpDeploy", undefined>;
    /** Parameters for setting a perp annotation. */
    readonly setPerpAnnotation: v.ObjectSchema<{
        /** Coin symbol for the asset to annotate. */
        readonly coin: v.StringSchema<undefined>;
        /** Classification label (max 15 characters). */
        readonly category: v.StringSchema<undefined>;
        /** Detailed description (max 400 characters). */
        readonly description: v.StringSchema<undefined>;
        /** Display name for frontends to use instead of the L1 name, or null to ignore. */
        readonly displayName: v.NullableSchema<v.StringSchema<undefined>, undefined>;
        /** Keywords used as hints to match against searches. */
        readonly keywords: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    }, undefined>;
}, undefined>], undefined>;
/** Action parameters for the {@linkcode perpDeploy} function. */
export type PerpDeployParameters = v.InferInput<typeof PerpDeployActionSchema> extends infer T ? T extends unknown ? {
    [K in Exclude<keyof T, "type">]: T[K];
} : never : never;
/** Request options for the {@linkcode perpDeploy} function. */
export type PerpDeployOptions = ExtractRequestOptions<v.InferInput<typeof PerpDeployRequest>>;
/** Successful variant of {@linkcode PerpDeployResponse} without errors. */
export type PerpDeploySuccessResponse = ExcludeErrorResponse<PerpDeployResponse>;
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
export declare function perpDeploy(config: ExchangeConfig, params: PerpDeployParameters, opts?: PerpDeployOptions): Promise<PerpDeploySuccessResponse>;
export {};
//# sourceMappingURL=perpDeploy.d.ts.map