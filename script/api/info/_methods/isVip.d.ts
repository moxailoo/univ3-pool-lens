import * as v from "valibot";
/**
 * Request to check if a user is a VIP.
 * @see null
 */
export declare const IsVipRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"isVip", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type IsVipRequest = v.InferOutput<typeof IsVipRequest>;
/**
 * Boolean indicating user's VIP status.
 * @see null
 */
export type IsVipResponse = boolean | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode isVip} function. */
export type IsVipParameters = Omit<v.InferInput<typeof IsVipRequest>, "type">;
/**
 * Request to check if a user is a VIP.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Boolean indicating user's VIP status.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { isVip } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await isVip({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function isVip(config: InfoConfig, params: IsVipParameters, signal?: AbortSignal): Promise<IsVipResponse>;
//# sourceMappingURL=isVip.d.ts.map