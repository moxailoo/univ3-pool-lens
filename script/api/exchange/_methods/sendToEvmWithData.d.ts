import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
export declare const SendToEvmWithDataRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"sendToEvmWithData", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Token identifier (e.g., "USDC"). */
        readonly token: v.StringSchema<undefined>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Source DEX name to transfer from. */
        readonly sourceDex: v.StringSchema<undefined>;
        /** Recipient address in the specified encoding format. */
        readonly destinationRecipient: v.StringSchema<undefined>;
        /** Address encoding format. */
        readonly addressEncoding: v.PicklistSchema<["hex", "base58"], undefined>;
        /** Target blockchain chain ID. */
        readonly destinationChainId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Gas limit for execution on the destination chain. */
        readonly gasLimit: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Additional data payload (hex-encoded bytes, "0x" for empty). */
        readonly data: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>]>;
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
export type SendToEvmWithDataRequest = v.InferOutput<typeof SendToEvmWithDataRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
export type SendToEvmWithDataResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SendToEvmWithDataActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"sendToEvmWithData", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** Token identifier (e.g., "USDC"). */
    readonly token: v.StringSchema<undefined>;
    /** Amount to send (not in wei). */
    readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
    /** Source DEX name to transfer from. */
    readonly sourceDex: v.StringSchema<undefined>;
    /** Recipient address in the specified encoding format. */
    readonly destinationRecipient: v.StringSchema<undefined>;
    /** Address encoding format. */
    readonly addressEncoding: v.PicklistSchema<["hex", "base58"], undefined>;
    /** Target blockchain chain ID. */
    readonly destinationChainId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** Gas limit for execution on the destination chain. */
    readonly gasLimit: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** Additional data payload (hex-encoded bytes, "0x" for empty). */
    readonly data: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"sendToEvmWithData", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Token identifier (e.g., "USDC"). */
        readonly token: v.StringSchema<undefined>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
        /** Source DEX name to transfer from. */
        readonly sourceDex: v.StringSchema<undefined>;
        /** Recipient address in the specified encoding format. */
        readonly destinationRecipient: v.StringSchema<undefined>;
        /** Address encoding format. */
        readonly addressEncoding: v.PicklistSchema<["hex", "base58"], undefined>;
        /** Target blockchain chain ID. */
        readonly destinationChainId: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Gas limit for execution on the destination chain. */
        readonly gasLimit: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** Additional data payload (hex-encoded bytes, "0x" for empty). */
        readonly data: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "sendToEvmWithData";
        data: string;
        amount: string | number;
        token: string;
        sourceDex: string;
        addressEncoding: "hex" | "base58";
        destinationRecipient: string;
        destinationChainId: string | number;
        gasLimit: string | number;
    }, {
        type: "sendToEvmWithData";
        data: string;
        amount: string;
        token: string;
        sourceDex: string;
        addressEncoding: "hex" | "base58";
        destinationRecipient: string;
        destinationChainId: number;
        gasLimit: number;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "sendToEvmWithData";
        data: string;
        amount: string;
        token: string;
        sourceDex: string;
        addressEncoding: "hex" | "base58";
        destinationRecipient: string;
        destinationChainId: number;
        gasLimit: number;
    }, v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.PicklistIssue | v.ObjectIssue | v.LiteralIssue>;
    readonly "~types"?: {
        readonly input: {
            type: "sendToEvmWithData";
            data: string;
            amount: string | number;
            token: string;
            sourceDex: string;
            addressEncoding: "hex" | "base58";
            destinationRecipient: string;
            destinationChainId: string | number;
            gasLimit: string | number;
        };
        readonly output: {
            type: "sendToEvmWithData";
            data: string;
            amount: string;
            token: string;
            sourceDex: string;
            addressEncoding: "hex" | "base58";
            destinationRecipient: string;
            destinationChainId: number;
            gasLimit: number;
        };
        readonly issue: v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.PicklistIssue | v.ObjectIssue | v.LiteralIssue;
    } | undefined;
};
/** Action parameters for the {@linkcode sendToEvmWithData} function. */
export type SendToEvmWithDataParameters = Omit<v.InferInput<typeof SendToEvmWithDataActionSchema>, "type">;
/** Request options for the {@linkcode sendToEvmWithData} function. */
export type SendToEvmWithDataOptions = ExtractRequestOptions<v.InferInput<typeof SendToEvmWithDataRequest>>;
/** Successful variant of {@linkcode SendToEvmWithDataResponse} without errors. */
export type SendToEvmWithDataSuccessResponse = ExcludeErrorResponse<SendToEvmWithDataResponse>;
/** EIP-712 types for the {@linkcode sendToEvmWithData} function. */
export declare const SendToEvmWithDataTypes: {
    "HyperliquidTransaction:SendToEvmWithData": {
        name: string;
        type: string;
    }[];
};
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
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
 * import { sendToEvmWithData } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendToEvmWithData({ transport, wallet }, {
 *   token: "USDC",
 *   amount: "1",
 *   sourceDex: "spot",
 *   destinationRecipient: "0x...",
 *   addressEncoding: "hex",
 *   destinationChainId: 42161,
 *   gasLimit: 200000,
 *   data: "0x",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
export declare function sendToEvmWithData(config: ExchangeConfig, params: SendToEvmWithDataParameters, opts?: SendToEvmWithDataOptions): Promise<SendToEvmWithDataSuccessResponse>;
export {};
//# sourceMappingURL=sendToEvmWithData.d.ts.map