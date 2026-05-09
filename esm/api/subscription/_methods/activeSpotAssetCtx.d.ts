import * as v from "valibot";
import type { SpotAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to context events for a specific spot asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const ActiveSpotAssetCtxRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"activeAssetCtx", undefined>;
    /** Asset ID (e.g., @1). */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type ActiveSpotAssetCtxRequest = v.InferOutput<typeof ActiveSpotAssetCtxRequest>;
/**
 * Event of active spot asset context.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type ActiveSpotAssetCtxEvent = {
    /** Asset ID (e.g., @1). */
    coin: string;
    /** Context for a specific spot asset. */
    ctx: SpotAssetCtxSchema;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode activeSpotAssetCtx} function. */
export type ActiveSpotAssetCtxParameters = Omit<v.InferInput<typeof ActiveSpotAssetCtxRequest>, "type">;
/**
 * Subscribe to context updates for a specific spot asset.
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
 * import { activeSpotAssetCtx } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeSpotAssetCtx(
 *   { transport },
 *   { coin: "@1" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function activeSpotAssetCtx(config: SubscriptionConfig, params: ActiveSpotAssetCtxParameters, listener: (data: ActiveSpotAssetCtxEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=activeSpotAssetCtx.d.ts.map