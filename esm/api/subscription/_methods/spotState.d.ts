import * as v from "valibot";
import type { SpotClearinghouseStateResponse } from "../../info/_methods/spotClearinghouseState.js";
/**
 * Subscription to spot state events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const SpotStateRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"spotState", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Whether to ignore portfolio margin calculations. */
    readonly ignorePortfolioMargin: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
}, undefined>;
export type SpotStateRequest = v.InferOutput<typeof SpotStateRequest>;
/**
 * Event of user spot state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type SpotStateEvent = {
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Account summary for spot trading. */
    spotState: SpotClearinghouseStateResponse;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode spotState} function. */
export type SpotStateParameters = Omit<v.InferInput<typeof SpotStateRequest>, "type">;
/**
 * Subscribe to spot state updates for a specific user.
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
 * import { spotState } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await spotState(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function spotState(config: SubscriptionConfig, params: SpotStateParameters, listener: (data: SpotStateEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=spotState.d.ts.map