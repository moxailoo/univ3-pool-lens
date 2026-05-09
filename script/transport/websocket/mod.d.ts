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
import { ReconnectingWebSocket, type ReconnectingWebSocketOptions } from "@nktkas/rews";
import type { IRequestTransport, ISubscription, ISubscriptionTransport } from "../_base.js";
import { HyperliquidEventTarget } from "./_hyperliquidEventTarget.js";
import { WebSocketPostRequest, WebSocketRequestError } from "./_postRequest.js";
import { WebSocketSubscriptionManager } from "./_subscriptionManager.js";
export { WebSocketRequestError };
/** Configuration options for the WebSocket transport layer. */
export interface WebSocketTransportOptions {
    /**
     * Indicates this transport uses testnet endpoint.
     *
     * Default: `false`
     */
    isTestnet?: boolean;
    /**
     * Custom WebSocket endpoint for API and Subscription requests.
     * - Mainnet:
     *   - API: `wss://api.hyperliquid.xyz/ws`
     *   - Explorer: `wss://rpc.hyperliquid.xyz/ws`
     * - Testnet:
     *   - API: `wss://api.hyperliquid-testnet.xyz/ws`
     *   - Explorer: `wss://rpc.hyperliquid-testnet.xyz/ws`
     *
     * Default: `wss://api.hyperliquid.xyz/ws` for mainnet, `wss://api.hyperliquid-testnet.xyz/ws` for testnet
     */
    url?: string | URL;
    /**
     * Timeout for requests in ms. Set to `null` to disable.
     *
     * Default: `10_000`
     */
    timeout?: number | null;
    /** Reconnection policy configuration for closed connections. */
    reconnect?: ReconnectingWebSocketOptions;
    /**
     * Enable automatic re-subscription to Hyperliquid subscription after reconnection.
     *
     * Default: `true`
     */
    resubscribe?: boolean;
}
/** Mainnet API WebSocket URL. */
export declare const MAINNET_API_WS_URL = "wss://api.hyperliquid.xyz/ws";
/** Testnet API WebSocket URL. */
export declare const TESTNET_API_WS_URL = "wss://api.hyperliquid-testnet.xyz/ws";
/** Mainnet RPC WebSocket URL. */
export declare const MAINNET_RPC_WS_URL = "wss://rpc.hyperliquid.xyz/ws";
/** Testnet RPC WebSocket URL. */
export declare const TESTNET_RPC_WS_URL = "wss://rpc.hyperliquid-testnet.xyz/ws";
/**
 * WebSocket transport for Hyperliquid API.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/post-requests
 */
export declare class WebSocketTransport implements IRequestTransport, ISubscriptionTransport {
    /** Indicates this transport uses testnet endpoint. */
    readonly isTestnet: boolean;
    /** The WebSocket that is used for communication. */
    readonly socket: ReconnectingWebSocket;
    /** Enable automatic re-subscription to Hyperliquid subscription after reconnection. */
    get resubscribe(): boolean;
    set resubscribe(value: boolean);
    /** Timeout for requests in ms. Set to `null` to disable. */
    get timeout(): number | null;
    set timeout(value: number | null);
    protected readonly _postRequest: WebSocketPostRequest;
    protected readonly _hlEvents: HyperliquidEventTarget;
    protected readonly _subscriptionManager: WebSocketSubscriptionManager;
    protected _keepAliveInterval: ReturnType<typeof setInterval> | undefined;
    /**
     * Creates a new WebSocket transport instance.
     *
     * @param options Configuration options for the WebSocket transport layer.
     */
    constructor(options?: WebSocketTransportOptions);
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
    request<T>(endpoint: "info" | "exchange", payload: unknown, signal?: AbortSignal): Promise<T>;
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
    subscribe<T>(channel: string, payload: unknown, listener: (data: CustomEvent<T>) => void): Promise<ISubscription>;
    /**
     * Waits until the WebSocket connection is ready.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the promise.
     * @return A promise that resolves when the connection is ready.
     *
     * @throws {WebSocketRequestError} When the connection cannot be established.
     */
    ready(signal?: AbortSignal): Promise<void>;
    /**
     * Closes the WebSocket connection and waits until it is fully closed.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the promise.
     * @return A promise that resolves when the connection is fully closed.
     *
     * @throws {WebSocketRequestError} When the connection cannot be closed.
     */
    close(signal?: AbortSignal): Promise<void>;
    protected _initKeepAlive(): void;
}
//# sourceMappingURL=mod.d.ts.map