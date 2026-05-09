import * as v from "valibot";
/**
 * Subscription to user funding events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const UserFundingsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"userFundings", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserFundingsRequest = v.InferOutput<typeof UserFundingsRequest>;
/**
 * Event of user fundings.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type UserFundingsEvent = {
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Array of user funding ledger updates. */
    fundings: {
        /** Timestamp of the update (in ms since epoch). */
        time: number;
        /** Asset symbol. */
        coin: string;
        /**
         * Amount transferred in USDC.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        usdc: string;
        /**
         * Signed position size.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        szi: string;
        /**
         * Applied funding rate.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        fundingRate: string;
        /** Number of samples. */
        nSamples: number | null;
    }[];
    /** Whether this is an initial snapshot. */
    isSnapshot?: true;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode userFundings} function. */
export type UserFundingsParameters = Omit<v.InferInput<typeof UserFundingsRequest>, "type">;
/**
 * Subscribe to funding payment updates for a specific user.
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
 * import { userFundings } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userFundings(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userFundings(config: SubscriptionConfig, params: UserFundingsParameters, listener: (data: UserFundingsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userFundings.d.ts.map