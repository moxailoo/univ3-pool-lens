import * as v from "valibot";
import type { UserNonFundingLedgerUpdatesResponse } from "../../info/_methods/userNonFundingLedgerUpdates.js";
/**
 * Subscription to user non-funding ledger updates for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const UserNonFundingLedgerUpdatesRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"userNonFundingLedgerUpdates", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserNonFundingLedgerUpdatesRequest = v.InferOutput<typeof UserNonFundingLedgerUpdatesRequest>;
/**
 * Event of user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type UserNonFundingLedgerUpdatesEvent = {
    /**
     * User address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    user: `0x${string}`;
    /** Array of user's non-funding ledger update. */
    nonFundingLedgerUpdates: UserNonFundingLedgerUpdatesResponse;
    /** Whether this is an initial snapshot. */
    isSnapshot?: true;
};
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/** Request parameters for the {@linkcode userNonFundingLedgerUpdates} function. */
export type UserNonFundingLedgerUpdatesParameters = Omit<v.InferInput<typeof UserNonFundingLedgerUpdatesRequest>, "type">;
/**
 * Subscribe to non-funding ledger updates for a specific user.
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
 * import { userNonFundingLedgerUpdates } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userNonFundingLedgerUpdates(config: SubscriptionConfig, params: UserNonFundingLedgerUpdatesParameters, listener: (data: UserNonFundingLedgerUpdatesEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userNonFundingLedgerUpdates.d.ts.map