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
exports.AssetCtxsRequest = void 0;
exports.assetCtxs = assetCtxs;
const v = __importStar(require("valibot"));
/**
 * Subscription to context events for all perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
exports.AssetCtxsRequest = (() => {
    return v.object({
        /** Type of subscription. */
        type: v.literal("assetCtxs"),
        /** DEX name (empty string for main dex). */
        dex: v.optional(v.string()),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
const _base_js_1 = require("../../../_base.js");
function assetCtxs(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = (0, _base_js_1.parse)(exports.AssetCtxsRequest, {
        type: "assetCtxs",
        ...params,
        dex: params.dex ?? "", // Same value as in response
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.dex === payload.dex) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=assetCtxs.js.map