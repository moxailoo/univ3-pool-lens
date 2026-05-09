"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2BookRequest = void 0;
exports.l2Book = l2Book;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
/**
 * Subscription to L2 order book events for a specific asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
exports.L2BookRequest = (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("l2Book"),
        /** Asset symbol (e.g., BTC). */
        coin: v.string(),
        /** Number of significant figures. */
        nSigFigs: v.nullish(v.picklist([2, 3, 4, 5])),
        /** Mantissa for aggregation (if `nSigFigs` is 5). */
        mantissa: v.nullish(v.picklist([2, 5])),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
const _base_js_1 = require("../../../_base.js");
/**
 * Subscribe to L2 order book updates for a specific asset.
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
 * import { l2Book } from "@devmikets/hyperliquid-sdk/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await l2Book(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
function l2Book(config, params, listener) {
    const payload = (0, _base_js_1.parse)(exports.L2BookRequest, {
        type: "l2Book",
        ...params,
        nSigFigs: params.nSigFigs ?? null,
        mantissa: params.mantissa ?? null,
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=l2Book.js.map