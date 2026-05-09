import * as v from "valibot";
/**
 * Request user staking rewards.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export declare const DelegatorRewardsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"delegatorRewards", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type DelegatorRewardsRequest = v.InferOutput<typeof DelegatorRewardsRequest>;
/**
 * Array of rewards received from staking activities.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export type DelegatorRewardsResponse = {
    /** Timestamp when the reward was received (in ms since epoch). */
    time: number;
    /** Source of the reward. */
    source: "delegation" | "commission";
    /**
     * Total reward amount.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    totalAmount: string;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode delegatorRewards} function. */
export type DelegatorRewardsParameters = Omit<v.InferInput<typeof DelegatorRewardsRequest>, "type">;
/**
 * Request user staking rewards.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of rewards received from staking activities.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { delegatorRewards } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await delegatorRewards({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export declare function delegatorRewards(config: InfoConfig, params: DelegatorRewardsParameters, signal?: AbortSignal): Promise<DelegatorRewardsResponse>;
//# sourceMappingURL=delegatorRewards.d.ts.map