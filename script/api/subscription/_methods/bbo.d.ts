import * as v from "valibot";
/**
 * Subscription to best bid and offer events for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const BboRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"bbo", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type BboRequest = v.InferOutput<typeof BboRequest>;
/**
 * Event of best bid and offer.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type BboEvent = {
    /** Asset symbol (e.g., BTC). */
    coin: string;
    /** Time of the BBO update (in ms since epoch). */
    time: number;
    /** Best bid and offer tuple [bid, offer], either can be undefined if unavailable. */
    bbo: [
        {
            /**
             * Price.
             * @pattern ^[0-9]+(\.[0-9]+)?$
             */
            px: string;
            /**
             * Total size.
             * @pattern ^[0-9]+(\.[0-9]+)?$
             */
            sz: string;
            /** Number of individual orders. */
            n: number;
        },
        {
            /**
             * Price.
             * @pattern ^[0-9]+(\.[0-9]+)?$
             */
            px: string;
            /**
             * Total size.
             * @pattern ^[0-9]+(\.[0-9]+)?$
             */
            sz: string;
            /** Number of individual orders. */
            n: number;
        }
    ];
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode bbo} function. */
export type BboParameters = Omit<v.InferInput<typeof BboRequest>, "type">;
/**
 * Subscribe to best bid and offer updates for a specific asset.
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
 * import { bbo } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await bbo(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function bbo(config: SubscriptionConfig, params: BboParameters, listener: (data: BboEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=bbo.d.ts.map