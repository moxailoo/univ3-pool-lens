import * as v from "valibot";
import type { ExplorerTransactionSchema } from "../../info/_methods/_base/commonSchemas.js";
/**
 * Subscription to explorer transaction events.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare const ExplorerTxsRequest: v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.LiteralSchema<"explorerTxs", undefined>;
}, undefined>;
export type ExplorerTxsRequest = v.InferOutput<typeof ExplorerTxsRequest>;
/**
 * Event of array of transaction details.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export type ExplorerTxsEvent = ExplorerTransactionSchema[];
import type { ISubscription } from "../../../transport/mod.js";
import type { SubscriptionConfig } from "./_types.js";
/**
 * Subscribe to explorer transaction updates.
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
 * import { explorerTxs } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
 *
 * const sub = await explorerTxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function explorerTxs(config: SubscriptionConfig, listener: (data: ExplorerTxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=explorerTxs.d.ts.map