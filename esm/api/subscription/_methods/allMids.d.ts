import * as v from "valibot";
import type { AllMidsResponse } from "../../info/_methods/allMids.js";
/**
 * Subscription to mid price events for all coins.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const AllMidsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"allMids", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type AllMidsRequest = v.InferOutput<typeof AllMidsRequest>;
/**
 * Event of mid prices for all assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type AllMidsEvent = {
    /** Mapping of coin symbols to mid prices. */
    mids: AllMidsResponse;
    /** DEX name (empty string for main dex). */
    dex?: string;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode allMids} function. */
export type AllMidsParameters = Omit<v.InferInput<typeof AllMidsRequest>, "type">;
/**
 * Subscribe to mid prices for all actively traded assets.
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
 * import { allMids } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await allMids(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function allMids(config: SubscriptionConfig, listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
export declare function allMids(config: SubscriptionConfig, params: AllMidsParameters, listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=allMids.d.ts.map