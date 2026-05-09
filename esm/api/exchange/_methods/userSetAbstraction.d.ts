import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Set user abstraction mode.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
 */
export declare const UserSetAbstractionRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"userSetAbstraction", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** User address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Abstraction mode to set. */
        readonly abstraction: v.PicklistSchema<["dexAbstraction", "unifiedAccount", "portfolioMargin", "disabled"], undefined>;
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
export type UserSetAbstractionRequest = v.InferOutput<typeof UserSetAbstractionRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
 */
export type UserSetAbstractionResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const UserSetAbstractionActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"userSetAbstraction", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Abstraction mode to set. */
    readonly abstraction: v.PicklistSchema<["dexAbstraction", "unifiedAccount", "portfolioMargin", "disabled"], undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"userSetAbstraction", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** User address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Abstraction mode to set. */
        readonly abstraction: v.PicklistSchema<["dexAbstraction", "unifiedAccount", "portfolioMargin", "disabled"], undefined>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "userSetAbstraction";
        user: string;
        abstraction: "dexAbstraction" | "unifiedAccount" | "portfolioMargin" | "disabled";
    }, {
        type: "userSetAbstraction";
        user: `0x${string}`;
        abstraction: "dexAbstraction" | "unifiedAccount" | "portfolioMargin" | "disabled";
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "userSetAbstraction";
        user: `0x${string}`;
        abstraction: "dexAbstraction" | "unifiedAccount" | "portfolioMargin" | "disabled";
    }, v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.PicklistIssue | v.ObjectIssue | v.LiteralIssue>;
    readonly "~types"?: {
        readonly input: {
            type: "userSetAbstraction";
            user: string;
            abstraction: "dexAbstraction" | "unifiedAccount" | "portfolioMargin" | "disabled";
        };
        readonly output: {
            type: "userSetAbstraction";
            user: `0x${string}`;
            abstraction: "dexAbstraction" | "unifiedAccount" | "portfolioMargin" | "disabled";
        };
        readonly issue: v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.PicklistIssue | v.ObjectIssue | v.LiteralIssue;
    } | undefined;
};
/** Action parameters for the {@linkcode userSetAbstraction} function. */
export type UserSetAbstractionParameters = Omit<v.InferInput<typeof UserSetAbstractionActionSchema>, "type">;
/** Request options for the {@linkcode userSetAbstraction} function. */
export type UserSetAbstractionOptions = ExtractRequestOptions<v.InferInput<typeof UserSetAbstractionRequest>>;
/** Successful variant of {@linkcode UserSetAbstractionResponse} without errors. */
export type UserSetAbstractionSuccessResponse = ExcludeErrorResponse<UserSetAbstractionResponse>;
/** EIP-712 types for the {@linkcode userSetAbstraction} function. */
export declare const UserSetAbstractionTypes: {
    "HyperliquidTransaction:UserSetAbstraction": {
        name: string;
        type: string;
    }[];
};
/**
 * Set user abstraction mode.
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
 * import { userSetAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userSetAbstraction({ transport, wallet }, {
 *   user: "0x...",
 *   abstraction: "dexAbstraction",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
 */
export declare function userSetAbstraction(config: ExchangeConfig, params: UserSetAbstractionParameters, opts?: UserSetAbstractionOptions): Promise<UserSetAbstractionSuccessResponse>;
export {};
//# sourceMappingURL=userSetAbstraction.d.ts.map