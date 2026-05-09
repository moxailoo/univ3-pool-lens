import type { ReconnectingWebSocket } from "@nktkas/rews";
import type { ISubscription } from "../_base.js";
import type { HyperliquidEventTarget } from "./_hyperliquidEventTarget.js";
import { WebSocketPostRequest } from "./_postRequest.js";
/** Internal state for managing a subscription. */
interface SubscriptionState {
    /** Map of event listeners to their unsubscribe functions. */
    listeners: Map<(data: CustomEvent) => void, () => Promise<void>>;
    /** Promise tracking the subscription request. */
    promise: Promise<unknown>;
    /** Whether the subscription request has completed. */
    promiseFinished: boolean;
    /** Controller to signal subscription failure. */
    failureController: AbortController;
}
/**
 * Manages WebSocket subscriptions to Hyperliquid event channels.
 * Handles subscription lifecycle, resubscription on reconnect, and cleanup.
 */
export declare class WebSocketSubscriptionManager {
    /** Enable automatic re-subscription to Hyperliquid subscription after reconnection. */
    resubscribe: boolean;
    protected readonly _socket: ReconnectingWebSocket;
    protected readonly _postRequest: WebSocketPostRequest;
    protected readonly _hlEvents: HyperliquidEventTarget;
    protected _subscriptions: Map<string, SubscriptionState>;
    constructor(socket: ReconnectingWebSocket, postRequest: WebSocketPostRequest, hlEvents: HyperliquidEventTarget, resubscribe: boolean);
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
    /** Resubscribes to all existing subscriptions if auto-resubscribe is enabled. */
    protected _handleOpen(): void;
    /** Cleans up subscriptions if resubscribe is disabled or socket is terminated. */
    protected _handleClose(): void;
    /** Checks if a payload contains a user parameter. */
    protected _hasUserParam(payload: unknown): boolean;
    /** Counts the number of unique users across all active subscriptions. */
    protected _countUniqueUserSubscriptions(): number;
}
export {};
//# sourceMappingURL=_subscriptionManager.d.ts.map