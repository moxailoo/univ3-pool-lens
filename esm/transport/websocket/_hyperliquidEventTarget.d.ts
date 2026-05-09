interface SubscribeUnsubscribeResponse {
    method: "subscribe" | "unsubscribe";
    /** Original subscription request payload. */
    subscription: unknown;
}
interface PostResponse {
    id: number;
    response: {
        type: "info";
        payload: {
            type: string;
            data: unknown;
        };
    } | {
        type: "action";
        payload: {
            status: "ok" | "err";
            response: {
                type: string;
                data?: unknown;
            } | string;
        };
    } | {
        type: "error";
        /** Error message, e.g. "Cannot track more than 10 total users." */
        payload: string;
    };
}
interface BlockDetails {
    blockTime: number;
    hash: string;
    height: number;
    numTxs: number;
    proposer: string;
}
interface TxDetails {
    action: {
        type: string;
        [key: string]: unknown;
    };
    block: number;
    error: string | null;
    hash: string;
    time: number;
    user: string;
}
/** Base system events and dynamic channel events for Hyperliquid WebSocket API. */
interface HyperliquidEventMap {
    subscriptionResponse: CustomEvent<SubscribeUnsubscribeResponse>;
    post: CustomEvent<PostResponse>;
    error: CustomEvent<string>;
    pong: CustomEvent<undefined>;
    explorerBlock_: CustomEvent<BlockDetails[]>;
    explorerTxs_: CustomEvent<TxDetails[]>;
    [key: string]: CustomEvent<any>;
}
/** Listens for WebSocket messages and sends them as Hyperliquid typed events. */
export interface HyperliquidEventTarget {
    addEventListener<K extends keyof HyperliquidEventMap>(type: K, listener: ((event: HyperliquidEventMap[K]) => void) | EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HyperliquidEventMap>(type: K, listener: ((event: HyperliquidEventMap[K]) => void) | EventListenerObject | null, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: HyperliquidEventMap[keyof HyperliquidEventMap]): boolean;
}
export declare class HyperliquidEventTarget extends EventTarget {
    constructor(socket: WebSocket);
}
export {};
//# sourceMappingURL=_hyperliquidEventTarget.d.ts.map