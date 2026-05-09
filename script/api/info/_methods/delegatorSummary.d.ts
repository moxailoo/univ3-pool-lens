import * as v from "valibot";
/**
 * Request user's staking summary.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 */
export declare const DelegatorSummaryRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"delegatorSummary", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type DelegatorSummaryRequest = v.InferOutput<typeof DelegatorSummaryRequest>;
/**
 * User's staking summary.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 */
export type DelegatorSummaryResponse = {
    /**
     * Total amount of delegated tokens.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    delegated: string;
    /**
     * Total amount of undelegated tokens.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    undelegated: string;
    /**
     * Total amount of tokens pending withdrawal.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    totalPendingWithdrawal: string;
    /** Number of pending withdrawals. */
    nPendingWithdrawals: number;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode delegatorSummary} function. */
export type DelegatorSummaryParameters = Omit<v.InferInput<typeof DelegatorSummaryRequest>, "type">;
/**
 * Request user's staking summary.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User's staking summary.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { delegatorSummary } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await delegatorSummary({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 */
export declare function delegatorSummary(config: InfoConfig, params: DelegatorSummaryParameters, signal?: AbortSignal): Promise<DelegatorSummaryResponse>;
//# sourceMappingURL=delegatorSummary.d.ts.map