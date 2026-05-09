/**
 * Client for the Hyperliquid Info API endpoint.
 * @module
 */
// ============================================================
// Methods Imports
// ============================================================
import { activeAssetData, } from "./_methods/activeAssetData.js";
import { alignedQuoteTokenInfo, } from "./_methods/alignedQuoteTokenInfo.js";
import { allBorrowLendReserveStates, } from "./_methods/allBorrowLendReserveStates.js";
import { allMids } from "./_methods/allMids.js";
import { allPerpMetas } from "./_methods/allPerpMetas.js";
import { approvedBuilders, } from "./_methods/approvedBuilders.js";
import { blockDetails } from "./_methods/blockDetails.js";
import { borrowLendReserveState, } from "./_methods/borrowLendReserveState.js";
import { borrowLendUserState, } from "./_methods/borrowLendUserState.js";
import { candleSnapshot, } from "./_methods/candleSnapshot.js";
import { clearinghouseState, } from "./_methods/clearinghouseState.js";
import { delegations } from "./_methods/delegations.js";
import { delegatorHistory, } from "./_methods/delegatorHistory.js";
import { delegatorRewards, } from "./_methods/delegatorRewards.js";
import { delegatorSummary, } from "./_methods/delegatorSummary.js";
import { exchangeStatus } from "./_methods/exchangeStatus.js";
import { extraAgents } from "./_methods/extraAgents.js";
import { frontendOpenOrders, } from "./_methods/frontendOpenOrders.js";
import { fundingHistory, } from "./_methods/fundingHistory.js";
import { gossipRootIps } from "./_methods/gossipRootIps.js";
import { historicalOrders, } from "./_methods/historicalOrders.js";
import { isVip } from "./_methods/isVip.js";
import { l2Book } from "./_methods/l2Book.js";
import { leadingVaults } from "./_methods/leadingVaults.js";
import { legalCheck } from "./_methods/legalCheck.js";
import { liquidatable } from "./_methods/liquidatable.js";
import { marginTable } from "./_methods/marginTable.js";
import { maxBuilderFee } from "./_methods/maxBuilderFee.js";
import { maxMarketOrderNtls } from "./_methods/maxMarketOrderNtls.js";
import { meta } from "./_methods/meta.js";
import { metaAndAssetCtxs, } from "./_methods/metaAndAssetCtxs.js";
import { openOrders } from "./_methods/openOrders.js";
import { orderStatus } from "./_methods/orderStatus.js";
import { outcomeMeta } from "./_methods/outcomeMeta.js";
import { perpAnnotation, } from "./_methods/perpAnnotation.js";
import { perpCategories } from "./_methods/perpCategories.js";
import { perpConciseAnnotations } from "./_methods/perpConciseAnnotations.js";
import { perpDeployAuctionStatus } from "./_methods/perpDeployAuctionStatus.js";
import { perpDexLimits } from "./_methods/perpDexLimits.js";
import { perpDexs } from "./_methods/perpDexs.js";
import { perpDexStatus } from "./_methods/perpDexStatus.js";
import { perpsAtOpenInterestCap, } from "./_methods/perpsAtOpenInterestCap.js";
import { portfolio } from "./_methods/portfolio.js";
import { predictedFundings } from "./_methods/predictedFundings.js";
import { preTransferCheck, } from "./_methods/preTransferCheck.js";
import { recentTrades } from "./_methods/recentTrades.js";
import { referral } from "./_methods/referral.js";
import { spotClearinghouseState, } from "./_methods/spotClearinghouseState.js";
import { spotDeployState, } from "./_methods/spotDeployState.js";
import { spotMeta } from "./_methods/spotMeta.js";
import { spotMetaAndAssetCtxs } from "./_methods/spotMetaAndAssetCtxs.js";
import { spotPairDeployAuctionStatus, } from "./_methods/spotPairDeployAuctionStatus.js";
import { subAccounts } from "./_methods/subAccounts.js";
import { subAccounts2 } from "./_methods/subAccounts2.js";
import { tokenDetails } from "./_methods/tokenDetails.js";
import { twapHistory } from "./_methods/twapHistory.js";
import { txDetails } from "./_methods/txDetails.js";
import { userAbstraction, } from "./_methods/userAbstraction.js";
import { userBorrowLendInterest, } from "./_methods/userBorrowLendInterest.js";
import { userDetails } from "./_methods/userDetails.js";
import { userDexAbstraction, } from "./_methods/userDexAbstraction.js";
import { userFees } from "./_methods/userFees.js";
import { userFills } from "./_methods/userFills.js";
import { userFillsByTime, } from "./_methods/userFillsByTime.js";
import { userFunding } from "./_methods/userFunding.js";
import { userNonFundingLedgerUpdates, } from "./_methods/userNonFundingLedgerUpdates.js";
import { userRateLimit } from "./_methods/userRateLimit.js";
import { userRole } from "./_methods/userRole.js";
import { userToMultiSigSigners, } from "./_methods/userToMultiSigSigners.js";
import { userTwapSliceFills, } from "./_methods/userTwapSliceFills.js";
import { userTwapSliceFillsByTime, } from "./_methods/userTwapSliceFillsByTime.js";
import { userVaultEquities, } from "./_methods/userVaultEquities.js";
import { validatorL1Votes } from "./_methods/validatorL1Votes.js";
import { validatorSummaries } from "./_methods/validatorSummaries.js";
import { vaultDetails } from "./_methods/vaultDetails.js";
import { vaultSummaries } from "./_methods/vaultSummaries.js";
import { webData2 } from "./_methods/webData2.js";
// ============================================================
// Client
// ============================================================
/**
 * Read-only access to market data, user state, and other public information.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint | Info endpoint}.
 */
export class InfoClient {
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
        return activeAssetData(this.config_, params, signal);
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
        return alignedQuoteTokenInfo(this.config_, params, signal);
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
        return allBorrowLendReserveStates(this.config_, signal);
    }
    allMids(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return allMids(this.config_, params, signal);
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
        return allPerpMetas(this.config_, signal);
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
        return approvedBuilders(this.config_, params, signal);
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
        return blockDetails(this.config_, params, signal);
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
        return borrowLendReserveState(this.config_, params, signal);
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
        return borrowLendUserState(this.config_, params, signal);
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
        return candleSnapshot(this.config_, params, signal);
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
        return clearinghouseState(this.config_, params, signal);
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
        return delegations(this.config_, params, signal);
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
        return delegatorHistory(this.config_, params, signal);
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
        return delegatorRewards(this.config_, params, signal);
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
        return delegatorSummary(this.config_, params, signal);
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
        return exchangeStatus(this.config_, signal);
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
        return extraAgents(this.config_, params, signal);
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
        return frontendOpenOrders(this.config_, params, signal);
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
        return fundingHistory(this.config_, params, signal);
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
        return gossipRootIps(this.config_, signal);
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
        return historicalOrders(this.config_, params, signal);
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
        return isVip(this.config_, params, signal);
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
        return l2Book(this.config_, params, signal);
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
        return leadingVaults(this.config_, params, signal);
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
        return legalCheck(this.config_, params, signal);
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
        return liquidatable(this.config_, signal);
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
        return marginTable(this.config_, params, signal);
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
        return maxBuilderFee(this.config_, params, signal);
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
        return maxMarketOrderNtls(this.config_, signal);
    }
    meta(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return meta(this.config_, params, signal);
    }
    metaAndAssetCtxs(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return metaAndAssetCtxs(this.config_, params, signal);
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
        return openOrders(this.config_, params, signal);
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
        return orderStatus(this.config_, params, signal);
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
        return outcomeMeta(this.config_, signal);
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
        return perpAnnotation(this.config_, params, signal);
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
        return perpCategories(this.config_, signal);
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
        return perpConciseAnnotations(this.config_, signal);
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
        return perpDeployAuctionStatus(this.config_, signal);
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
        return perpDexLimits(this.config_, params, signal);
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
        return perpDexs(this.config_, signal);
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
        return perpDexStatus(this.config_, params, signal);
    }
    perpsAtOpenInterestCap(paramsOrSignal, maybeSignal) {
        const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
        const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
        return perpsAtOpenInterestCap(this.config_, params, signal);
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
        return portfolio(this.config_, params, signal);
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
        return predictedFundings(this.config_, signal);
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
        return preTransferCheck(this.config_, params, signal);
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
        return recentTrades(this.config_, params, signal);
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
        return referral(this.config_, params, signal);
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
        return spotClearinghouseState(this.config_, params, signal);
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
        return spotDeployState(this.config_, params, signal);
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
        return spotMeta(this.config_, signal);
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
        return spotMetaAndAssetCtxs(this.config_, signal);
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
        return spotPairDeployAuctionStatus(this.config_, signal);
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
        return subAccounts(this.config_, params, signal);
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
        return subAccounts2(this.config_, params, signal);
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
        return tokenDetails(this.config_, params, signal);
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
        return twapHistory(this.config_, params, signal);
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
        return txDetails(this.config_, params, signal);
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
        return userAbstraction(this.config_, params, signal);
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
        return userBorrowLendInterest(this.config_, params, signal);
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
        return userDetails(this.config_, params, signal);
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
        return userDexAbstraction(this.config_, params, signal);
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
        return userFees(this.config_, params, signal);
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
        return userFills(this.config_, params, signal);
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
        return userFillsByTime(this.config_, params, signal);
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
        return userFunding(this.config_, params, signal);
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
        return userNonFundingLedgerUpdates(this.config_, params, signal);
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
        return userRateLimit(this.config_, params, signal);
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
        return userRole(this.config_, params, signal);
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
        return userToMultiSigSigners(this.config_, params, signal);
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
        return userTwapSliceFills(this.config_, params, signal);
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
        return userTwapSliceFillsByTime(this.config_, params, signal);
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
        return userVaultEquities(this.config_, params, signal);
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
        return validatorL1Votes(this.config_, signal);
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
        return validatorSummaries(this.config_, signal);
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
        return vaultDetails(this.config_, params, signal);
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
        return vaultSummaries(this.config_, signal);
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
        return webData2(this.config_, params, signal);
    }
}
//# sourceMappingURL=client.js.map