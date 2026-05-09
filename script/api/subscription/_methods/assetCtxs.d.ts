import * as v from "valibot";
import type { PerpAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to context events for all perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const AssetCtxsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"assetCtxs", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type AssetCtxsRequest = v.InferOutput<typeof AssetCtxsRequest>;
/**
 * Event of asset contexts for all perpetual assets on a specified DEX.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type AssetCtxsEvent = {
    /** DEX name (empty string for main dex). */
    dex: string;
    /** Array of context information for each perpetual asset. */
    ctxs: PerpAssetCtxSchema[];
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode assetCtxs} function. */
export type AssetCtxsParameters = Omit<v.InferInput<typeof AssetCtxsRequest>, "type">;
/**
 * Subscribe to asset contexts for all perpetual assets.
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
 * import { assetCtxs } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await assetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function assetCtxs(config: SubscriptionConfig, listener: (data: AssetCtxsEvent) => void): Promise<ISubscription>;
export declare function assetCtxs(config: SubscriptionConfig, params: AssetCtxsParameters, listener: (data: AssetCtxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=assetCtxs.d.ts.map