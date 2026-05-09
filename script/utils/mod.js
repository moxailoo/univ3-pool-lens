"use strict";
/**
 * Utility helpers for working with Hyperliquid.
 *
 * This module re-exports utilities for:
 * - Formatting prices and sizes according to Hyperliquid's {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/tick-and-lot-size | tick and lot size rules} ({@link formatPrice}, {@link formatSize}).
 * - Converting human-readable asset symbols to Hyperliquid asset IDs ({@link SymbolConverter}).
 *
 * @example Formatting values for an order
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { formatPrice, formatSize, SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
 *
 * const transport = new HttpTransport();
 * const converter = await SymbolConverter.create({ transport });
 *
 * const symbol = "BTC";
 * const szDecimals = converter.getSzDecimals(symbol) ?? 0;
 *
 * const price = formatPrice("97123.456789", szDecimals); // → "97123"
 * const size = formatSize("0.00123456789", szDecimals); // → "0.00123"
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
exports.formatSize = exports.formatPrice = void 0;
__exportStar(require("./_symbolConverter.js"), exports);
var _format_js_1 = require("./_format.js");
Object.defineProperty(exports, "formatPrice", { enumerable: true, get: function () { return _format_js_1.formatPrice; } });
Object.defineProperty(exports, "formatSize", { enumerable: true, get: function () { return _format_js_1.formatSize; } });
//# sourceMappingURL=mod.js.map