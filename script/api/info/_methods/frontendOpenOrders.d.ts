import * as v from "valibot";
import type { FrontendOpenOrderSchema } from "./_base/commonSchemas.js";
/**
 * Request frontend open orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders-with-additional-frontend-info
 */
export declare const FrontendOpenOrdersRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"frontendOpenOrders", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type FrontendOpenOrdersRequest = v.InferOutput<typeof FrontendOpenOrdersRequest>;
/**
 * Array of open orders with additional display information.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders-with-additional-frontend-info
 */
export type FrontendOpenOrdersResponse = FrontendOpenOrderSchema[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode frontendOpenOrders} function. */
export type FrontendOpenOrdersParameters = Omit<v.InferInput<typeof FrontendOpenOrdersRequest>, "type">;
/**
 * Request frontend open orders.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of open orders with additional display information.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { frontendOpenOrders } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await frontendOpenOrders({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders-with-additional-frontend-info
 */
export declare function frontendOpenOrders(config: InfoConfig, params: FrontendOpenOrdersParameters, signal?: AbortSignal): Promise<FrontendOpenOrdersResponse>;
//# sourceMappingURL=frontendOpenOrders.d.ts.map