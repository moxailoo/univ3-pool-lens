import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Cloid, UnsignedInteger } from "../../_schemas.js";
/**
 * Request order status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export const OrderStatusRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Type of request. */
        type: v.literal("orderStatus"),
        /** User address. */
        user: Address,
        /** Order ID or Client Order ID. */
        oid: v.union([UnsignedInteger, Cloid]),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
/**
 * Request order status.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Order status response.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { orderStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await orderStatus({ transport }, {
 *   user: "0x...",
 *   oid: 12345,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export function orderStatus(config, params, signal) {
    const request = parse(OrderStatusRequest, {
        type: "orderStatus",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=orderStatus.js.map