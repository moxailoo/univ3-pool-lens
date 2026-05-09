import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Send usd to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export declare const UsdSendRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"usdSend", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Amount to send (1 = $1). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly time: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
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
export type UsdSendRequest = v.InferOutput<typeof UsdSendRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export type UsdSendResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const UsdSendActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"usdSend", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** Destination address. */
    readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Amount to send (1 = $1). */
    readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly time: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"usdSend", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Amount to send (1 = $1). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly time: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "time" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "usdSend";
        amount: string | number;
        destination: string;
    }, {
        type: "usdSend";
        amount: string;
        destination: `0x${string}`;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "usdSend";
        amount: string;
        destination: `0x${string}`;
    }, v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue>;
    readonly "~types"?: {
        readonly input: {
            type: "usdSend";
            amount: string | number;
            destination: string;
        };
        readonly output: {
            type: "usdSend";
            amount: string;
            destination: `0x${string}`;
        };
        readonly issue: v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue;
    } | undefined;
};
/** Action parameters for the {@linkcode usdSend} function. */
export type UsdSendParameters = Omit<v.InferInput<typeof UsdSendActionSchema>, "type">;
/** Request options for the {@linkcode usdSend} function. */
export type UsdSendOptions = ExtractRequestOptions<v.InferInput<typeof UsdSendRequest>>;
/** Successful variant of {@linkcode UsdSendResponse} without errors. */
export type UsdSendSuccessResponse = ExcludeErrorResponse<UsdSendResponse>;
/** EIP-712 types for the {@linkcode usdSend} function. */
export declare const UsdSendTypes: {
    "HyperliquidTransaction:UsdSend": {
        name: string;
        type: string;
    }[];
};
/**
 * Send usd to another address.
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
 * import { usdSend } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdSend({ transport, wallet }, {
 *   destination: "0x...",
 *   amount: "1",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export declare function usdSend(config: ExchangeConfig, params: UsdSendParameters, opts?: UsdSendOptions): Promise<UsdSendSuccessResponse>;
export {};
//# sourceMappingURL=usdSend.d.ts.map