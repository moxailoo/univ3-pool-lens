import type { ReconnectingWebSocket } from "@nktkas/rews";
import { TransportError } from "../_base.js";
import type { HyperliquidEventTarget } from "./_hyperliquidEventTarget.js";
interface PendingRequest {
    id: number | string;
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
}
/** Error thrown when a WebSocket request fails. */
export declare class WebSocketRequestError extends TransportError {
    constructor(message?: string, options?: ErrorOptions);
}
/**
 * Manages WebSocket post requests to the Hyperliquid API.
 * Handles request creation, sending, and mapping responses to their corresponding requests.
 */
export declare class WebSocketPostRequest {
    /** Timeout for requests in ms. Set to `null` to disable. */
    timeout: number | null;
    protected readonly _socket: ReconnectingWebSocket;
    protected _lastId: number;
    protected _queue: PendingRequest[];
    /**
     * Creates a new WebSocket async request handler.
     *
     * @param socket WebSocket connection instance for sending requests to the Hyperliquid WebSocket API
     * @param hlEvents Used to recognize Hyperliquid responses and match them with sent requests
     * @param timeout Timeout for requests in ms. Set to `null` to disable.
     */
    constructor(socket: ReconnectingWebSocket, hlEvents: HyperliquidEventTarget, timeout: number | null);
    /**
     * Sends a request to the Hyperliquid API.
     *
     * @return A promise that resolves with the parsed JSON response body.
     */
    request(method: "ping", signal?: AbortSignal): Promise<void>;
    request<T>(method: "post" | "subscribe" | "unsubscribe", payload: unknown, signal?: AbortSignal): Promise<T>;
    /** Normalizes an object and then converts it to a string. */
    static requestToId(value: unknown): string;
}
export {};
//# sourceMappingURL=_postRequest.d.ts.map