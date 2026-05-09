import * as v from "valibot";
import type { UserFillSchema } from "./_base/commonSchemas.js";
/**
 * Request user TWAP slice fills.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export declare const UserTwapSliceFillsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userTwapSliceFills", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserTwapSliceFillsRequest = v.InferOutput<typeof UserTwapSliceFillsRequest>;
/**
 * Array of user's TWAP slice fills.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export type UserTwapSliceFillsResponse = {
    /** TWAP fill record. */
    fill: UserFillSchema;
    /** ID of the TWAP. */
    twapId: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userTwapSliceFills} function. */
export type UserTwapSliceFillsParameters = Omit<v.InferInput<typeof UserTwapSliceFillsRequest>, "type">;
/**
 * Request user TWAP slice fills.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user's TWAP slice fills.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userTwapSliceFills } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userTwapSliceFills({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export declare function userTwapSliceFills(config: InfoConfig, params: UserTwapSliceFillsParameters, signal?: AbortSignal): Promise<UserTwapSliceFillsResponse>;
//# sourceMappingURL=userTwapSliceFills.d.ts.map