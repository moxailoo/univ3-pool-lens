"use strict";
/**
 * Nonce manager for generating unique, monotonically increasing nonces.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalNonceManager = void 0;
/**
 * Nonce manager for generating unique nonces per wallet address and network.
 * Uses lazy cleanup: removes entries when Date.now() > lastNonce.
 */
class NonceManager {
    _map = new Map();
    getNonce(key) {
        const now = Date.now();
        this._cleanup(now);
        const lastNonce = this._map.get(key) ?? 0;
        const nonce = now > lastNonce ? now : lastNonce + 1;
        this._map.set(key, nonce);
        return nonce;
    }
    _cleanup(now) {
        for (const [key, lastNonce] of this._map) {
            if (now > lastNonce) {
                this._map.delete(key);
            }
        }
    }
}
/** Global nonce manager instance. */
exports.globalNonceManager = new NonceManager();
//# sourceMappingURL=_nonce.js.map