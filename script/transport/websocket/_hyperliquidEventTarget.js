"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperliquidEventTarget = void 0;
const _polyfills_js_1 = require("../_polyfills.js");
function isHyperliquidEvent(msg) {
    return typeof msg === "object" && msg !== null &&
        "channel" in msg && typeof msg.channel === "string" &&
        "data" in msg;
}
function isPongEvent(msg) {
    return typeof msg === "object" && msg !== null &&
        "channel" in msg && msg.channel === "pong";
}
function isExplorerBlockEvent(msg) {
    return Array.isArray(msg) && msg.length > 0 &&
        typeof msg[0] === "object" && msg[0] !== null &&
        "blockTime" in msg[0] && "hash" in msg[0] &&
        "height" in msg[0] && "numTxs" in msg[0] &&
        "proposer" in msg[0];
}
function isExplorerTxsEvent(msg) {
    return Array.isArray(msg) && msg.length > 0 &&
        typeof msg[0] === "object" && msg[0] !== null &&
        "action" in msg[0] && "block" in msg[0] &&
        "error" in msg[0] && "hash" in msg[0] &&
        "time" in msg[0] && "user" in msg[0];
}
class HyperliquidEventTarget extends EventTarget {
    constructor(socket) {
        super();
        socket.addEventListener("message", (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (isHyperliquidEvent(msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_(msg.channel, { detail: msg.data }));
                }
                else if (isPongEvent(msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("pong", { detail: undefined }));
                }
                else if (isExplorerBlockEvent(msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("explorerBlock_", { detail: msg }));
                }
                else if (isExplorerTxsEvent(msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("explorerTxs_", { detail: msg }));
                }
            }
            catch {
                // Ignore JSON parsing errors
            }
        });
    }
}
exports.HyperliquidEventTarget = HyperliquidEventTarget;
//# sourceMappingURL=_hyperliquidEventTarget.js.map