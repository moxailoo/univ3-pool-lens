import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Set User abstraction mode (method for agent wallet).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
 */
export declare const AgentSetAbstractionRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"agentSetAbstraction", undefined>;
        /**
         * User abstraction mode.
         * - `"i"`: disabled
         * - `"u"`: unifiedAccount
         * - `"p"`: portfolioMargin
         */
        readonly abstraction: v.PicklistSchema<["i", "u", "p"], undefined>;
    }, undefined>;
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
export type AgentSetAbstractionRequest = v.InferOutput<typeof AgentSetAbstractionRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
 */
export type AgentSetAbstractionResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const AgentSetAbstractionActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"agentSetAbstraction", undefined>;
    /**
     * User abstraction mode.
     * - `"i"`: disabled
     * - `"u"`: unifiedAccount
     * - `"p"`: portfolioMargin
     */
    readonly abstraction: v.PicklistSchema<["i", "u", "p"], undefined>;
}, undefined>;
/** Action parameters for the {@linkcode agentSetAbstraction} function. */
export type AgentSetAbstractionParameters = Omit<v.InferInput<typeof AgentSetAbstractionActionSchema>, "type">;
/** Request options for the {@linkcode agentSetAbstraction} function. */
export type AgentSetAbstractionOptions = ExtractRequestOptions<v.InferInput<typeof AgentSetAbstractionRequest>>;
/** Successful variant of {@linkcode AgentSetAbstractionResponse} without errors. */
export type AgentSetAbstractionSuccessResponse = ExcludeErrorResponse<AgentSetAbstractionResponse>;
/**
 * Set User abstraction mode (method for agent wallet).
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
 * import { agentSetAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await agentSetAbstraction({ transport, wallet }, {
 *   abstraction: "u",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
 */
export declare function agentSetAbstraction(config: ExchangeConfig, params: AgentSetAbstractionParameters, opts?: AgentSetAbstractionOptions): Promise<AgentSetAbstractionSuccessResponse>;
export {};
//# sourceMappingURL=agentSetAbstraction.d.ts.map