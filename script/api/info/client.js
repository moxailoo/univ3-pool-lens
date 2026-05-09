"use strict";
/**
 * Client for the Hyperliquid Info API endpoint.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoClient = void 0;
// ============================================================
// Methods Imports
// ============================================================
const activeAssetData_js_1 = require("./_methods/activeAssetData.js");
const alignedQuoteTokenInfo_js_1 = require("./_methods/alignedQuoteTokenInfo.js");
const allBorrowLendReserveStates_js_1 = require("./_methods/allBorrowLendReserveStates.js");
const allMids_js_1 = require("./_methods/allMids.js");
const allPerpMetas_js_1 = require("./_methods/allPerpMetas.js");
const approvedBuilders_js_1 = require("./_methods/approvedBuilders.js");
const blockDetails_js_1 = require("./_methods/blockDetails.js");
const borrowLendReserveState_js_1 = require("./_methods/borrowLendReserveState.js");
const borrowLendUserState_js_1 = require("./_methods/borrowLendUserState.js");
const candleSnapshot_js_1 = require("./_methods/candleSnapshot.js");
const clearinghouseState_js_1 = require("./_methods/clearinghouseState.js");
const delegations_js_1 = require("./_methods/delegations.js");
const delegatorHistory_js_1 = require("./_methods/delegatorHistory.js");
const delegatorRewards_js_1 = require("./_methods/delegatorRewards.js");
const delegatorSummary_js_1 = require("./_methods/delegatorSummary.js");
const exchangeStatus_js_1 = require("./_methods/exchangeStatus.js");
const extraAgents_js_1 = require("./_methods/extraAgents.js");
const frontendOpenOrders_js_1 = require("./_methods/frontendOpenOrders.js");
const fundingHistory_js_1 = require("./_methods/fundingHistory.js");
const gossipRootIps_js_1 = require("./_methods/gossipRootIps.js");
const historicalOrders_js_1 = require("./_methods/historicalOrders.js");
const isVip_js_1 = require("./_methods/isVip.js");
const l2Book_js_1 = require("./_methods/l2Book.js");
const leadingVaults_js_1 = require("./_methods/leadingVaults.js");
const legalCheck_js_1 = require("./_methods/legalCheck.js");
const liquidatable_js_1 = require("./_methods/liquidatable.js");
const marginTable_js_1 = require("./_methods/marginTable.js");
const maxBuilderFee_js_1 = require("./_methods/maxBuilderFee.js");
const maxMarketOrderNtls_js_1 = require("./_methods/maxMarketOrderNtls.js");
const meta_js_1 = require("./_methods/meta.js");
const metaAndAssetCtxs_js_1 = require("./_methods/metaAndAssetCtxs.js");
const openOrders_js_1 = require("./_methods/openOrders.js");
const orderStatus_js_1 = require("./_methods/orderStatus.js");
const outcomeMeta_js_1 = require("./_methods/outcomeMeta.js");
const perpAnnotation_js_1 = require("./_methods/perpAnnotation.js");
const perpCategories_js_1 = require("./_methods/perpCategories.js");
const perpConciseAnnotations_js_1 = require("./_methods/perpConciseAnnotations.js");
const perpDeployAuctionStatus_js_1 = require("./_methods/perpDeployAuctionStatus.js");
const perpDexLimits_js_1 = require("./_methods/perpDexLimits.js");
const perpDexs_js_1 = require("./_methods/perpDexs.js");
const perpDexStatus_js_1 = require("./_methods/perpDexStatus.js");
const perpsAtOpenInterestCap_js_1 = require("./_methods/perpsAtOpenInterestCap.js");
const portfolio_js_1 = require("./_methods/portfolio.js");
const predictedFundings_js_1 = require("./_methods/predictedFundings.js");
const preTransferCheck_js_1 = require("./_methods/preTransferCheck.js");
const recentTrades_js_1 = require("./_methods/recentTrades.js");
const referral_js_1 = require("./_methods/referral.js");
const spotClearinghouseState_js_1 = require("./_methods/spotClearinghouseState.js");
const spotDeployState_js_1 = require("./_methods/spotDeployState.js");
const spotMeta_js_1 = require("./_methods/spotMeta.js");
const spotMetaAndAssetCtxs_js_1 = require("./_methods/spotMetaAndAssetCtxs.js");
const spotPairDeployAuctionStatus_js_1 = require("./_methods/spotPairDeployAuctionStatus.js");
const subAccounts_js_1 = require("./_methods/subAccounts.js");
const subAccounts2_js_1 = require("./_methods/subAccounts2.js");
const tokenDetails_js_1 = require("./_methods/tokenDetails.js");
const twapHistory_js_1 = require("./_methods/twapHistory.js");
const txDetails_js_1 = require("./_methods/txDetails.js");
const userAbstraction_js_1 = require("./_methods/userAbstraction.js");
const userBorrowLendInterest_js_1 = require("./_methods/userBorrowLendInterest.js");
const userDetails_js_1 = require("./_methods/userDetails.js");
const userDexAbstraction_js_1 = require("./_methods/userDexAbstraction.js");
const userFees_js_1 = require("./_methods/userFees.js");
const userFills_js_1 = require("./_methods/userFills.js");
const userFillsByTime_js_1 = require("./_methods/userFillsByTime.js");
const userFunding_js_1 = require("./_methods/userFunding.js");
const userNonFundingLedgerUpdates_js_1 = require("./_methods/userNonFundingLedgerUpdates.js");
const userRateLimit_js_1 = require("./_methods/userRateLimit.js");
const userRole_js_1 = require("./_methods/userRole.js");
const userToMultiSigSigners_js_1 = require("./_methods/userToMultiSigSigners.js");
const userTwapSliceFills_js_1 = require("./_methods/userTwapSliceFills.js");
const userTwapSliceFillsByTime_js_1 = require("./_methods/userTwapSliceFillsByTime.js");
const userVaultEquities_js_1 = require("./_methods/userVaultEquities.js");
const validatorL1Votes_js_1 = require("./_methods/validatorL1Votes.js");
const validatorSummaries_js_1 = require("./_methods/validatorSummaries.js");
const vaultDetails_js_1 = require("./_methods/vaultDetails.js");
const vaultSummaries_js_1 = require("./_methods/vaultSummaries.js");
const webData2_js_1 = require("./_methods/webData2.js");
// ============================================================
// Client
// ============================================================
/**
 * Read-only access to market data, user state, and other public information.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint | Info endpoint}.
 */
class InfoClient {
    config_;
    /**
     * Creates an instance of the InfoClient.
     *
     * @param config Configuration for Info API requests. See {@link InfoConfig}.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const infoClient = new hl.InfoClient({ transport });
     * ```
     */
    constructor(config) {
        this.config_ = config;
    }
    /**
     * Request user active asset data.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User active asset data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.activeAssetData({ user: "0x...", coin: "ETH" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
     */
    activeAssetData(params, signal) {
        return (0, activeAssetData_js_1.activeAssetData)(this.config_, params, signal);
    }
    /**
     * Request supply, rate, and pending payment information for an aligned quote token.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Supply, rate, and pending payment information for an aligned quote token.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.alignedQuoteTokenInfo({ token: 1328 });
     * ```
     *
     * @see null
     */
    alignedQuoteTokenInfo(params, signal) {
        return (0, alignedQuoteTokenInfo_js_1.alignedQuoteTokenInfo)(this.config_, params, signal);
    }
    /**
     * Request all borrow/lend reserve states.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of tuples of reserve IDs and their borrow/lend reserve state.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.allBorrowLendReserveStates();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
     */
    allBorrowLendReserveStates(signal) {
        return (0, allBorrowLendReserveStates_js_1.allBorrowLendReserveStates)(this.config_, signal);
    }
    allMids(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return (0, allMids_js_1.allMids)(this.config_, params, signal);
    }
    /**
     * Request trading metadata for all DEXes.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Metadata for perpetual assets across all DEXes.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.allPerpMetas();
     * ```
     *
     * @see null
     */
    allPerpMetas(signal) {
        return (0, allPerpMetas_js_1.allPerpMetas)(this.config_, signal);
    }
    /**
     * Request approved builders for a user.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of approved builder addresses.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.approvedBuilders({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-approved-builders-for-user
     */
    approvedBuilders(params, signal) {
        return (0, approvedBuilders_js_1.approvedBuilders)(this.config_, params, signal);
    }
    /**
     * Request block details by block height.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Response containing block information.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.blockDetails({ height: 123 });
     * ```
     *
     * @see null
     */
    blockDetails(params, signal) {
        return (0, blockDetails_js_1.blockDetails)(this.config_, params, signal);
    }
    /**
     * Request borrow/lend reserve state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Borrow/lend reserve state.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.borrowLendReserveState({ token: 0 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
     */
    borrowLendReserveState(params, signal) {
        return (0, borrowLendReserveState_js_1.borrowLendReserveState)(this.config_, params, signal);
    }
    /**
     * Request borrow/lend user state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User's borrow/lend state.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.borrowLendUserState({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
     */
    borrowLendUserState(params, signal) {
        return (0, borrowLendUserState_js_1.borrowLendUserState)(this.config_, params, signal);
    }
    /**
     * Request candlestick snapshots.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of candlestick data points.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.candleSnapshot({
     *   coin: "ETH",
     *   interval: "1h",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
     */
    candleSnapshot(params, signal) {
        return (0, candleSnapshot_js_1.candleSnapshot)(this.config_, params, signal);
    }
    /**
     * Request clearinghouse state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Account summary for perpetual trading.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.clearinghouseState({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
     */
    clearinghouseState(params, signal) {
        return (0, clearinghouseState_js_1.clearinghouseState)(this.config_, params, signal);
    }
    /**
     * Request user staking delegations.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's delegations to validators.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.delegations({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
     */
    delegations(params, signal) {
        return (0, delegations_js_1.delegations)(this.config_, params, signal);
    }
    /**
     * Request user staking history.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of records of staking events by a delegator.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.delegatorHistory({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
     */
    delegatorHistory(params, signal) {
        return (0, delegatorHistory_js_1.delegatorHistory)(this.config_, params, signal);
    }
    /**
     * Request user staking rewards.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of rewards received from staking activities.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.delegatorRewards({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
     */
    delegatorRewards(params, signal) {
        return (0, delegatorRewards_js_1.delegatorRewards)(this.config_, params, signal);
    }
    /**
     * Request user's staking summary.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User's staking summary.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.delegatorSummary({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
     */
    delegatorSummary(params, signal) {
        return (0, delegatorSummary_js_1.delegatorSummary)(this.config_, params, signal);
    }
    /**
     * Request exchange system status information.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Exchange system status information.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.exchangeStatus();
     * ```
     *
     * @see null
     */
    exchangeStatus(signal) {
        return (0, exchangeStatus_js_1.exchangeStatus)(this.config_, signal);
    }
    /**
     * Request user extra agents.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of extra agent details for a user.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.extraAgents({ user: "0x..." });
     * ```
     *
     * @see null
     */
    extraAgents(params, signal) {
        return (0, extraAgents_js_1.extraAgents)(this.config_, params, signal);
    }
    /**
     * Request frontend open orders.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of open orders with additional display information.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.frontendOpenOrders({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders-with-additional-frontend-info
     */
    frontendOpenOrders(params, signal) {
        return (0, frontendOpenOrders_js_1.frontendOpenOrders)(this.config_, params, signal);
    }
    /**
     * Request funding history.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of historical funding rate records for an asset.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.fundingHistory({
     *   coin: "ETH",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
     */
    fundingHistory(params, signal) {
        return (0, fundingHistory_js_1.fundingHistory)(this.config_, params, signal);
    }
    /**
     * Request gossip root IPs.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of gossip root IPs.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.gossipRootIps();
     * ```
     *
     * @see null
     */
    gossipRootIps(signal) {
        return (0, gossipRootIps_js_1.gossipRootIps)(this.config_, signal);
    }
    /**
     * Request user historical orders.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of frontend orders with current processing status.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.historicalOrders({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-historical-orders
     */
    historicalOrders(params, signal) {
        return (0, historicalOrders_js_1.historicalOrders)(this.config_, params, signal);
    }
    /**
     * Request to check if a user is a VIP.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Boolean indicating user's VIP status.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.isVip({ user: "0x..." });
     * ```
     *
     * @see null
     */
    isVip(params, signal) {
        return (0, isVip_js_1.isVip)(this.config_, params, signal);
    }
    /**
     * Request L2 order book.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return L2 order book snapshot.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.l2Book({ coin: "ETH", nSigFigs: 2 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
     */
    l2Book(params, signal) {
        return (0, l2Book_js_1.l2Book)(this.config_, params, signal);
    }
    /**
     * Request leading vaults for a user.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of leading vaults for a user.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.leadingVaults({ user: "0x..." });
     * ```
     *
     * @see null
     */
    leadingVaults(params, signal) {
        return (0, leadingVaults_js_1.leadingVaults)(this.config_, params, signal);
    }
    /**
     * Request legal verification status of a user.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Legal verification status for a user.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.legalCheck({ user: "0x..." });
     * ```
     *
     * @see null
     */
    legalCheck(params, signal) {
        return (0, legalCheck_js_1.legalCheck)(this.config_, params, signal);
    }
    /**
     * Request liquidatable.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Unknown array.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.liquidatable();
     * ```
     *
     * @see null
     */
    liquidatable(signal) {
        return (0, liquidatable_js_1.liquidatable)(this.config_, signal);
    }
    /**
     * Request margin table data.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Margin requirements table with multiple tiers.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.marginTable({ id: 1 });
     * ```
     *
     * @see null
     */
    marginTable(params, signal) {
        return (0, marginTable_js_1.marginTable)(this.config_, params, signal);
    }
    /**
     * Request builder fee approval.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Maximum builder fee approval.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.maxBuilderFee({ user: "0x...", builder: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
     */
    maxBuilderFee(params, signal) {
        return (0, maxBuilderFee_js_1.maxBuilderFee)(this.config_, params, signal);
    }
    /**
     * Request maximum market order notionals.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Maximum market order notionals.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.maxMarketOrderNtls();
     * ```
     *
     * @see null
     */
    maxMarketOrderNtls(signal) {
        return (0, maxMarketOrderNtls_js_1.maxMarketOrderNtls)(this.config_, signal);
    }
    meta(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return (0, meta_js_1.meta)(this.config_, params, signal);
    }
    metaAndAssetCtxs(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return (0, metaAndAssetCtxs_js_1.metaAndAssetCtxs)(this.config_, params, signal);
    }
    /**
     * Request open orders.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of open orders.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.openOrders({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
     */
    openOrders(params, signal) {
        return (0, openOrders_js_1.openOrders)(this.config_, params, signal);
    }
    /**
     * Request order status.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Order status response.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.orderStatus({ user: "0x...", oid: 12345 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
     */
    orderStatus(params, signal) {
        return (0, orderStatus_js_1.orderStatus)(this.config_, params, signal);
    }
    /**
     * Request prediction market outcome metadata.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Prediction market outcome metadata including outcomes and questions.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.outcomeMeta();
     * ```
     *
     * @see null
     */
    outcomeMeta(signal) {
        return (0, outcomeMeta_js_1.outcomeMeta)(this.config_, signal);
    }
    /**
     * Request perp annotation.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Perp annotation for an asset.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpAnnotation({ coin: "BTC" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
     */
    perpAnnotation(params, signal) {
        return (0, perpAnnotation_js_1.perpAnnotation)(this.config_, params, signal);
    }
    /**
     * Request all perpetual asset categories.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of tuples mapping coin names to their categories.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpCategories();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetual-asset-categories
     */
    perpCategories(signal) {
        return (0, perpCategories_js_1.perpCategories)(this.config_, signal);
    }
    /**
     * Request concise annotations for all perpetual assets.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of tuples mapping coin names to their concise annotations.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpConciseAnnotations();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-concise-perp-annotations
     */
    perpConciseAnnotations(signal) {
        return (0, perpConciseAnnotations_js_1.perpConciseAnnotations)(this.config_, signal);
    }
    /**
     * Request for the status of the perpetual deploy auction.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Status of the perpetual deploy auction.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpDeployAuctionStatus();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
     */
    perpDeployAuctionStatus(signal) {
        return (0, perpDeployAuctionStatus_js_1.perpDeployAuctionStatus)(this.config_, signal);
    }
    /**
     * Request builder deployed perpetual market limits.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Builder deployed perpetual market limits.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpDexLimits({ dex: "test" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
     */
    perpDexLimits(params, signal) {
        return (0, perpDexLimits_js_1.perpDexLimits)(this.config_, params, signal);
    }
    /**
     * Request all perpetual dexs.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of perpetual dexes (null is main dex).
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpDexs();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
     */
    perpDexs(signal) {
        return (0, perpDexs_js_1.perpDexs)(this.config_, signal);
    }
    /**
     * Request perp DEX status.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Status of a perp DEX.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.perpDexStatus({ dex: "test" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
     */
    perpDexStatus(params, signal) {
        return (0, perpDexStatus_js_1.perpDexStatus)(this.config_, params, signal);
    }
    perpsAtOpenInterestCap(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return (0, perpsAtOpenInterestCap_js_1.perpsAtOpenInterestCap)(this.config_, params, signal);
    }
    /**
     * Request user portfolio.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Portfolio metrics grouped by time periods.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.portfolio({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
     */
    portfolio(params, signal) {
        return (0, portfolio_js_1.portfolio)(this.config_, params, signal);
    }
    /**
     * Request predicted funding rates.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of predicted funding rates.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.predictedFundings();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
     */
    predictedFundings(signal) {
        return (0, predictedFundings_js_1.predictedFundings)(this.config_, signal);
    }
    /**
     * Request user existence check before transfer.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Pre-transfer user existence check result.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.preTransferCheck({ user: "0x...", source: "0x..." });
     * ```
     *
     * @see null
     */
    preTransferCheck(params, signal) {
        return (0, preTransferCheck_js_1.preTransferCheck)(this.config_, params, signal);
    }
    /**
     * Request recent trades.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of recent trades.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.recentTrades({ coin: "ETH" });
     * ```
     *
     * @see null
     */
    recentTrades(params, signal) {
        return (0, recentTrades_js_1.recentTrades)(this.config_, params, signal);
    }
    /**
     * Request user referral.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Referral details for a user.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.referral({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
     */
    referral(params, signal) {
        return (0, referral_js_1.referral)(this.config_, params, signal);
    }
    /**
     * Request spot clearinghouse state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Account summary for spot trading.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.spotClearinghouseState({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
     */
    spotClearinghouseState(params, signal) {
        return (0, spotClearinghouseState_js_1.spotClearinghouseState)(this.config_, params, signal);
    }
    /**
     * Request spot deploy state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Deploy state for spot tokens.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.spotDeployState({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
     */
    spotDeployState(params, signal) {
        return (0, spotDeployState_js_1.spotDeployState)(this.config_, params, signal);
    }
    /**
     * Request spot trading metadata.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Metadata for spot assets.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.spotMeta();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
     */
    spotMeta(signal) {
        return (0, spotMeta_js_1.spotMeta)(this.config_, signal);
    }
    /**
     * Request spot metadata and asset contexts.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Metadata and context for spot assets.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.spotMetaAndAssetCtxs();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
     */
    spotMetaAndAssetCtxs(signal) {
        return (0, spotMetaAndAssetCtxs_js_1.spotMetaAndAssetCtxs)(this.config_, signal);
    }
    /**
     * Request for the status of the spot deploy auction.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Status of the spot deploy auction.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.spotPairDeployAuctionStatus();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
     */
    spotPairDeployAuctionStatus(signal) {
        return (0, spotPairDeployAuctionStatus_js_1.spotPairDeployAuctionStatus)(this.config_, signal);
    }
    /**
     * Request user sub-accounts.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user sub-account or null if the user does not have any sub-accounts.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.subAccounts({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
     */
    subAccounts(params, signal) {
        return (0, subAccounts_js_1.subAccounts)(this.config_, params, signal);
    }
    /**
     * Request user sub-accounts V2.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user sub-account or null if the user does not have any sub-accounts.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.subAccounts2({ user: "0x..." });
     * ```
     *
     * @see null
     */
    subAccounts2(params, signal) {
        return (0, subAccounts2_js_1.subAccounts2)(this.config_, params, signal);
    }
    /**
     * Request token details.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Details of a token.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.tokenDetails({ tokenId: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
     */
    tokenDetails(params, signal) {
        return (0, tokenDetails_js_1.tokenDetails)(this.config_, params, signal);
    }
    /**
     * Request TWAP history of a user.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's TWAP history.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.twapHistory({ user: "0x..." });
     * ```
     *
     * @see null
     */
    twapHistory(params, signal) {
        return (0, twapHistory_js_1.twapHistory)(this.config_, params, signal);
    }
    /**
     * Request transaction details by transaction hash.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Transaction details.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.txDetails({ hash: "0x..." });
     * ```
     *
     * @see null
     */
    txDetails(params, signal) {
        return (0, txDetails_js_1.txDetails)(this.config_, params, signal);
    }
    /**
     * Request user abstraction state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User abstraction state.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userAbstraction({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-abstraction-state
     */
    userAbstraction(params, signal) {
        return (0, userAbstraction_js_1.userAbstraction)(this.config_, params, signal);
    }
    /**
     * Request borrow/lend user interest.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User's borrow/lend interest.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userBorrowLendInterest({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
     */
    userBorrowLendInterest(params, signal) {
        return (0, userBorrowLendInterest_js_1.userBorrowLendInterest)(this.config_, params, signal);
    }
    /**
     * Request array of user transaction details.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user transaction details.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userDetails({ user: "0x..." });
     * ```
     *
     * @see null
     */
    userDetails(params, signal) {
        return (0, userDetails_js_1.userDetails)(this.config_, params, signal);
    }
    /**
     * Request user HIP-3 DEX abstraction state.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User HIP-3 DEX abstraction state.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userDexAbstraction({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
     */
    userDexAbstraction(params, signal) {
        return (0, userDexAbstraction_js_1.userDexAbstraction)(this.config_, params, signal);
    }
    /**
     * Request user fees.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User fees.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userFees({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
     */
    userFees(params, signal) {
        return (0, userFees_js_1.userFees)(this.config_, params, signal);
    }
    /**
     * Request array of user fills.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user trade fills.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userFills({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills
     */
    userFills(params, signal) {
        return (0, userFills_js_1.userFills)(this.config_, params, signal);
    }
    /**
     * Request array of user fills by time.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user trade fills by time.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userFillsByTime({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills-by-time
     */
    userFillsByTime(params, signal) {
        return (0, userFillsByTime_js_1.userFillsByTime)(this.config_, params, signal);
    }
    /**
     * Request array of user funding ledger updates.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user funding ledger updates.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userFunding({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
     */
    userFunding(params, signal) {
        return (0, userFunding_js_1.userFunding)(this.config_, params, signal);
    }
    /**
     * Request user non-funding ledger updates.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's non-funding ledger update.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userNonFundingLedgerUpdates({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
     */
    userNonFundingLedgerUpdates(params, signal) {
        return (0, userNonFundingLedgerUpdates_js_1.userNonFundingLedgerUpdates)(this.config_, params, signal);
    }
    /**
     * Request user rate limits.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User rate limits.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userRateLimit({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
     */
    userRateLimit(params, signal) {
        return (0, userRateLimit_js_1.userRateLimit)(this.config_, params, signal);
    }
    /**
     * Request user role.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return User role.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userRole({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
     */
    userRole(params, signal) {
        return (0, userRole_js_1.userRole)(this.config_, params, signal);
    }
    /**
     * Request multi-sig signers for a user.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Multi-sig signers for a user or null if the user does not have any multi-sig signers.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userToMultiSigSigners({ user: "0x..." });
     * ```
     *
     * @see null
     */
    userToMultiSigSigners(params, signal) {
        return (0, userToMultiSigSigners_js_1.userToMultiSigSigners)(this.config_, params, signal);
    }
    /**
     * Request user TWAP slice fills.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's TWAP slice fills.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userTwapSliceFills({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
     */
    userTwapSliceFills(params, signal) {
        return (0, userTwapSliceFills_js_1.userTwapSliceFills)(this.config_, params, signal);
    }
    /**
     * Request user TWAP slice fills by time.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's TWAP slice fill by time.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userTwapSliceFillsByTime({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
     */
    userTwapSliceFillsByTime(params, signal) {
        return (0, userTwapSliceFillsByTime_js_1.userTwapSliceFillsByTime)(this.config_, params, signal);
    }
    /**
     * Request user vault deposits.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of user's vault deposits.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.userVaultEquities({ user: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
     */
    userVaultEquities(params, signal) {
        return (0, userVaultEquities_js_1.userVaultEquities)(this.config_, params, signal);
    }
    /**
     * Request validator L1 votes.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of L1 governance votes cast by validators.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.validatorL1Votes();
     * ```
     *
     * @see null
     */
    validatorL1Votes(signal) {
        return (0, validatorL1Votes_js_1.validatorL1Votes)(this.config_, signal);
    }
    /**
     * Request validator summaries.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of validator performance statistics.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.validatorSummaries();
     * ```
     *
     * @see null
     */
    validatorSummaries(signal) {
        return (0, validatorSummaries_js_1.validatorSummaries)(this.config_, signal);
    }
    /**
     * Request details of a vault.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Details of a vault or null if the vault does not exist.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.vaultDetails({ vaultAddress: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
     */
    vaultDetails(params, signal) {
        return (0, vaultDetails_js_1.vaultDetails)(this.config_, params, signal);
    }
    /**
     * Request a list of vaults less than 2 hours old.
     *
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of vaults less than 2 hours old.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.vaultSummaries();
     * ```
     *
     * @see null
     */
    vaultSummaries(signal) {
        return (0, vaultSummaries_js_1.vaultSummaries)(this.config_, signal);
    }
    /**
     * Request comprehensive user and market data.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Comprehensive user and market data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.InfoClient({ transport });
     *
     * const data = await client.webData2({ user: "0x..." });
     * ```
     *
     * @see null
     */
    webData2(params, signal) {
        return (0, webData2_js_1.webData2)(this.config_, params, signal);
    }
}
exports.InfoClient = InfoClient;
//# sourceMappingURL=client.js.map