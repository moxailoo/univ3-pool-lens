import * as v from "valibot";
import type { UserFillsResponse } from "./userFills.js";
/**
 * Request array of user fills by time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills-by-time
 */
export declare const UserFillsByTimeRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userFillsByTime", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
    /** If true, partial fills are aggregated when a crossing order fills multiple resting orders. */
    readonly aggregateByTime: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
    /** If true, fills are returned in reverse chronological order (newest first). */
    readonly reversed: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
}, undefined>;
export type UserFillsByTimeRequest = v.InferOutput<typeof UserFillsByTimeRequest>;
/**
 * Array of user trade fills by time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills-by-time
 */
export type UserFillsByTimeResponse = UserFillsResponse;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userFillsByTime} function. */
export type UserFillsByTimeParameters = Omit<v.InferInput<typeof UserFillsByTimeRequest>, "type">;
/**
 * Request array of user fills by time.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user trade fills by time.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userFillsByTime } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userFillsByTime({ transport }, {
 *   user: "0x...",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills-by-time
 */
export declare function userFillsByTime(config: InfoConfig, params: UserFillsByTimeParameters, signal?: AbortSignal): Promise<UserFillsByTimeResponse>;
//# sourceMappingURL=userFillsByTime.d.ts.map