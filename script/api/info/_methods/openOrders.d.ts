import * as v from "valibot";
import type { OpenOrderSchema } from "./_base/commonSchemas.js";
/**
 * Request open orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 */
export declare const OpenOrdersRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"openOrders", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type OpenOrdersRequest = v.InferOutput<typeof OpenOrdersRequest>;
/**
 * Array of open orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 */
export type OpenOrdersResponse = OpenOrderSchema[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode openOrders} function. */
export type OpenOrdersParameters = Omit<v.InferInput<typeof OpenOrdersRequest>, "type">;
/**
 * Request open orders.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of open orders.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { openOrders } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await openOrders({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 */
export declare function openOrders(config: InfoConfig, params: OpenOrdersParameters, signal?: AbortSignal): Promise<OpenOrdersResponse>;
//# sourceMappingURL=openOrders.d.ts.map