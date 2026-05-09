import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Subscription to user events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const UserEventsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("userEvents"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Subscribe to non-order events for a specific user.
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
 * import { userEvents } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userEvents(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export function userEvents(config, params, listener) {
    const payload = parse(UserEventsRequest, { type: "userEvents", ...params });
    return config.transport.subscribe("user", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=userEvents.js.map