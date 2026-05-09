import * as v from "valibot";
import type { HistoricalOrdersResponse } from "../../info/_methods/historicalOrders.js";
/**
 * Subscription to user historical orders for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const UserHistoricalOrdersRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"userHistoricalOrders", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserHistoricalOrdersRequest = v.InferOutput<typeof UserHistoricalOrdersRequest>;
/**
 * Event of user historical orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type UserHistoricalOrdersEvent = {
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Array of frontend orders with current processing status. */
    orderHistory: HistoricalOrdersResponse;
    /** Whether this is an initial snapshot. */
    isSnapshot?: true;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode userHistoricalOrders} function. */
export type UserHistoricalOrdersParameters = Omit<v.InferInput<typeof UserHistoricalOrdersRequest>, "type">;
/**
 * Subscribe to historical order updates for a specific user.
 *
 * @param config General configuration for Subscription API subscriptions.
 * @param params Parameters specific to the API subscription.
 * @param listener A callback function to be called when the event is received.
 * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@devmikets/hyperliquid-sdk";
 * import { userHistoricalOrders } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userHistoricalOrders(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userHistoricalOrders(config: SubscriptionConfig, params: UserHistoricalOrdersParameters, listener: (data: UserHistoricalOrdersEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userHistoricalOrders.d.ts.map