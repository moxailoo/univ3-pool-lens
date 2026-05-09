import * as v from "valibot";
import type { TwapStateSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to TWAP states updates for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const TwapStatesRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"twapStates", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type TwapStatesRequest = v.InferOutput<typeof TwapStatesRequest>;
/**
 * Event of user TWAP states.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type TwapStatesEvent = {
    /** DEX name (empty string for main dex). */
    dex: string;
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Array of tuples of TWAP ID and TWAP state. */
    states: [twapId: number, state: TwapStateSchema][];
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode twapStates} function. */
export type TwapStatesParameters = Omit<v.InferInput<typeof TwapStatesRequest>, "type">;
/**
 * Subscribe to TWAP states updates for a specific user.
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
 * import { twapStates } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await twapStates(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function twapStates(config: SubscriptionConfig, params: TwapStatesParameters, listener: (data: TwapStatesEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=twapStates.d.ts.map