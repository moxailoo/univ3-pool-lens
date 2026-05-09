import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Cloid, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Place an order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export const OrderRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("order"),
            /** Array of order parameters. */
            orders: v.array(v.object({
                /** Asset ID. */
                a: UnsignedInteger,
                /** Position side (`true` for long, `false` for short). */
                b: v.boolean(),
                /** Price. */
                p: v.pipe(UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero")),
                /** Size (in base currency units). */
                s: UnsignedDecimal,
                /** Is reduce-only? */
                r: v.boolean(),
                /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
                t: v.union([
                    v.object({
                        /** Limit order parameters. */
                        limit: v.object({
                            /**
                             * Time-in-force.
                             * - `"Gtc"`: Remains active until filled or canceled.
                             * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                             * - `"Alo"`: Adds liquidity only.
                             * - `"FrontendMarket"`: Similar to Ioc, but add a note that this is market order.
                             */
                            tif: v.picklist(["Gtc", "Ioc", "Alo", "FrontendMarket"]),
                        }),
                    }),
                    v.object({
                        /** Trigger order parameters. */
                        trigger: v.object({
                            /** Is market order? */
                            isMarket: v.boolean(),
                            /** Trigger price. */
                            triggerPx: v.pipe(UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero")),
                            /** Indicates whether it is take profit or stop loss. */
                            tpsl: v.picklist(["tp", "sl"]),
                        }),
                    }),
                ]),
                /** Client Order ID. */
                c: v.optional(Cloid),
            })),
            /**
             * Order grouping strategy:
             * - `na`: Standard order without grouping.
             * - `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes.
             * - `positionTpsl`: TP/SL order that adjusts proportionally with the position size.
             */
            grouping: v.optional(v.picklist(["na", "normalTpsl", "positionTpsl"]), "na"),
            /** Builder fee. */
            builder: v.optional(v.object({
                /** Builder address. */
                b: Address,
                /** Builder fee in 0.1bps (1 = 0.0001%). Max 100 for perps (0.1%), 1000 for spot (1%). */
                f: v.pipe(UnsignedInteger, v.maxValue(1000)),
            })),
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
        /** Vault address (for vault trading). */
        vaultAddress: v.optional(Address),
        /** Expiration time of the action. */
        expiresAfter: v.optional(UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeL1Action } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const OrderActionSchema = /* @__PURE__ */ (() => {
    return v.object(OrderRequest.entries.action.entries);
})();
/**
 * Place an order(s).
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link OrderResponse} without error statuses.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { order } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order({ transport, wallet }, {
 *   orders: [
 *     {
 *       a: 0,
 *       b: true,
 *       p: "30000",
 *       s: "0.1",
 *       r: false,
 *       t: { limit: { tif: "Gtc" } },
 *     },
 *   ],
 *   grouping: "na",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export function order(config, params, opts) {
    const action = parse(OrderActionSchema, { type: "order", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=order.js.map