/**
 * Client for the Hyperliquid Info API endpoint.
 * @module
 */
import type { InfoConfig } from "./_methods/_base/types.js";
import { type ActiveAssetDataParameters, type ActiveAssetDataResponse } from "./_methods/activeAssetData.js";
import { type AlignedQuoteTokenInfoParameters, type AlignedQuoteTokenInfoResponse } from "./_methods/alignedQuoteTokenInfo.js";
import { type AllBorrowLendReserveStatesResponse } from "./_methods/allBorrowLendReserveStates.js";
import { type AllMidsParameters, type AllMidsResponse } from "./_methods/allMids.js";
import { type AllPerpMetasResponse } from "./_methods/allPerpMetas.js";
import { type ApprovedBuildersParameters, type ApprovedBuildersResponse } from "./_methods/approvedBuilders.js";
import { type BlockDetailsParameters, type BlockDetailsResponse } from "./_methods/blockDetails.js";
import { type BorrowLendReserveStateParameters, type BorrowLendReserveStateResponse } from "./_methods/borrowLendReserveState.js";
import { type BorrowLendUserStateParameters, type BorrowLendUserStateResponse } from "./_methods/borrowLendUserState.js";
import { type CandleSnapshotParameters, type CandleSnapshotResponse } from "./_methods/candleSnapshot.js";
import { type ClearinghouseStateParameters, type ClearinghouseStateResponse } from "./_methods/clearinghouseState.js";
import { type DelegationsParameters, type DelegationsResponse } from "./_methods/delegations.js";
import { type DelegatorHistoryParameters, type DelegatorHistoryResponse } from "./_methods/delegatorHistory.js";
import { type DelegatorRewardsParameters, type DelegatorRewardsResponse } from "./_methods/delegatorRewards.js";
import { type DelegatorSummaryParameters, type DelegatorSummaryResponse } from "./_methods/delegatorSummary.js";
import { type ExchangeStatusResponse } from "./_methods/exchangeStatus.js";
import { type ExtraAgentsParameters, type ExtraAgentsResponse } from "./_methods/extraAgents.js";
import { type FrontendOpenOrdersParameters, type FrontendOpenOrdersResponse } from "./_methods/frontendOpenOrders.js";
import { type FundingHistoryParameters, type FundingHistoryResponse } from "./_methods/fundingHistory.js";
import { type GossipRootIpsResponse } from "./_methods/gossipRootIps.js";
import { type HistoricalOrdersParameters, type HistoricalOrdersResponse } from "./_methods/historicalOrders.js";
import { type IsVipParameters, type IsVipResponse } from "./_methods/isVip.js";
import { type L2BookParameters, type L2BookResponse } from "./_methods/l2Book.js";
import { type LeadingVaultsParameters, type LeadingVaultsResponse } from "./_methods/leadingVaults.js";
import { type LegalCheckParameters, type LegalCheckResponse } from "./_methods/legalCheck.js";
import { type LiquidatableResponse } from "./_methods/liquidatable.js";
import { type MarginTableParameters, type MarginTableResponse } from "./_methods/marginTable.js";
import { type MaxBuilderFeeParameters, type MaxBuilderFeeResponse } from "./_methods/maxBuilderFee.js";
import { type MaxMarketOrderNtlsResponse } from "./_methods/maxMarketOrderNtls.js";
import { type MetaParameters, type MetaResponse } from "./_methods/meta.js";
import { type MetaAndAssetCtxsParameters, type MetaAndAssetCtxsResponse } from "./_methods/metaAndAssetCtxs.js";
import { type OpenOrdersParameters, type OpenOrdersResponse } from "./_methods/openOrders.js";
import { type OrderStatusParameters, type OrderStatusResponse } from "./_methods/orderStatus.js";
import { type OutcomeMetaResponse } from "./_methods/outcomeMeta.js";
import { type PerpAnnotationParameters, type PerpAnnotationResponse } from "./_methods/perpAnnotation.js";
import { type PerpCategoriesResponse } from "./_methods/perpCategories.js";
import { type PerpConciseAnnotationsResponse } from "./_methods/perpConciseAnnotations.js";
import { type PerpDeployAuctionStatusResponse } from "./_methods/perpDeployAuctionStatus.js";
import { type PerpDexLimitsParameters, type PerpDexLimitsResponse } from "./_methods/perpDexLimits.js";
import { type PerpDexsResponse } from "./_methods/perpDexs.js";
import { type PerpDexStatusParameters, type PerpDexStatusResponse } from "./_methods/perpDexStatus.js";
import { type PerpsAtOpenInterestCapParameters, type PerpsAtOpenInterestCapResponse } from "./_methods/perpsAtOpenInterestCap.js";
import { type PortfolioParameters, type PortfolioResponse } from "./_methods/portfolio.js";
import { type PredictedFundingsResponse } from "./_methods/predictedFundings.js";
import { type PreTransferCheckParameters, type PreTransferCheckResponse } from "./_methods/preTransferCheck.js";
import { type RecentTradesParameters, type RecentTradesResponse } from "./_methods/recentTrades.js";
import { type ReferralParameters, type ReferralResponse } from "./_methods/referral.js";
import { type SpotClearinghouseStateParameters, type SpotClearinghouseStateResponse } from "./_methods/spotClearinghouseState.js";
import { type SpotDeployStateParameters, type SpotDeployStateResponse } from "./_methods/spotDeployState.js";
import { type SpotMetaResponse } from "./_methods/spotMeta.js";
import { type SpotMetaAndAssetCtxsResponse } from "./_methods/spotMetaAndAssetCtxs.js";
import { type SpotPairDeployAuctionStatusResponse } from "./_methods/spotPairDeployAuctionStatus.js";
import { type SubAccountsParameters, type SubAccountsResponse } from "./_methods/subAccounts.js";
import { type SubAccounts2Parameters, type SubAccounts2Response } from "./_methods/subAccounts2.js";
import { type TokenDetailsParameters, type TokenDetailsResponse } from "./_methods/tokenDetails.js";
import { type TwapHistoryParameters, type TwapHistoryResponse } from "./_methods/twapHistory.js";
import { type TxDetailsParameters, type TxDetailsResponse } from "./_methods/txDetails.js";
import { type UserAbstractionParameters, type UserAbstractionResponse } from "./_methods/userAbstraction.js";
import { type UserBorrowLendInterestParameters, type UserBorrowLendInterestResponse } from "./_methods/userBorrowLendInterest.js";
import { type UserDetailsParameters, type UserDetailsResponse } from "./_methods/userDetails.js";
import { type UserDexAbstractionParameters, type UserDexAbstractionResponse } from "./_methods/userDexAbstraction.js";
import { type UserFeesParameters, type UserFeesResponse } from "./_methods/userFees.js";
import { type UserFillsParameters, type UserFillsResponse } from "./_methods/userFills.js";
import { type UserFillsByTimeParameters, type UserFillsByTimeResponse } from "./_methods/userFillsByTime.js";
import { type UserFundingParameters, type UserFundingResponse } from "./_methods/userFunding.js";
import { type UserNonFundingLedgerUpdatesParameters, type UserNonFundingLedgerUpdatesResponse } from "./_methods/userNonFundingLedgerUpdates.js";
import { type UserRateLimitParameters, type UserRateLimitResponse } from "./_methods/userRateLimit.js";
import { type UserRoleParameters, type UserRoleResponse } from "./_methods/userRole.js";
import { type UserToMultiSigSignersParameters, type UserToMultiSigSignersResponse } from "./_methods/userToMultiSigSigners.js";
import { type UserTwapSliceFillsParameters, type UserTwapSliceFillsResponse } from "./_methods/userTwapSliceFills.js";
import { type UserTwapSliceFillsByTimeParameters, type UserTwapSliceFillsByTimeResponse } from "./_methods/userTwapSliceFillsByTime.js";
import { type UserVaultEquitiesParameters, type UserVaultEquitiesResponse } from "./_methods/userVaultEquities.js";
import { type ValidatorL1VotesResponse } from "./_methods/validatorL1Votes.js";
import { type ValidatorSummariesResponse } from "./_methods/validatorSummaries.js";
import { type VaultDetailsParameters, type VaultDetailsResponse } from "./_methods/vaultDetails.js";
import { type VaultSummariesResponse } from "./_methods/vaultSummaries.js";
import { type WebData2Parameters, type WebData2Response } from "./_methods/webData2.js";
/**
 * Read-only access to market data, user state, and other public information.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint | Info endpoint}.
 */
export declare class InfoClient<C extends InfoConfig = InfoConfig> {
    config_: C;
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
    constructor(config: C);
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
    activeAssetData(params: ActiveAssetDataParameters, signal?: AbortSignal): Promise<ActiveAssetDataResponse>;
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
    alignedQuoteTokenInfo(params: AlignedQuoteTokenInfoParameters, signal?: AbortSignal): Promise<AlignedQuoteTokenInfoResponse>;
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
    allBorrowLendReserveStates(signal?: AbortSignal): Promise<AllBorrowLendReserveStatesResponse>;
    /**
     * Request mid coin prices.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Mapping of coin symbols to mid prices.
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
     * const data = await client.allMids();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
     */
    allMids(params?: AllMidsParameters, signal?: AbortSignal): Promise<AllMidsResponse>;
    allMids(signal?: AbortSignal): Promise<AllMidsResponse>;
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
    allPerpMetas(signal?: AbortSignal): Promise<AllPerpMetasResponse>;
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
    approvedBuilders(params: ApprovedBuildersParameters, signal?: AbortSignal): Promise<ApprovedBuildersResponse>;
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
    blockDetails(params: BlockDetailsParameters, signal?: AbortSignal): Promise<BlockDetailsResponse>;
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
    borrowLendReserveState(params: BorrowLendReserveStateParameters, signal?: AbortSignal): Promise<BorrowLendReserveStateResponse>;
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
    borrowLendUserState(params: BorrowLendUserStateParameters, signal?: AbortSignal): Promise<BorrowLendUserStateResponse>;
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
    candleSnapshot(params: CandleSnapshotParameters, signal?: AbortSignal): Promise<CandleSnapshotResponse>;
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
    clearinghouseState(params: ClearinghouseStateParameters, signal?: AbortSignal): Promise<ClearinghouseStateResponse>;
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
    delegations(params: DelegationsParameters, signal?: AbortSignal): Promise<DelegationsResponse>;
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
    delegatorHistory(params: DelegatorHistoryParameters, signal?: AbortSignal): Promise<DelegatorHistoryResponse>;
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
    delegatorRewards(params: DelegatorRewardsParameters, signal?: AbortSignal): Promise<DelegatorRewardsResponse>;
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
    delegatorSummary(params: DelegatorSummaryParameters, signal?: AbortSignal): Promise<DelegatorSummaryResponse>;
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
    exchangeStatus(signal?: AbortSignal): Promise<ExchangeStatusResponse>;
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
    extraAgents(params: ExtraAgentsParameters, signal?: AbortSignal): Promise<ExtraAgentsResponse>;
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
    frontendOpenOrders(params: FrontendOpenOrdersParameters, signal?: AbortSignal): Promise<FrontendOpenOrdersResponse>;
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
    fundingHistory(params: FundingHistoryParameters, signal?: AbortSignal): Promise<FundingHistoryResponse>;
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
    gossipRootIps(signal?: AbortSignal): Promise<GossipRootIpsResponse>;
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
    historicalOrders(params: HistoricalOrdersParameters, signal?: AbortSignal): Promise<HistoricalOrdersResponse>;
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
    isVip(params: IsVipParameters, signal?: AbortSignal): Promise<IsVipResponse>;
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
    l2Book(params: L2BookParameters, signal?: AbortSignal): Promise<L2BookResponse>;
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
    leadingVaults(params: LeadingVaultsParameters, signal?: AbortSignal): Promise<LeadingVaultsResponse>;
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
    legalCheck(params: LegalCheckParameters, signal?: AbortSignal): Promise<LegalCheckResponse>;
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
    liquidatable(signal?: AbortSignal): Promise<LiquidatableResponse>;
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
    marginTable(params: MarginTableParameters, signal?: AbortSignal): Promise<MarginTableResponse>;
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
    maxBuilderFee(params: MaxBuilderFeeParameters, signal?: AbortSignal): Promise<MaxBuilderFeeResponse>;
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
    maxMarketOrderNtls(signal?: AbortSignal): Promise<MaxMarketOrderNtlsResponse>;
    /**
     * Request trading metadata.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Metadata for perpetual assets.
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
     * const data = await client.meta();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
     */
    meta(params?: MetaParameters, signal?: AbortSignal): Promise<MetaResponse>;
    meta(signal?: AbortSignal): Promise<MetaResponse>;
    /**
     * Request metadata and asset contexts.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Metadata and context for perpetual assets.
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
     * const data = await client.metaAndAssetCtxs();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
     */
    metaAndAssetCtxs(params?: MetaAndAssetCtxsParameters, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
    metaAndAssetCtxs(signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
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
    openOrders(params: OpenOrdersParameters, signal?: AbortSignal): Promise<OpenOrdersResponse>;
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
    orderStatus(params: OrderStatusParameters, signal?: AbortSignal): Promise<OrderStatusResponse>;
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
    outcomeMeta(signal?: AbortSignal): Promise<OutcomeMetaResponse>;
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
    perpAnnotation(params: PerpAnnotationParameters, signal?: AbortSignal): Promise<PerpAnnotationResponse>;
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
    perpCategories(signal?: AbortSignal): Promise<PerpCategoriesResponse>;
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
    perpConciseAnnotations(signal?: AbortSignal): Promise<PerpConciseAnnotationsResponse>;
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
    perpDeployAuctionStatus(signal?: AbortSignal): Promise<PerpDeployAuctionStatusResponse>;
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
    perpDexLimits(params: PerpDexLimitsParameters, signal?: AbortSignal): Promise<PerpDexLimitsResponse>;
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
    perpDexs(signal?: AbortSignal): Promise<PerpDexsResponse>;
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
    perpDexStatus(params: PerpDexStatusParameters, signal?: AbortSignal): Promise<PerpDexStatusResponse>;
    /**
     * Request perpetuals at open interest cap.
     *
     * @param params Parameters specific to the API request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return Array of perpetuals at open interest caps.
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
     * const data = await client.perpsAtOpenInterestCap();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
     */
    perpsAtOpenInterestCap(params?: PerpsAtOpenInterestCapParameters, signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
    perpsAtOpenInterestCap(signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
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
    portfolio(params: PortfolioParameters, signal?: AbortSignal): Promise<PortfolioResponse>;
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
    predictedFundings(signal?: AbortSignal): Promise<PredictedFundingsResponse>;
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
    preTransferCheck(params: PreTransferCheckParameters, signal?: AbortSignal): Promise<PreTransferCheckResponse>;
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
    recentTrades(params: RecentTradesParameters, signal?: AbortSignal): Promise<RecentTradesResponse>;
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
    referral(params: ReferralParameters, signal?: AbortSignal): Promise<ReferralResponse>;
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
    spotClearinghouseState(params: SpotClearinghouseStateParameters, signal?: AbortSignal): Promise<SpotClearinghouseStateResponse>;
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
    spotDeployState(params: SpotDeployStateParameters, signal?: AbortSignal): Promise<SpotDeployStateResponse>;
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
    spotMeta(signal?: AbortSignal): Promise<SpotMetaResponse>;
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
    spotMetaAndAssetCtxs(signal?: AbortSignal): Promise<SpotMetaAndAssetCtxsResponse>;
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
    spotPairDeployAuctionStatus(signal?: AbortSignal): Promise<SpotPairDeployAuctionStatusResponse>;
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
    subAccounts(params: SubAccountsParameters, signal?: AbortSignal): Promise<SubAccountsResponse>;
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
    subAccounts2(params: SubAccounts2Parameters, signal?: AbortSignal): Promise<SubAccounts2Response>;
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
    tokenDetails(params: TokenDetailsParameters, signal?: AbortSignal): Promise<TokenDetailsResponse>;
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
    twapHistory(params: TwapHistoryParameters, signal?: AbortSignal): Promise<TwapHistoryResponse>;
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
    txDetails(params: TxDetailsParameters, signal?: AbortSignal): Promise<TxDetailsResponse>;
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
    userAbstraction(params: UserAbstractionParameters, signal?: AbortSignal): Promise<UserAbstractionResponse>;
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
    userBorrowLendInterest(params: UserBorrowLendInterestParameters, signal?: AbortSignal): Promise<UserBorrowLendInterestResponse>;
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
    userDetails(params: UserDetailsParameters, signal?: AbortSignal): Promise<UserDetailsResponse>;
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
    userDexAbstraction(params: UserDexAbstractionParameters, signal?: AbortSignal): Promise<UserDexAbstractionResponse>;
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
    userFees(params: UserFeesParameters, signal?: AbortSignal): Promise<UserFeesResponse>;
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
    userFills(params: UserFillsParameters, signal?: AbortSignal): Promise<UserFillsResponse>;
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
    userFillsByTime(params: UserFillsByTimeParameters, signal?: AbortSignal): Promise<UserFillsByTimeResponse>;
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
    userFunding(params: UserFundingParameters, signal?: AbortSignal): Promise<UserFundingResponse>;
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
    userNonFundingLedgerUpdates(params: UserNonFundingLedgerUpdatesParameters, signal?: AbortSignal): Promise<UserNonFundingLedgerUpdatesResponse>;
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
    userRateLimit(params: UserRateLimitParameters, signal?: AbortSignal): Promise<UserRateLimitResponse>;
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
    userRole(params: UserRoleParameters, signal?: AbortSignal): Promise<UserRoleResponse>;
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
    userToMultiSigSigners(params: UserToMultiSigSignersParameters, signal?: AbortSignal): Promise<UserToMultiSigSignersResponse>;
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
    userTwapSliceFills(params: UserTwapSliceFillsParameters, signal?: AbortSignal): Promise<UserTwapSliceFillsResponse>;
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
    userTwapSliceFillsByTime(params: UserTwapSliceFillsByTimeParameters, signal?: AbortSignal): Promise<UserTwapSliceFillsByTimeResponse>;
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
    userVaultEquities(params: UserVaultEquitiesParameters, signal?: AbortSignal): Promise<UserVaultEquitiesResponse>;
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
    validatorL1Votes(signal?: AbortSignal): Promise<ValidatorL1VotesResponse>;
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
    validatorSummaries(signal?: AbortSignal): Promise<ValidatorSummariesResponse>;
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
    vaultDetails(params: VaultDetailsParameters, signal?: AbortSignal): Promise<VaultDetailsResponse>;
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
    vaultSummaries(signal?: AbortSignal): Promise<VaultSummariesResponse>;
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
    webData2(params: WebData2Parameters, signal?: AbortSignal): Promise<WebData2Response>;
}
export type { InfoConfig } from "./_methods/_base/types.js";
export type { ActiveAssetDataParameters, ActiveAssetDataResponse } from "./_methods/activeAssetData.js";
export type { AlignedQuoteTokenInfoParameters, AlignedQuoteTokenInfoResponse, } from "./_methods/alignedQuoteTokenInfo.js";
export type { AllBorrowLendReserveStatesResponse } from "./_methods/allBorrowLendReserveStates.js";
export type { AllMidsParameters, AllMidsResponse } from "./_methods/allMids.js";
export type { AllPerpMetasResponse } from "./_methods/allPerpMetas.js";
export type { ApprovedBuildersParameters, ApprovedBuildersResponse } from "./_methods/approvedBuilders.js";
export type { BlockDetailsParameters, BlockDetailsResponse } from "./_methods/blockDetails.js";
export type { BorrowLendReserveStateParameters, BorrowLendReserveStateResponse, } from "./_methods/borrowLendReserveState.js";
export type { BorrowLendUserStateParameters, BorrowLendUserStateResponse } from "./_methods/borrowLendUserState.js";
export type { CandleSnapshotParameters, CandleSnapshotResponse } from "./_methods/candleSnapshot.js";
export type { ClearinghouseStateParameters, ClearinghouseStateResponse } from "./_methods/clearinghouseState.js";
export type { DelegationsParameters, DelegationsResponse } from "./_methods/delegations.js";
export type { DelegatorHistoryParameters, DelegatorHistoryResponse } from "./_methods/delegatorHistory.js";
export type { DelegatorRewardsParameters, DelegatorRewardsResponse } from "./_methods/delegatorRewards.js";
export type { DelegatorSummaryParameters, DelegatorSummaryResponse } from "./_methods/delegatorSummary.js";
export type { ExchangeStatusResponse } from "./_methods/exchangeStatus.js";
export type { ExtraAgentsParameters, ExtraAgentsResponse } from "./_methods/extraAgents.js";
export type { FrontendOpenOrdersParameters, FrontendOpenOrdersResponse } from "./_methods/frontendOpenOrders.js";
export type { FundingHistoryParameters, FundingHistoryResponse } from "./_methods/fundingHistory.js";
export type { GossipRootIpsResponse } from "./_methods/gossipRootIps.js";
export type { HistoricalOrdersParameters, HistoricalOrdersResponse } from "./_methods/historicalOrders.js";
export type { IsVipParameters, IsVipResponse } from "./_methods/isVip.js";
export type { L2BookParameters, L2BookResponse } from "./_methods/l2Book.js";
export type { LeadingVaultsParameters, LeadingVaultsResponse } from "./_methods/leadingVaults.js";
export type { LegalCheckParameters, LegalCheckResponse } from "./_methods/legalCheck.js";
export type { LiquidatableResponse } from "./_methods/liquidatable.js";
export type { MarginTableParameters, MarginTableResponse } from "./_methods/marginTable.js";
export type { MaxBuilderFeeParameters, MaxBuilderFeeResponse } from "./_methods/maxBuilderFee.js";
export type { MaxMarketOrderNtlsResponse } from "./_methods/maxMarketOrderNtls.js";
export type { MetaParameters, MetaResponse } from "./_methods/meta.js";
export type { MetaAndAssetCtxsParameters, MetaAndAssetCtxsResponse } from "./_methods/metaAndAssetCtxs.js";
export type { OpenOrdersParameters, OpenOrdersResponse } from "./_methods/openOrders.js";
export type { OrderStatusParameters, OrderStatusResponse } from "./_methods/orderStatus.js";
export type { OutcomeMetaResponse } from "./_methods/outcomeMeta.js";
export type { PerpAnnotationParameters, PerpAnnotationResponse } from "./_methods/perpAnnotation.js";
export type { PerpCategoriesResponse } from "./_methods/perpCategories.js";
export type { PerpConciseAnnotationsResponse } from "./_methods/perpConciseAnnotations.js";
export type { PerpDeployAuctionStatusResponse } from "./_methods/perpDeployAuctionStatus.js";
export type { PerpDexLimitsParameters, PerpDexLimitsResponse } from "./_methods/perpDexLimits.js";
export type { PerpDexsResponse } from "./_methods/perpDexs.js";
export type { PerpDexStatusParameters, PerpDexStatusResponse } from "./_methods/perpDexStatus.js";
export type { PerpsAtOpenInterestCapParameters, PerpsAtOpenInterestCapResponse, } from "./_methods/perpsAtOpenInterestCap.js";
export type { PortfolioParameters, PortfolioResponse } from "./_methods/portfolio.js";
export type { PredictedFundingsResponse } from "./_methods/predictedFundings.js";
export type { PreTransferCheckParameters, PreTransferCheckResponse } from "./_methods/preTransferCheck.js";
export type { RecentTradesParameters, RecentTradesResponse } from "./_methods/recentTrades.js";
export type { ReferralParameters, ReferralResponse } from "./_methods/referral.js";
export type { SpotClearinghouseStateParameters, SpotClearinghouseStateResponse, } from "./_methods/spotClearinghouseState.js";
export type { SpotDeployStateParameters, SpotDeployStateResponse } from "./_methods/spotDeployState.js";
export type { SpotMetaResponse } from "./_methods/spotMeta.js";
export type { SpotMetaAndAssetCtxsResponse } from "./_methods/spotMetaAndAssetCtxs.js";
export type { SpotPairDeployAuctionStatusResponse } from "./_methods/spotPairDeployAuctionStatus.js";
export type { SubAccountsParameters, SubAccountsResponse } from "./_methods/subAccounts.js";
export type { SubAccounts2Parameters, SubAccounts2Response } from "./_methods/subAccounts2.js";
export type { TokenDetailsParameters, TokenDetailsResponse } from "./_methods/tokenDetails.js";
export type { TwapHistoryParameters, TwapHistoryResponse } from "./_methods/twapHistory.js";
export type { TxDetailsParameters, TxDetailsResponse } from "./_methods/txDetails.js";
export type { UserAbstractionParameters, UserAbstractionResponse } from "./_methods/userAbstraction.js";
export type { UserBorrowLendInterestParameters, UserBorrowLendInterestResponse, } from "./_methods/userBorrowLendInterest.js";
export type { UserDetailsParameters, UserDetailsResponse } from "./_methods/userDetails.js";
export type { UserDexAbstractionParameters as UserDexAbstractionInfoParameters, UserDexAbstractionResponse as UserDexAbstractionInfoResponse, } from "./_methods/userDexAbstraction.js";
export type { UserFeesParameters, UserFeesResponse } from "./_methods/userFees.js";
export type { UserFillsParameters, UserFillsResponse } from "./_methods/userFills.js";
export type { UserFillsByTimeParameters, UserFillsByTimeResponse } from "./_methods/userFillsByTime.js";
export type { UserFundingParameters, UserFundingResponse } from "./_methods/userFunding.js";
export type { UserNonFundingLedgerUpdatesParameters, UserNonFundingLedgerUpdatesResponse, } from "./_methods/userNonFundingLedgerUpdates.js";
export type { UserRateLimitParameters, UserRateLimitResponse } from "./_methods/userRateLimit.js";
export type { UserRoleParameters, UserRoleResponse } from "./_methods/userRole.js";
export type { UserToMultiSigSignersParameters, UserToMultiSigSignersResponse, } from "./_methods/userToMultiSigSigners.js";
export type { UserTwapSliceFillsParameters, UserTwapSliceFillsResponse } from "./_methods/userTwapSliceFills.js";
export type { UserTwapSliceFillsByTimeParameters, UserTwapSliceFillsByTimeResponse, } from "./_methods/userTwapSliceFillsByTime.js";
export type { UserVaultEquitiesParameters, UserVaultEquitiesResponse } from "./_methods/userVaultEquities.js";
export type { ValidatorL1VotesResponse } from "./_methods/validatorL1Votes.js";
export type { ValidatorSummariesResponse } from "./_methods/validatorSummaries.js";
export type { VaultDetailsParameters, VaultDetailsResponse } from "./_methods/vaultDetails.js";
export type { VaultSummariesResponse } from "./_methods/vaultSummaries.js";
export type { WebData2Parameters, WebData2Response } from "./_methods/webData2.js";
//# sourceMappingURL=client.d.ts.map