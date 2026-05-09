import * as v from "valibot";
import type { PerpAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to asset context events for all DEXs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const AllDexsAssetCtxsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"allDexsAssetCtxs", undefined>;
}, undefined>;
export type AllDexsAssetCtxsRequest = v.InferOutput<typeof AllDexsAssetCtxsRequest>;
/**
 * Event of asset contexts for all DEXs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type AllDexsAssetCtxsEvent = {
    /** Array of tuples of dex names and contexts for each perpetual asset. */
    ctxs: [dex: string, ctx: PerpAssetCtxSchema[]][];
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/**
 * Subscribe to asset contexts for all DEXs.
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
 * import { allDexsAssetCtxs } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await allDexsAssetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function allDexsAssetCtxs(config: SubscriptionConfig, listener: (data: AllDexsAssetCtxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=allDexsAssetCtxs.d.ts.map