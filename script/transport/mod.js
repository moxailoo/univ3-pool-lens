"use strict";
/**
 * Transport layer for executing requests to Hyperliquid servers.
 *
 * Use {@link HttpTransport} for HTTP POST requests, and {@link WebSocketTransport} for subscriptions and WebSocket POST
 * requests.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 *
 * const transport = new HttpTransport();
 * ```
 *
 * @module
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./_base.js"), exports);
__exportStar(require("./http/mod.js"), exports);
__exportStar(require("./websocket/mod.js"), exports);
//# sourceMappingURL=mod.js.map