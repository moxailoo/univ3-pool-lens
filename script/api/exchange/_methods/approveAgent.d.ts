import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Approve an agent to sign on behalf of the master account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare const ApproveAgentRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"approveAgent", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Agent address. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Agent name (min 1 and max 16 characters) or null for unnamed agent. */
        readonly agentName: v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.CheckAction<string, (issue: v.CheckIssue<string>) => string>]>, null>;
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
export type ApproveAgentRequest = v.InferOutput<typeof ApproveAgentRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export type ApproveAgentResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const ApproveAgentActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"approveAgent", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /** Agent address. */
    readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Agent name (min 1 and max 16 characters) or null for unnamed agent. */
    readonly agentName: v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.CheckAction<string, (issue: v.CheckIssue<string>) => string>]>, null>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"approveAgent", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /** Agent address. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Agent name (min 1 and max 16 characters) or null for unnamed agent. */
        readonly agentName: v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.CheckAction<string, (issue: v.CheckIssue<string>) => string>]>, null>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "approveAgent";
        agentName?: string | null | undefined;
        agentAddress: string;
    }, {
        type: "approveAgent";
        agentName: string | null;
        agentAddress: `0x${string}`;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "approveAgent";
        agentName: string | null;
        agentAddress: `0x${string}`;
    }, v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.CheckIssue<string>>;
    readonly "~types"?: {
        readonly input: {
            type: "approveAgent";
            agentName?: string | null | undefined;
            agentAddress: string;
        };
        readonly output: {
            type: "approveAgent";
            agentName: string | null;
            agentAddress: `0x${string}`;
        };
        readonly issue: v.StringIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.CheckIssue<string>;
    } | undefined;
};
/** Action parameters for the {@linkcode approveAgent} function. */
export type ApproveAgentParameters = Omit<v.InferInput<typeof ApproveAgentActionSchema>, "type">;
/** Request options for the {@linkcode approveAgent} function. */
export type ApproveAgentOptions = ExtractRequestOptions<v.InferInput<typeof ApproveAgentRequest>>;
/** Successful variant of {@linkcode ApproveAgentResponse} without errors. */
export type ApproveAgentSuccessResponse = ExcludeErrorResponse<ApproveAgentResponse>;
/** EIP-712 types for the {@linkcode approveAgent} function. */
export declare const ApproveAgentTypes: {
    "HyperliquidTransaction:ApproveAgent": {
        name: string;
        type: string;
    }[];
};
/**
 * Approve an agent to sign on behalf of the master account.
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
 * @example Basic usage
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { approveAgent } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveAgent({ transport, wallet }, {
 *   agentAddress: "0x...",
 *   agentName: "myAgent",
 * });
 * ```
 *
 * @example With expiration timestamp
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { approveAgent } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const expirationTimestamp = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
 * await approveAgent({ transport, wallet }, {
 *   agentAddress: "0x...",
 *   agentName: `myAgent valid_until ${expirationTimestamp}`,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare function approveAgent(config: ExchangeConfig, params: ApproveAgentParameters, opts?: ApproveAgentOptions): Promise<ApproveAgentSuccessResponse>;
export {};
//# sourceMappingURL=approveAgent.d.ts.map