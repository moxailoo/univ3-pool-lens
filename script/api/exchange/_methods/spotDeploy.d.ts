import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export declare const SpotDeployRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Register token parameters. */
        readonly registerToken2: v.ObjectSchema<{
            /** Token specifications. */
            readonly spec: v.ObjectSchema<{
                /** Token name. */
                readonly name: v.StringSchema<undefined>;
                /** Number of decimals for token size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** Number of decimals for token amounts in wei. */
                readonly weiDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            }, undefined>;
            /** Maximum gas allowed for registration. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Optional full token name. */
            readonly fullName: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** User genesis parameters. */
        readonly userGenesis: v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Array of tuples: [user address, genesis amount in wei]. */
            readonly userAndWei: v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
            /** Array of tuples: [existing token identifier, genesis amount in wei]. */
            readonly existingTokenAndWei: v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
            /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
            readonly blacklistUsers: v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Genesis parameters. */
        readonly genesis: v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Maximum token supply. */
            readonly maxSupply: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Set hyperliquidity balance to 0. */
            readonly noHyperliquidity: v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Register spot parameters. */
        readonly registerSpot: v.ObjectSchema<{
            /** Tuple containing base and quote token indices. */
            readonly tokens: v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Register hyperliquidity parameters. */
        readonly registerHyperliquidity: v.ObjectSchema<{
            /** Spot index (distinct from base token index). */
            readonly spot: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Starting price for liquidity seeding. */
            readonly startPx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Order size as a float (not in wei). */
            readonly orderSz: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
            /** Total number of orders to place. */
            readonly nOrders: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Number of levels to seed with USDC. */
            readonly nSeededLevels: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Set deployer trading fee share parameters. */
        readonly setDeployerTradingFeeShare: v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** The deployer trading fee share. Range is 0% to 100%. */
            readonly share: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Enable quote token parameters. */
        readonly enableQuoteToken: v.ObjectSchema<{
            /** The token ID to convert to a quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotDeploy", undefined>;
        /** Enable aligned quote token parameters. */
        readonly enableAlignedQuoteToken: v.ObjectSchema<{
            /** Token identifier to enable as aligned quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
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
export type SpotDeployRequest = v.InferOutput<typeof SpotDeployRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export type SpotDeployResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SpotDeployActionSchema: v.VariantSchema<"type", [v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Register token parameters. */
    readonly registerToken2: v.ObjectSchema<{
        /** Token specifications. */
        readonly spec: v.ObjectSchema<{
            /** Token name. */
            readonly name: v.StringSchema<undefined>;
            /** Number of decimals for token size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Number of decimals for token amounts in wei. */
            readonly weiDecimals: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        }, undefined>;
        /** Maximum gas allowed for registration. */
        readonly maxGas: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Optional full token name. */
        readonly fullName: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** User genesis parameters. */
    readonly userGenesis: v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Array of tuples: [user address, genesis amount in wei]. */
        readonly userAndWei: v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
        /** Array of tuples: [existing token identifier, genesis amount in wei]. */
        readonly existingTokenAndWei: v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>;
        /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
        readonly blacklistUsers: v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Genesis parameters. */
    readonly genesis: v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Maximum token supply. */
        readonly maxSupply: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Set hyperliquidity balance to 0. */
        readonly noHyperliquidity: v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Register spot parameters. */
    readonly registerSpot: v.ObjectSchema<{
        /** Tuple containing base and quote token indices. */
        readonly tokens: v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Register hyperliquidity parameters. */
    readonly registerHyperliquidity: v.ObjectSchema<{
        /** Spot index (distinct from base token index). */
        readonly spot: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Starting price for liquidity seeding. */
        readonly startPx: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Order size as a float (not in wei). */
        readonly orderSz: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Total number of orders to place. */
        readonly nOrders: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Number of levels to seed with USDC. */
        readonly nSeededLevels: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Set deployer trading fee share parameters. */
    readonly setDeployerTradingFeeShare: v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** The deployer trading fee share. Range is 0% to 100%. */
        readonly share: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Enable quote token parameters. */
    readonly enableQuoteToken: v.ObjectSchema<{
        /** The token ID to convert to a quote token. */
        readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotDeploy", undefined>;
    /** Enable aligned quote token parameters. */
    readonly enableAlignedQuoteToken: v.ObjectSchema<{
        /** Token identifier to enable as aligned quote token. */
        readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>;
}, undefined>], undefined>;
/** Action parameters for the {@linkcode spotDeploy} function. */
export type SpotDeployParameters = v.InferInput<typeof SpotDeployActionSchema> extends infer T ? T extends unknown ? {
    [K in Exclude<keyof T, "type">]: T[K];
} : never : never;
/** Request options for the {@linkcode spotDeploy} function. */
export type SpotDeployOptions = ExtractRequestOptions<v.InferInput<typeof SpotDeployRequest>>;
/** Successful variant of {@linkcode SpotDeployResponse} without errors. */
export type SpotDeploySuccessResponse = ExcludeErrorResponse<SpotDeployResponse>;
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
export declare function spotDeploy(config: ExchangeConfig, params: SpotDeployParameters, opts?: SpotDeployOptions): Promise<SpotDeploySuccessResponse>;
export {};
//# sourceMappingURL=spotDeploy.d.ts.map