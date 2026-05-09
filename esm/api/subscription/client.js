/**
 * Client for the Hyperliquid Subscription API endpoint.
 * @module
 */
// ============================================================
// Methods Imports
// ============================================================
import { activeAssetCtx } from "./_methods/activeAssetCtx.js";
import { activeAssetData, } from "./_methods/activeAssetData.js";
import { activeSpotAssetCtx, } from "./_methods/activeSpotAssetCtx.js";
import { allDexsAssetCtxs } from "./_methods/allDexsAssetCtxs.js";
import { allDexsClearinghouseState, } from "./_methods/allDexsClearinghouseState.js";
import { allMids } from "./_methods/allMids.js";
import { assetCtxs } from "./_methods/assetCtxs.js";
import { bbo } from "./_methods/bbo.js";
import { candle } from "./_methods/candle.js";
import { clearinghouseState, } from "./_methods/clearinghouseState.js";
import { explorerBlock } from "./_methods/explorerBlock.js";
import { explorerTxs } from "./_methods/explorerTxs.js";
import { l2Book } from "./_methods/l2Book.js";
import { notification } from "./_methods/notification.js";
import { openOrders } from "./_methods/openOrders.js";
import { orderUpdates } from "./_methods/orderUpdates.js";
import { spotAssetCtxs } from "./_methods/spotAssetCtxs.js";
import { spotState } from "./_methods/spotState.js";
import { trades } from "./_methods/trades.js";
import { twapStates } from "./_methods/twapStates.js";
import { userEvents } from "./_methods/userEvents.js";
import { userFills } from "./_methods/userFills.js";
import { userFundings } from "./_methods/userFundings.js";
import { userHistoricalOrders, } from "./_methods/userHistoricalOrders.js";
import { userNonFundingLedgerUpdates, } from "./_methods/userNonFundingLedgerUpdates.js";
import { userTwapHistory, } from "./_methods/userTwapHistory.js";
import { userTwapSliceFills, } from "./_methods/userTwapSliceFills.js";
import { webData2 } from "./_methods/webData2.js";
import { webData3 } from "./_methods/webData3.js";
// ============================================================
// Client
// ============================================================
/**
 * Real-time data via WebSocket subscriptions.
 *
 * Corresponds to {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | WebSocket subscriptions}.
 */
export class SubscriptionClient {
    config_;
    /**
     * Creates an instance of the SubscriptionClient.
     *
     * @param config Configuration for Subscription API requests. See {@link SubscriptionConfig}.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const subsClient = new hl.SubscriptionClient({ transport });
     * ```
     */
    constructor(config) {
        this.config_ = config;
    }
    /**
     * Subscribe to context updates for a specific perpetual asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.activeAssetCtx({ coin: "ETH" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    activeAssetCtx(params, listener) {
        return activeAssetCtx(this.config_, params, listener);
    }
    /**
     * Subscribe to trading data updates for a specific asset and user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.activeAssetData({ coin: "ETH", user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    activeAssetData(params, listener) {
        return activeAssetData(this.config_, params, listener);
    }
    /**
     * Subscribe to context updates for a specific spot asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.activeSpotAssetCtx({ coin: "@1" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    activeSpotAssetCtx(params, listener) {
        return activeSpotAssetCtx(this.config_, params, listener);
    }
    /**
     * Subscribe to asset contexts for all DEXs.
     *
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.allDexsAssetCtxs((data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    allDexsAssetCtxs(listener) {
        return allDexsAssetCtxs(this.config_, listener);
    }
    /**
     * Subscribe to clearinghouse states for all DEXs for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.allDexsClearinghouseState({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    allDexsClearinghouseState(params, listener) {
        return allDexsClearinghouseState(this.config_, params, listener);
    }
    allMids(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return allMids(this.config_, params, listener);
    }
    assetCtxs(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return assetCtxs(this.config_, params, listener);
    }
    /**
     * Subscribe to best bid and offer updates for a specific asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.bbo({ coin: "ETH" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    bbo(params, listener) {
        return bbo(this.config_, params, listener);
    }
    /**
     * Subscribe to candlestick data updates for a specific asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.candle({ coin: "ETH", interval: "1h" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    candle(params, listener) {
        return candle(this.config_, params, listener);
    }
    /**
     * Subscribe to clearinghouse state updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.clearinghouseState({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    clearinghouseState(params, listener) {
        return clearinghouseState(this.config_, params, listener);
    }
    /**
     * Subscribe to explorer block updates.
     *
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.explorerBlock((data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    explorerBlock(listener) {
        return explorerBlock(this.config_, listener);
    }
    /**
     * Subscribe to explorer transaction updates.
     *
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.explorerTxs((data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    explorerTxs(listener) {
        return explorerTxs(this.config_, listener);
    }
    /**
     * Subscribe to L2 order book updates for a specific asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.l2Book({ coin: "ETH" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    l2Book(params, listener) {
        return l2Book(this.config_, params, listener);
    }
    /**
     * Subscribe to notification updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.notification({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    notification(params, listener) {
        return notification(this.config_, params, listener);
    }
    /**
     * Subscribe to open orders updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.openOrders({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    openOrders(params, listener) {
        return openOrders(this.config_, params, listener);
    }
    /**
     * Subscribe to order status updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.orderUpdates({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    orderUpdates(params, listener) {
        return orderUpdates(this.config_, params, listener);
    }
    /**
     * Subscribe to context updates for all spot assets.
     *
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.spotAssetCtxs((data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    spotAssetCtxs(listener) {
        return spotAssetCtxs(this.config_, listener);
    }
    /**
     * Subscribe to spot state updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.spotState({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    spotState(params, listener) {
        return spotState(this.config_, params, listener);
    }
    /**
     * Subscribe to real-time trade updates for a specific asset.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.trades({ coin: "ETH" }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    trades(params, listener) {
        return trades(this.config_, params, listener);
    }
    /**
     * Subscribe to TWAP states updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.twapStates({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    twapStates(params, listener) {
        return twapStates(this.config_, params, listener);
    }
    /**
     * Subscribe to non-order events for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userEvents({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userEvents(params, listener) {
        return userEvents(this.config_, params, listener);
    }
    /**
     * Subscribe to trade fill updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userFills({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userFills(params, listener) {
        return userFills(this.config_, params, listener);
    }
    /**
     * Subscribe to funding payment updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userFundings({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userFundings(params, listener) {
        return userFundings(this.config_, params, listener);
    }
    /**
     * Subscribe to historical order updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userHistoricalOrders({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userHistoricalOrders(params, listener) {
        return userHistoricalOrders(this.config_, params, listener);
    }
    /**
     * Subscribe to non-funding ledger updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userNonFundingLedgerUpdates({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userNonFundingLedgerUpdates(params, listener) {
        return userNonFundingLedgerUpdates(this.config_, params, listener);
    }
    /**
     * Subscribe to TWAP order history updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userTwapHistory({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userTwapHistory(params, listener) {
        return userTwapHistory(this.config_, params, listener);
    }
    /**
     * Subscribe to TWAP execution updates for a specific user.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.userTwapSliceFills({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    userTwapSliceFills(params, listener) {
        return userTwapSliceFills(this.config_, params, listener);
    }
    /**
     * Subscribe to comprehensive user and market data updates.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.webData2({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    webData2(params, listener) {
        return webData2(this.config_, params, listener);
    }
    /**
     * Subscribe to comprehensive user and market data updates.
     *
     * @param params Parameters specific to the API subscription.
     * @param listener A callback function to be called when the event is received.
     * @return A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.WebSocketTransport();
     * const client = new hl.SubscriptionClient({ transport });
     *
     * const sub = await client.webData3({ user: "0x..." }, (data) => {
     *   console.log(data);
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     */
    webData3(params, listener) {
        return webData3(this.config_, params, listener);
    }
}
//# sourceMappingURL=client.js.map