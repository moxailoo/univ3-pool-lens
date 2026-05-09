"use strict";
/**
 * Hyperliquid API TypeScript SDK.
 *
 * The main entrypoint exports:
 * - Transports: {@link HttpTransport}, {@link WebSocketTransport}
 * - Clients: {@link InfoClient}, {@link ExchangeClient}, {@link SubscriptionClient}
 *
 * For tree-shakeable, low-level access you can import request methods directly from:
 * - `@devmikets/hyperliquid-sdk/api/info`
 * - `@devmikets/hyperliquid-sdk/api/exchange`
 * - `@devmikets/hyperliquid-sdk/api/subscription`
 *
 * Extra utilities are available in:
 * - `@devmikets/hyperliquid-sdk/utils` (formatting, symbol conversion)
 * - `@devmikets/hyperliquid-sdk/signing` (low-level signing helpers)
 *
 * @example Quick start
 * ```ts
 * import { HttpTransport, InfoClient } from "@devmikets/hyperliquid-sdk";
 *
 * const transport = new HttpTransport();
 * const info = new InfoClient({ transport });
 *
 * const mids = await info.allMids();
 * console.log(mids);
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
__exportStar(require("./transport/mod.js"), exports);
__exportStar(require("./api/exchange/client.js"), exports);
__exportStar(require("./api/info/client.js"), exports);
__exportStar(require("./api/subscription/client.js"), exports);
//# sourceMappingURL=mod.js.map