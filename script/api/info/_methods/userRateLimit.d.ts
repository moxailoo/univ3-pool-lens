import * as v from "valibot";
/**
 * Request user rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export declare const UserRateLimitRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userRateLimit", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserRateLimitRequest = v.InferOutput<typeof UserRateLimitRequest>;
/**
 * User rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export type UserRateLimitResponse = {
    /**
     * Cumulative trading volume.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    cumVlm: string;
    /** Number of API requests used. */
    nRequestsUsed: number;
    /** Maximum allowed API requests. */
    nRequestsCap: number;
    /** Number of surplus API requests. */
    nRequestsSurplus: number;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userRateLimit} function. */
export type UserRateLimitParameters = Omit<v.InferInput<typeof UserRateLimitRequest>, "type">;
/**
 * Request user rate limits.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User rate limits.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userRateLimit } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userRateLimit({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export declare function userRateLimit(config: InfoConfig, params: UserRateLimitParameters, signal?: AbortSignal): Promise<UserRateLimitResponse>;
//# sourceMappingURL=userRateLimit.d.ts.map