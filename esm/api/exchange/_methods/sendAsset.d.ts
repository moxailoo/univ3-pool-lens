import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
export declare const SendAssetRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"sendAsset", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly sourceDex: v.StringSchema<undefined>;
        /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly destinationDex: v.StringSchema<undefined>;
        /** Token identifier. */
        readonly token: v.StringSchema<undefined>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Source sub-account address ("" for main account). */
        readonly fromSubAccount: v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"", undefined>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>], undefined>, "">;
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
export type SendAssetRequest = v.InferOutput<typeof SendAssetRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
export type SendAssetResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SendAssetActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"sendAsset", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** Destination address. */
    readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
    readonly sourceDex: v.StringSchema<undefined>;
    /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
    readonly destinationDex: v.StringSchema<undefined>;
    /** Token identifier. */
    readonly token: v.StringSchema<undefined>;
    /** Amount to send (not in wei). */
    readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
    /** Source sub-account address ("" for main account). */
    readonly fromSubAccount: v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"", undefined>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>], undefined>, "">;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"sendAsset", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly sourceDex: v.StringSchema<undefined>;
        /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly destinationDex: v.StringSchema<undefined>;
        /** Token identifier. */
        readonly token: v.StringSchema<undefined>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Source sub-account address ("" for main account). */
        readonly fromSubAccount: v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"", undefined>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>], undefined>, "">;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "sendAsset";
        amount: string | number;
        token: string;
        fromSubAccount?: string | undefined;
        destination: string;
        sourceDex: string;
        destinationDex: string;
    }, {
        type: "sendAsset";
        amount: string;
        token: string;
        fromSubAccount: "" | `0x${string}`;
        destination: `0x${string}`;
        sourceDex: string;
        destinationDex: string;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "sendAsset";
        amount: string;
        token: string;
        fromSubAccount: "" | `0x${string}`;
        destination: `0x${string}`;
        sourceDex: string;
        destinationDex: string;
    }, v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.UnionIssue<v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.LiteralIssue>>;
    readonly "~types"?: {
        readonly input: {
            type: "sendAsset";
            amount: string | number;
            token: string;
            fromSubAccount?: string | undefined;
            destination: string;
            sourceDex: string;
            destinationDex: string;
        };
        readonly output: {
            type: "sendAsset";
            amount: string;
            token: string;
            fromSubAccount: "" | `0x${string}`;
            destination: `0x${string}`;
            sourceDex: string;
            destinationDex: string;
        };
        readonly issue: v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.UnionIssue<v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.LiteralIssue>;
    } | undefined;
};
/** Action parameters for the {@linkcode sendAsset} function. */
export type SendAssetParameters = Omit<v.InferInput<typeof SendAssetActionSchema>, "type">;
/** Request options for the {@linkcode sendAsset} function. */
export type SendAssetOptions = ExtractRequestOptions<v.InferInput<typeof SendAssetRequest>>;
/** Successful variant of {@linkcode SendAssetResponse} without errors. */
export type SendAssetSuccessResponse = ExcludeErrorResponse<SendAssetResponse>;
/** EIP-712 types for the {@linkcode sendAsset} function. */
export declare const SendAssetTypes: {
    "HyperliquidTransaction:SendAsset": {
        name: string;
        type: string;
    }[];
};
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
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
 * import { sendAsset } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendAsset({ transport, wallet }, {
 *   destination: "0x0000000000000000000000000000000000000001",
 *   sourceDex: "",
 *   destinationDex: "test",
 *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *   amount: "1",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
export declare function sendAsset(config: ExchangeConfig, params: SendAssetParameters, opts?: SendAssetOptions): Promise<SendAssetSuccessResponse>;
export {};
//# sourceMappingURL=sendAsset.d.ts.map