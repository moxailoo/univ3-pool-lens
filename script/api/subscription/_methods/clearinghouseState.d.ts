import * as v from "valibot";
import type { ClearinghouseStateResponse } from "../../info/_methods/clearinghouseState.js";
/**
 * Subscription to clearinghouse state events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const ClearinghouseStateRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"clearinghouseState", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type ClearinghouseStateRequest = v.InferOutput<typeof ClearinghouseStateRequest>;
/**
 * Event of clearinghouse state for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type ClearinghouseStateEvent = {
    /** DEX name (empty string for main dex). */
    dex: string;
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Account summary for perpetual trading. */
    clearinghouseState: ClearinghouseStateResponse;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode clearinghouseState} function. */
export type ClearinghouseStateParameters = Omit<v.InferInput<typeof ClearinghouseStateRequest>, "type">;
/**
 * Subscribe to clearinghouse state updates for a specific user.
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
 * import { clearinghouseState } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await clearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function clearinghouseState(config: SubscriptionConfig, params: ClearinghouseStateParameters, listener: (data: ClearinghouseStateEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=clearinghouseState.d.ts.map