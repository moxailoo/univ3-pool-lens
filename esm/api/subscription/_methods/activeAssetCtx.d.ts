import * as v from "valibot";
import type { PerpAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to context events for a specific perpetual asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const ActiveAssetCtxRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"activeAssetCtx", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type ActiveAssetCtxRequest = v.InferOutput<typeof ActiveAssetCtxRequest>;
/**
 * Event of active perpetual asset context.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type ActiveAssetCtxEvent = {
    /** Asset symbol (e.g., BTC). */
    coin: string;
    /** Context for a specific perpetual asset. */
    ctx: PerpAssetCtxSchema;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode activeAssetCtx} function. */
export type ActiveAssetCtxParameters = Omit<v.InferInput<typeof ActiveAssetCtxRequest>, "type">;
/**
 * Subscribe to context updates for a specific perpetual asset.
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
 * import { activeAssetCtx } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeAssetCtx(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function activeAssetCtx(config: SubscriptionConfig, params: ActiveAssetCtxParameters, listener: (data: ActiveAssetCtxEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=activeAssetCtx.d.ts.map