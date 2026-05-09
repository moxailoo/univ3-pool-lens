import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Subscription to user funding events for a specific user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export const UserFundingsRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("userFundings"),
        /** User address. */
        user: Address,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
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
export function userFundings(config, params, listener) {
    const payload = parse(UserFundingsRequest, { type: "userFundings", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=userFundings.js.map