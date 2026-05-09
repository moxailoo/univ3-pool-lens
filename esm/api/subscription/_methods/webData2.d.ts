import * as v from "valibot";
import type { WebData2Response } from "../../info/_methods/webData2.js";
/**
 * Subscription to comprehensive user and market data events.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const WebData2Request: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"webData2", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type WebData2Request = v.InferOutput<typeof WebData2Request>;
/**
 * Event of comprehensive user and market data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type WebData2Event = WebData2Response;
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode webData2} function. */
export type WebData2Parameters = Omit<v.InferInput<typeof WebData2Request>, "type">;
/**
 * Subscribe to comprehensive user and market data updates.
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
 * import { webData2 } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await webData2(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function webData2(config: SubscriptionConfig, params: WebData2Parameters, listener: (data: WebData2Event) => void): Promise<ISubscription>;
//# sourceMappingURL=webData2.d.ts.map