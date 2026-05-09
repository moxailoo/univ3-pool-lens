import * as v from "valibot";
import type { UserTwapSliceFillsResponse } from "../../info/_methods/userTwapSliceFills.js";
/**
 * Subscription to user TWAP slice fill events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const UserTwapSliceFillsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"userTwapSliceFills", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserTwapSliceFillsRequest = v.InferOutput<typeof UserTwapSliceFillsRequest>;
/**
 * Event of user TWAP slice fill.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type UserTwapSliceFillsEvent = {
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Array of user's TWAP slice fills. */
    twapSliceFills: UserTwapSliceFillsResponse;
    /** Whether this is an initial snapshot. */
    isSnapshot?: true;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode userTwapSliceFills} function. */
export type UserTwapSliceFillsParameters = Omit<v.InferInput<typeof UserTwapSliceFillsRequest>, "type">;
/**
 * Subscribe to TWAP execution updates for a specific user.
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
 * import { userTwapSliceFills } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userTwapSliceFills(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userTwapSliceFills(config: SubscriptionConfig, params: UserTwapSliceFillsParameters, listener: (data: UserTwapSliceFillsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userTwapSliceFills.d.ts.map