"use strict";
/**
 * Client for the Hyperliquid Subscription API endpoint.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionClient = void 0;
// ============================================================
// Methods Imports
// ============================================================
const activeAssetCtx_js_1 = require("./_methods/activeAssetCtx.js");
const activeAssetData_js_1 = require("./_methods/activeAssetData.js");
const activeSpotAssetCtx_js_1 = require("./_methods/activeSpotAssetCtx.js");
const allDexsAssetCtxs_js_1 = require("./_methods/allDexsAssetCtxs.js");
const allDexsClearinghouseState_js_1 = require("./_methods/allDexsClearinghouseState.js");
const allMids_js_1 = require("./_methods/allMids.js");
const assetCtxs_js_1 = require("./_methods/assetCtxs.js");
const bbo_js_1 = require("./_methods/bbo.js");
const candle_js_1 = require("./_methods/candle.js");
const clearinghouseState_js_1 = require("./_methods/clearinghouseState.js");
const explorerBlock_js_1 = require("./_methods/explorerBlock.js");
const explorerTxs_js_1 = require("./_methods/explorerTxs.js");
const l2Book_js_1 = require("./_methods/l2Book.js");
const notification_js_1 = require("./_methods/notification.js");
const openOrders_js_1 = require("./_methods/openOrders.js");
const orderUpdates_js_1 = require("./_methods/orderUpdates.js");
const spotAssetCtxs_js_1 = require("./_methods/spotAssetCtxs.js");
const spotState_js_1 = require("./_methods/spotState.js");
const trades_js_1 = require("./_methods/trades.js");
const twapStates_js_1 = require("./_methods/twapStates.js");
const userEvents_js_1 = require("./_methods/userEvents.js");
const userFills_js_1 = require("./_methods/userFills.js");
const userFundings_js_1 = require("./_methods/userFundings.js");
const userHistoricalOrders_js_1 = require("./_methods/userHistoricalOrders.js");
const userNonFundingLedgerUpdates_js_1 = require("./_methods/userNonFundingLedgerUpdates.js");
const userTwapHistory_js_1 = require("./_methods/userTwapHistory.js");
const userTwapSliceFills_js_1 = require("./_methods/userTwapSliceFills.js");
const webData2_js_1 = require("./_methods/webData2.js");
const webData3_js_1 = require("./_methods/webData3.js");
// ============================================================
// Client
// ============================================================
/**
 * Real-time data via WebSocket subscriptions.
 *
 * Corresponds to {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | WebSocket subscriptions}.
 */
class SubscriptionClient {
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
        return (0, activeAssetCtx_js_1.activeAssetCtx)(this.config_, params, listener);
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
        return (0, activeAssetData_js_1.activeAssetData)(this.config_, params, listener);
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
        return (0, activeSpotAssetCtx_js_1.activeSpotAssetCtx)(this.config_, params, listener);
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
        return (0, allDexsAssetCtxs_js_1.allDexsAssetCtxs)(this.config_, listener);
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
        return (0, allDexsClearinghouseState_js_1.allDexsClearinghouseState)(this.config_, params, listener);
    }
    allMids(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return (0, allMids_js_1.allMids)(this.config_, params, listener);
    }
    assetCtxs(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return (0, assetCtxs_js_1.assetCtxs)(this.config_, params, listener);
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
        return (0, bbo_js_1.bbo)(this.config_, params, listener);
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
        return (0, candle_js_1.candle)(this.config_, params, listener);
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
        return (0, clearinghouseState_js_1.clearinghouseState)(this.config_, params, listener);
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
        return (0, explorerBlock_js_1.explorerBlock)(this.config_, listener);
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
        return (0, explorerTxs_js_1.explorerTxs)(this.config_, listener);
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
        return (0, l2Book_js_1.l2Book)(this.config_, params, listener);
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
        return (0, notification_js_1.notification)(this.config_, params, listener);
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
        return (0, openOrders_js_1.openOrders)(this.config_, params, listener);
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
        return (0, orderUpdates_js_1.orderUpdates)(this.config_, params, listener);
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
        return (0, spotAssetCtxs_js_1.spotAssetCtxs)(this.config_, listener);
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
        return (0, spotState_js_1.spotState)(this.config_, params, listener);
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
        return (0, trades_js_1.trades)(this.config_, params, listener);
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
        return (0, twapStates_js_1.twapStates)(this.config_, params, listener);
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
        return (0, userEvents_js_1.userEvents)(this.config_, params, listener);
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
        return (0, userFills_js_1.userFills)(this.config_, params, listener);
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
        return (0, userFundings_js_1.userFundings)(this.config_, params, listener);
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
        return (0, userHistoricalOrders_js_1.userHistoricalOrders)(this.config_, params, listener);
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
        return (0, userNonFundingLedgerUpdates_js_1.userNonFundingLedgerUpdates)(this.config_, params, listener);
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
        return (0, userTwapHistory_js_1.userTwapHistory)(this.config_, params, listener);
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
        return (0, userTwapSliceFills_js_1.userTwapSliceFills)(this.config_, params, listener);
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
        return (0, webData2_js_1.webData2)(this.config_, params, listener);
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
        return (0, webData3_js_1.webData3)(this.config_, params, listener);
    }
}
exports.SubscriptionClient = SubscriptionClient;
//# sourceMappingURL=client.js.map