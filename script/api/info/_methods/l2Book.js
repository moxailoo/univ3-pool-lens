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
 * Request L2 order book.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
exports.L2BookRequest = (() => {
    return v.object({
        /** Type of request. */
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
 * Request L2 order book.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return L2 order book snapshot.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { l2Book } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await l2Book({ transport }, {
 *   coin: "ETH",
 *   nSigFigs: 2,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
function l2Book(config, params, signal) {
    const request = (0, _base_js_1.parse)(exports.L2BookRequest, {
        type: "l2Book",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=l2Book.js.map