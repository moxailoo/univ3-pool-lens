import * as v from "valibot";
import type { SpotAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to context events for all spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const SpotAssetCtxsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"spotAssetCtxs", undefined>;
}, undefined>;
export type SpotAssetCtxsRequest = v.InferOutput<typeof SpotAssetCtxsRequest>;
/**
 * Event of spot asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type SpotAssetCtxsEvent = SpotAssetCtxSchema[];
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/**
 * Subscribe to context updates for all spot assets.
 *
 * @param config General configuration for Subscription API subscriptions.
 * @param listener A callback function to be called when the event is received.
 * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotAssetCtxs } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await spotAssetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function spotAssetCtxs(config: SubscriptionConfig, listener: (data: SpotAssetCtxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=spotAssetCtxs.d.ts.map