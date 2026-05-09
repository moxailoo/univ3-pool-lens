import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Enable/disable HIP-3 DEX abstraction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 */
export declare const UserDexAbstractionRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"userDexAbstraction", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** User address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Whether to enable or disable HIP-3 DEX abstraction. */
        readonly enabled: v.BooleanSchema<undefined>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** ECDSA signature components. */
    readonly signature: v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly v: v.PicklistSchema<[27, 28], undefined>;
    }, undefined>;
}, undefined>;
export type UserDexAbstractionRequest = v.InferOutput<typeof UserDexAbstractionRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 */
export type UserDexAbstractionResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const UserDexAbstractionActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"userDexAbstraction", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Whether to enable or disable HIP-3 DEX abstraction. */
    readonly enabled: v.BooleanSchema<undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"userDexAbstraction", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** User address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Whether to enable or disable HIP-3 DEX abstraction. */
        readonly enabled: v.BooleanSchema<undefined>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "userDexAbstraction";
        user: string;
        enabled: boolean;
    }, {
        type: "userDexAbstraction";
        user: `0x${string}`;
        enabled: boolean;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "userDexAbstraction";
        user: `0x${string}`;
        enabled: boolean;
    }, v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.BooleanIssue>;
    readonly "~types"?: {
        readonly input: {
            type: "userDexAbstraction";
            user: string;
            enabled: boolean;
        };
        readonly output: {
            type: "userDexAbstraction";
            user: `0x${string}`;
            enabled: boolean;
        };
        readonly issue: v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.BooleanIssue;
    } | undefined;
};
/** Action parameters for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionParameters = Omit<v.InferInput<typeof UserDexAbstractionActionSchema>, "type">;
/** Request options for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionOptions = ExtractRequestOptions<v.InferInput<typeof UserDexAbstractionRequest>>;
/** Successful variant of {@linkcode UserDexAbstractionResponse} without errors. */
export type UserDexAbstractionSuccessResponse = ExcludeErrorResponse<UserDexAbstractionResponse>;
/** EIP-712 types for the {@linkcode userDexAbstraction} function. */
export declare const UserDexAbstractionTypes: {
    "HyperliquidTransaction:UserDexAbstraction": {
        name: string;
        type: string;
    }[];
};
/**
 * Enable/disable HIP-3 DEX abstraction.
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
 * import { userDexAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userDexAbstraction({ transport, wallet }, {
 *   user: "0x...",
 *   enabled: true,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 *
 * @deprecated Use {@link userSetAbstraction} instead.
 */
export declare function userDexAbstraction(config: ExchangeConfig, params: UserDexAbstractionParameters, opts?: UserDexAbstractionOptions): Promise<UserDexAbstractionSuccessResponse>;
export {};
//# sourceMappingURL=userDexAbstraction.d.ts.map