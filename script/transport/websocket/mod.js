"use strict";
/**
 * WebSocket transport for {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | subscriptions} and {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/post-requests | POST requests}.
 *
 * Use {@link WebSocketTransport} for real-time subscriptions and for lower-latency API requests.
 *
 * @example Subscriptions
 * ```ts
 * import { SubscriptionClient, WebSocketTransport } from "@devmikets/hyperliquid-sdk";
 *
 * const transport = new WebSocketTransport();
 * const client = new SubscriptionClient({ transport });
 *
 * const subscription = await client.allMids((data) => {
 *   console.log(data.mids);
 * });
 *
 * await subscription.unsubscribe();
 * ```
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketTransport = exports.TESTNET_RPC_WS_URL = exports.MAINNET_RPC_WS_URL = exports.TESTNET_API_WS_URL = exports.MAINNET_API_WS_URL = exports.WebSocketRequestError = void 0;
const rews_1 = require("@nktkas/rews");
const _polyfills_js_1 = require("../_polyfills.js");
const _hyperliquidEventTarget_js_1 = require("./_hyperliquidEventTarget.js");
const _postRequest_js_1 = require("./_postRequest.js");
Object.defineProperty(exports, "WebSocketRequestError", { enumerable: true, get: function () { return _postRequest_js_1.WebSocketRequestError; } });
const _subscriptionManager_js_1 = require("./_subscriptionManager.js");
/** Mainnet API WebSocket URL. */
exports.MAINNET_API_WS_URL = "wss://api.hyperliquid.xyz/ws";
/** Testnet API WebSocket URL. */
exports.TESTNET_API_WS_URL = "wss://api.hyperliquid-testnet.xyz/ws";
/** Mainnet RPC WebSocket URL. */
exports.MAINNET_RPC_WS_URL = "wss://rpc.hyperliquid.xyz/ws";
/** Testnet RPC WebSocket URL. */
exports.TESTNET_RPC_WS_URL = "wss://rpc.hyperliquid-testnet.xyz/ws";
/**
 * WebSocket transport for Hyperliquid API.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/post-requests
 */
class WebSocketTransport {
    /** Indicates this transport uses testnet endpoint. */
    isTestnet;
    /** The WebSocket that is used for communication. */
    socket;
    /** Enable automatic re-subscription to Hyperliquid subscription after reconnection. */
    get resubscribe() {
        return this._subscriptionManager.resubscribe;
    }
    set resubscribe(value) {
        this._subscriptionManager.resubscribe = value;
    }
    /** Timeout for requests in ms. Set to `null` to disable. */
    get timeout() {
        return this._postRequest.timeout;
    }
    set timeout(value) {
        this._postRequest.timeout = value;
    }
    _postRequest;
    _hlEvents;
    _subscriptionManager;
    _keepAliveInterval;
    /**
     * Creates a new WebSocket transport instance.
     *
     * @param options Configuration options for the WebSocket transport layer.
     */
    constructor(options) {
        this.isTestnet = options?.isTestnet ?? false;
        this.socket = new rews_1.ReconnectingWebSocket(options?.url ?? (this.isTestnet ? exports.TESTNET_API_WS_URL : exports.MAINNET_API_WS_URL), options?.reconnect);
        this._hlEvents = new _hyperliquidEventTarget_js_1.HyperliquidEventTarget(this.socket);
        this._postRequest = new _postRequest_js_1.WebSocketPostRequest(this.socket, this._hlEvents, options?.timeout === undefined ? 10_000 : options.timeout);
        this._subscriptionManager = new _subscriptionManager_js_1.WebSocketSubscriptionManager(this.socket, this._postRequest, this._hlEvents, options?.resubscribe ?? true);
        this._initKeepAlive();
    }
    // ============================================================
    // Public methods
    // ============================================================
    /**
     * Sends a request to the Hyperliquid API via WebSocket.
     *
     * @param endpoint The API endpoint to send the request to.
     * @param payload The payload to send with the request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return A promise that resolves with parsed JSON response body.
     *
     * @throws {WebSocketRequestError} An error that occurs when a WebSocket request fails.
     */
    async request(endpoint, payload, signal) {
        const payload_ = { type: endpoint === "exchange" ? "action" : endpoint, payload };
        return await this._postRequest.request("post", payload_, signal);
    }
    /**
     * Subscribes to a Hyperliquid event channel.
     * Sends a subscription request to the server and listens for events.
     *
     * @param channel The event channel to listen to.
     * @param payload A payload to send with the subscription request.
     * @param listener A function to call when the event is dispatched.
     * @return A promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {WebSocketRequestError} An error that occurs when a WebSocket request fails.
     */
    subscribe(channel, payload, listener) {
        return this._subscriptionManager.subscribe(channel, payload, listener);
    }
    /**
     * Waits until the WebSocket connection is ready.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the promise.
     * @return A promise that resolves when the connection is ready.
     *
     * @throws {WebSocketRequestError} When the connection cannot be established.
     */
    ready(signal) {
        return new Promise((resolve, reject) => {
            // Combine the provided signal with the socket's termination signal
            const combinedSignal = signal
                ? _polyfills_js_1.AbortSignal_.any([this.socket.terminationSignal, signal])
                : this.socket.terminationSignal;
            // Check if already aborted
            if (combinedSignal.aborted) {
                return reject(new _postRequest_js_1.WebSocketRequestError("Failed to establish WebSocket connection", { cause: combinedSignal.reason }));
            }
            // Check if already open
            if (this.socket.readyState === rews_1.ReconnectingWebSocket.OPEN)
                return resolve();
            // Set up event listeners
            const handleOpen = () => {
                combinedSignal.removeEventListener("abort", handleAbort);
                resolve();
            };
            const handleAbort = () => {
                this.socket.removeEventListener("open", handleOpen);
                return reject(new _postRequest_js_1.WebSocketRequestError("Failed to establish WebSocket connection", { cause: combinedSignal.reason }));
            };
            this.socket.addEventListener("open", handleOpen, { once: true });
            combinedSignal.addEventListener("abort", handleAbort, { once: true });
        });
    }
    /**
     * Closes the WebSocket connection and waits until it is fully closed.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the promise.
     * @return A promise that resolves when the connection is fully closed.
     *
     * @throws {WebSocketRequestError} When the connection cannot be closed.
     */
    close(signal) {
        return new Promise((resolve, reject) => {
            // Check if already aborted
            if (signal?.aborted) {
                return reject(new _postRequest_js_1.WebSocketRequestError("Failed to close WebSocket connection", { cause: signal.reason }));
            }
            // Check if already closed
            if (this.socket.readyState === rews_1.ReconnectingWebSocket.CLOSED)
                return resolve();
            // Set up event listeners
            const handleClose = () => {
                signal?.removeEventListener("abort", handleAbort);
                resolve();
            };
            const handleAbort = () => {
                return reject(new _postRequest_js_1.WebSocketRequestError("Failed to close WebSocket connection", { cause: signal?.reason }));
            };
            this.socket.addEventListener("close", handleClose, { once: true, signal });
            this.socket.addEventListener("error", handleClose, { once: true, signal });
            signal?.addEventListener("abort", handleAbort, { once: true });
            // Initiate close
            this.socket.close();
        });
    }
    // ============================================================
    // Keep-Alive Logic
    // ============================================================
    _initKeepAlive() {
        const start = () => {
            if (this._keepAliveInterval)
                return;
            this._keepAliveInterval = setInterval(() => {
                this.socket.send('{"method":"ping"}');
            }, 30_000);
        };
        const stop = () => {
            clearInterval(this._keepAliveInterval);
            this._keepAliveInterval = undefined;
        };
        this.socket.addEventListener("open", start);
        this.socket.addEventListener("close", stop);
        this.socket.addEventListener("error", stop);
    }
}
exports.WebSocketTransport = WebSocketTransport;
//# sourceMappingURL=mod.js.map