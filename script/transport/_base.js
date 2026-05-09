"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportError = void 0;
const _base_js_1 = require("../_base.js");
/** Thrown when an error occurs at the transport level (e.g., timeout). */
class TransportError extends _base_js_1.HyperliquidError {
    constructor(message, options) {
        super(message, options);
        this.name = "TransportError";
    }
}
exports.TransportError = TransportError;
//# sourceMappingURL=_base.js.map