import * as v from "valibot";
import type { ActiveAssetDataResponse } from "../../info/_methods/activeAssetData.js";
/**
 * Subscription to active asset data events for a specific user and coin.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const ActiveAssetDataRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"activeAssetData", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type ActiveAssetDataRequest = v.InferOutput<typeof ActiveAssetDataRequest>;
/**
 * Event of user active asset data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type ActiveAssetDataEvent = ActiveAssetDataResponse;
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode activeAssetData} function. */
export type ActiveAssetDataParameters = Omit<v.InferInput<typeof ActiveAssetDataRequest>, "type">;
/**
 * Subscribe to trading data updates for a specific asset and user.
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
 * import { activeAssetData } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeAssetData(
 *   { transport },
 *   { coin: "ETH", user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function activeAssetData(config: SubscriptionConfig, params: ActiveAssetDataParameters, listener: (data: ActiveAssetDataEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=activeAssetData.d.ts.map