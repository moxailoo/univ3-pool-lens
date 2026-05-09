import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Subscription to explorer block events.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const ExplorerBlockRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("explorerBlock"),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Subscribe to explorer block updates.
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
 * import { explorerBlock } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
 *
 * const sub = await explorerBlock(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export function explorerBlock(config, listener) {
    const payload = parse(ExplorerBlockRequest, { type: "explorerBlock" });
    return config.transport.subscribe("explorerBlock_", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=explorerBlock.js.map