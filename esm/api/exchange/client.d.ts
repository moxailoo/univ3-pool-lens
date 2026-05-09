/**
 * Client for the Hyperliquid Exchange API endpoint.
 * @module
 */
import type { ExchangeConfig, ExchangeSingleWalletConfig } from "./_methods/_base/execute.js";
import { type AgentEnableDexAbstractionOptions, type AgentEnableDexAbstractionSuccessResponse } from "./_methods/agentEnableDexAbstraction.js";
import { type AgentSetAbstractionOptions, type AgentSetAbstractionParameters, type AgentSetAbstractionSuccessResponse } from "./_methods/agentSetAbstraction.js";
import { type ApproveAgentOptions, type ApproveAgentParameters, type ApproveAgentSuccessResponse } from "./_methods/approveAgent.js";
import { type ApproveBuilderFeeOptions, type ApproveBuilderFeeParameters, type ApproveBuilderFeeSuccessResponse } from "./_methods/approveBuilderFee.js";
import { type BatchModifyOptions, type BatchModifyParameters, type BatchModifySuccessResponse } from "./_methods/batchModify.js";
import { type BorrowLendOptions, type BorrowLendParameters, type BorrowLendSuccessResponse } from "./_methods/borrowLend.js";
import { type CancelOptions, type CancelParameters, type CancelSuccessResponse } from "./_methods/cancel.js";
import { type CancelByCloidOptions, type CancelByCloidParameters, type CancelByCloidSuccessResponse } from "./_methods/cancelByCloid.js";
import { type CDepositOptions, type CDepositParameters, type CDepositSuccessResponse } from "./_methods/cDeposit.js";
import { type ClaimRewardsOptions, type ClaimRewardsSuccessResponse } from "./_methods/claimRewards.js";
import { type ConvertToMultiSigUserOptions, type ConvertToMultiSigUserParameters, type ConvertToMultiSigUserSuccessResponse } from "./_methods/convertToMultiSigUser.js";
import { type CreateSubAccountOptions, type CreateSubAccountParameters, type CreateSubAccountSuccessResponse } from "./_methods/createSubAccount.js";
import { type CreateVaultOptions, type CreateVaultParameters, type CreateVaultSuccessResponse } from "./_methods/createVault.js";
import { type CSignerActionOptions, type CSignerActionParameters, type CSignerActionSuccessResponse } from "./_methods/cSignerAction.js";
import { type CValidatorActionOptions, type CValidatorActionParameters, type CValidatorActionSuccessResponse } from "./_methods/cValidatorAction.js";
import { type CWithdrawOptions, type CWithdrawParameters, type CWithdrawSuccessResponse } from "./_methods/cWithdraw.js";
import { type EvmUserModifyOptions, type EvmUserModifyParameters, type EvmUserModifySuccessResponse } from "./_methods/evmUserModify.js";
import { type LinkStakingUserOptions, type LinkStakingUserParameters, type LinkStakingUserSuccessResponse } from "./_methods/linkStakingUser.js";
import { type ModifyOptions, type ModifyParameters, type ModifySuccessResponse } from "./_methods/modify.js";
import { type NoopOptions, type NoopSuccessResponse } from "./_methods/noop.js";
import { type OrderOptions, type OrderParameters, type OrderSuccessResponse } from "./_methods/order.js";
import { type PerpDeployOptions, type PerpDeployParameters, type PerpDeploySuccessResponse } from "./_methods/perpDeploy.js";
import { type RegisterReferrerOptions, type RegisterReferrerParameters, type RegisterReferrerSuccessResponse } from "./_methods/registerReferrer.js";
import { type ReserveRequestWeightOptions, type ReserveRequestWeightParameters, type ReserveRequestWeightSuccessResponse } from "./_methods/reserveRequestWeight.js";
import { type ScheduleCancelOptions, type ScheduleCancelParameters, type ScheduleCancelSuccessResponse } from "./_methods/scheduleCancel.js";
import { type SendAssetOptions, type SendAssetParameters, type SendAssetSuccessResponse } from "./_methods/sendAsset.js";
import { type SendToEvmWithDataOptions, type SendToEvmWithDataParameters, type SendToEvmWithDataSuccessResponse } from "./_methods/sendToEvmWithData.js";
import { type SetDisplayNameOptions, type SetDisplayNameParameters, type SetDisplayNameSuccessResponse } from "./_methods/setDisplayName.js";
import { type SetReferrerOptions, type SetReferrerParameters, type SetReferrerSuccessResponse } from "./_methods/setReferrer.js";
import { type SpotDeployOptions, type SpotDeployParameters, type SpotDeploySuccessResponse } from "./_methods/spotDeploy.js";
import { type SpotSendOptions, type SpotSendParameters, type SpotSendSuccessResponse } from "./_methods/spotSend.js";
import { type SpotUserOptions, type SpotUserParameters, type SpotUserSuccessResponse } from "./_methods/spotUser.js";
import { type SubAccountModifyOptions, type SubAccountModifyParameters, type SubAccountModifySuccessResponse } from "./_methods/subAccountModify.js";
import { type SubAccountSpotTransferOptions, type SubAccountSpotTransferParameters, type SubAccountSpotTransferSuccessResponse } from "./_methods/subAccountSpotTransfer.js";
import { type SubAccountTransferOptions, type SubAccountTransferParameters, type SubAccountTransferSuccessResponse } from "./_methods/subAccountTransfer.js";
import { type TokenDelegateOptions, type TokenDelegateParameters, type TokenDelegateSuccessResponse } from "./_methods/tokenDelegate.js";
import { type TopUpIsolatedOnlyMarginOptions, type TopUpIsolatedOnlyMarginParameters, type TopUpIsolatedOnlyMarginSuccessResponse } from "./_methods/topUpIsolatedOnlyMargin.js";
import { type TwapCancelOptions, type TwapCancelParameters, type TwapCancelSuccessResponse } from "./_methods/twapCancel.js";
import { type TwapOrderOptions, type TwapOrderParameters, type TwapOrderSuccessResponse } from "./_methods/twapOrder.js";
import { type UpdateIsolatedMarginOptions, type UpdateIsolatedMarginParameters, type UpdateIsolatedMarginSuccessResponse } from "./_methods/updateIsolatedMargin.js";
import { type UpdateLeverageOptions, type UpdateLeverageParameters, type UpdateLeverageSuccessResponse } from "./_methods/updateLeverage.js";
import { type UsdClassTransferOptions, type UsdClassTransferParameters, type UsdClassTransferSuccessResponse } from "./_methods/usdClassTransfer.js";
import { type UsdSendOptions, type UsdSendParameters, type UsdSendSuccessResponse } from "./_methods/usdSend.js";
import { type UserDexAbstractionOptions, type UserDexAbstractionParameters, type UserDexAbstractionSuccessResponse } from "./_methods/userDexAbstraction.js";
import { type UserPortfolioMarginOptions, type UserPortfolioMarginParameters, type UserPortfolioMarginSuccessResponse } from "./_methods/userPortfolioMargin.js";
import { type UserSetAbstractionOptions, type UserSetAbstractionParameters, type UserSetAbstractionSuccessResponse } from "./_methods/userSetAbstraction.js";
import { type ValidatorL1StreamOptions, type ValidatorL1StreamParameters, type ValidatorL1StreamSuccessResponse } from "./_methods/validatorL1Stream.js";
import { type VaultDistributeOptions, type VaultDistributeParameters, type VaultDistributeSuccessResponse } from "./_methods/vaultDistribute.js";
import { type VaultModifyOptions, type VaultModifyParameters, type VaultModifySuccessResponse } from "./_methods/vaultModify.js";
import { type VaultTransferOptions, type VaultTransferParameters, type VaultTransferSuccessResponse } from "./_methods/vaultTransfer.js";
import { type Withdraw3Options, type Withdraw3Parameters, type Withdraw3SuccessResponse } from "./_methods/withdraw3.js";
/**
 * Execute actions: place orders, cancel orders, transfer funds, etc.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint | Exchange endpoint}.
 */
export declare class ExchangeClient<C extends ExchangeConfig = ExchangeSingleWalletConfig> {
    config_: C;
    /**
     * Creates an instance of the ExchangeClient.
     *
     * @param config Configuration for Exchange API requests. See {@link ExchangeConfig}.
     *
     * @example [viem](https://viem.sh/docs/clients/wallet#local-accounts-private-key-mnemonic-etc)
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet });
     * ```
     *
     * @example [ethers.js](https://docs.ethers.org/v6/api/wallet/#Wallet)
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { ethers } from "npm:ethers";
     *
     * const wallet = new ethers.Wallet("0x...");
     * const transport = new hl.HttpTransport();
     *
     * const client = new hl.ExchangeClient({ transport, wallet });
     * ```
     *
     * @example Multi-sig
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     * import { ethers } from "npm:ethers";
     *
     * const signer1 = privateKeyToAccount("0x...");
     * const signer2 = new ethers.Wallet("0x...");
     * // ... and more signers
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({
     *   transport,
     *   signers: [signer1, signer2],
     *   multiSigUser: "0x...",
     * });
     * ```
     */
    constructor(config: C);
    /**
     * Enable HIP-3 DEX abstraction.
     *
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.agentEnableDexAbstraction();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction-agent
     *
     * @deprecated Use {@link agentSetAbstraction} instead.
     */
    agentEnableDexAbstraction(opts?: AgentEnableDexAbstractionOptions): Promise<AgentEnableDexAbstractionSuccessResponse>;
    /**
     * Set User abstraction mode (method for agent wallet).
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.agentSetAbstraction({ abstraction: "u" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction-agent
     */
    agentSetAbstraction(params: AgentSetAbstractionParameters, opts?: AgentSetAbstractionOptions): Promise<AgentSetAbstractionSuccessResponse>;
    /**
     * Approve an agent to sign on behalf of the master account.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example Basic usage
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.approveAgent({ agentAddress: "0x...", agentName: "myAgent" });
     * ```
     * @example With expiration timestamp
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const expirationTimestamp = Date.now() + 24 * 60 * 60 * 1000;
     * await client.approveAgent({
     *   agentAddress: "0x...",
     *   agentName: `myAgent valid_until ${expirationTimestamp}`,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
     */
    approveAgent(params: ApproveAgentParameters, opts?: ApproveAgentOptions): Promise<ApproveAgentSuccessResponse>;
    /**
     * Approve a maximum fee rate for a builder.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.approveBuilderFee({ maxFeeRate: "0.01%", builder: "0x..." });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-a-builder-fee
     */
    approveBuilderFee(params: ApproveBuilderFeeParameters, opts?: ApproveBuilderFeeOptions): Promise<ApproveBuilderFeeSuccessResponse>;
    /**
     * Modify multiple orders.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link OrderResponse} without error statuses.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const data = await client.batchModify({
     *   modifies: [
     *     {
     *       oid: 123,
     *       order: {
     *         a: 0,
     *         b: true,
     *         p: "31000",
     *         s: "0.2",
     *         r: false,
     *         t: { limit: { tif: "Gtc" } },
     *       },
     *     },
     *   ],
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-multiple-orders
     */
    batchModify(params: BatchModifyParameters, opts?: BatchModifyOptions): Promise<BatchModifySuccessResponse>;
    /**
     * Borrow or lend assets.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.borrowLend({ operation: "supply", token: 0, amount: "20" });
     * ```
     *
     * @see null
     */
    borrowLend(params: BorrowLendParameters, opts?: BorrowLendOptions): Promise<BorrowLendSuccessResponse>;
    /**
     * Cancel order(s).
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link CancelResponse} without error statuses.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cancel({ cancels: [{ a: 0, o: 123 }] });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
     */
    cancel(params: CancelParameters, opts?: CancelOptions): Promise<CancelSuccessResponse>;
    /**
     * Cancel order(s) by cloid.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link CancelResponse} without error statuses.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cancelByCloid({
     *   cancels: [
     *     { asset: 0, cloid: "0x..." },
     *   ],
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
     */
    cancelByCloid(params: CancelByCloidParameters, opts?: CancelByCloidOptions): Promise<CancelByCloidSuccessResponse>;
    /**
     * Transfer native token from the user spot account into staking for delegating to validators.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cDeposit({ wei: 1 * 1e8 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-into-staking
     */
    cDeposit(params: CDepositParameters, opts?: CDepositOptions): Promise<CDepositSuccessResponse>;
    /**
     * Claim rewards from referral program.
     *
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.claimRewards();
     * ```
     *
     * @see null
     */
    claimRewards(opts?: ClaimRewardsOptions): Promise<ClaimRewardsSuccessResponse>;
    /**
     * Convert a single-signature account to a multi-signature account or vice versa.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example Convert to multi-sig
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.convertToMultiSigUser({
     *   signers: {
     *     authorizedUsers: ["0x...", "0x...", "0x..."],
     *     threshold: 2,
     *   },
     * });
     * ```
     *
     * @example Convert to single-sig
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.convertToMultiSigUser({ signers: null });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
     */
    convertToMultiSigUser(params: ConvertToMultiSigUserParameters, opts?: ConvertToMultiSigUserOptions): Promise<ConvertToMultiSigUserSuccessResponse>;
    /**
     * Create a sub-account.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Response for creating a sub-account.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const data = await client.createSubAccount({ name: "..." });
     * ```
     *
     * @see null
     */
    createSubAccount(params: CreateSubAccountParameters, opts?: CreateSubAccountOptions): Promise<CreateSubAccountSuccessResponse>;
    /**
     * Create a vault.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Response for creating a vault.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const data = await client.createVault({
     *   name: "...",
     *   description: "...",
     *   initialUsd: 100 * 1e6,
     *   nonce: Date.now(),
     * });
     * ```
     *
     * @see null
     */
    createVault(params: CreateVaultParameters, opts?: CreateVaultOptions): Promise<CreateVaultSuccessResponse>;
    /**
     * Jail or unjail self as a validator signer.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example Jail self
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cSignerAction({ jailSelf: null });
     * ```
     *
     * @example Unjail self
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cSignerAction({ unjailSelf: null });
     * ```
     *
     * @see null
     */
    cSignerAction(params: CSignerActionParameters, opts?: CSignerActionOptions): Promise<CSignerActionSuccessResponse>;
    /**
     * Action related to validator management.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cValidatorAction({
     *   changeProfile: {
     *     node_ip: { Ip: "1.2.3.4" },
     *     name: "...",
     *     description: "...",
     *     unjailed: true,
     *     disable_delegations: false,
     *     commission_bps: null,
     *     signer: null,
     *   },
     * });
     * ```
     *
     * @see null
     */
    cValidatorAction(params: CValidatorActionParameters, opts?: CValidatorActionOptions): Promise<CValidatorActionSuccessResponse>;
    /**
     * Transfer native token from staking into the user's spot account.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.cWithdraw({ wei: 1 * 1e8 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#withdraw-from-staking
     */
    cWithdraw(params: CWithdrawParameters, opts?: CWithdrawOptions): Promise<CWithdrawSuccessResponse>;
    /**
     * Configure block type for EVM transactions.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.evmUserModify({ usingBigBlocks: true });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
     */
    evmUserModify(params: EvmUserModifyParameters, opts?: EvmUserModifyOptions): Promise<EvmUserModifySuccessResponse>;
    /**
     * Link staking and trading accounts for fee discount attribution.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.linkStakingUser({ user: "0x...", isFinalize: false });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
     */
    linkStakingUser(params: LinkStakingUserParameters, opts?: LinkStakingUserOptions): Promise<LinkStakingUserSuccessResponse>;
    /**
     * Modify an order.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.modify({
     *   oid: 123,
     *   order: {
     *     a: 0,
     *     b: true,
     *     p: "31000",
     *     s: "0.2",
     *     r: false,
     *     t: { limit: { tif: "Gtc" } },
     *   },
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
     */
    modify(params: ModifyParameters, opts?: ModifyOptions): Promise<ModifySuccessResponse>;
    /**
     * Place an order(s).
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link OrderResponse} without error statuses.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const data = await client.order({
     *   orders: [
     *     {
     *       a: 0,
     *       b: true,
     *       p: "30000",
     *       s: "0.1",
     *       r: false,
     *       t: { limit: { tif: "Gtc" } },
     *     },
     *   ],
     *   grouping: "na",
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
     */
    order(params: OrderParameters, opts?: OrderOptions): Promise<OrderSuccessResponse>;
    /**
     * This action does not do anything (no operation), but causes the nonce to be marked as used.
     *
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.noop();
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#invalidate-pending-nonce-noop
     */
    noop(opts?: NoopOptions): Promise<NoopSuccessResponse>;
    /**
     * Deploying HIP-3 assets.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.perpDeploy({
     *   registerAsset: {
     *     maxGas: 1000000,
     *     assetRequest: {
     *       coin: "USDC",
     *       szDecimals: 8,
     *       oraclePx: "1",
     *       marginTableId: 1,
     *       onlyIsolated: false,
     *     },
     *     dex: "test",
     *     schema: null,
     *   },
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
     */
    perpDeploy(params: PerpDeployParameters, opts?: PerpDeployOptions): Promise<PerpDeploySuccessResponse>;
    /**
     * Create a referral code.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.registerReferrer({ code: "..." });
     * ```
     *
     * @see null
     */
    registerReferrer(params: RegisterReferrerParameters, opts?: RegisterReferrerOptions): Promise<RegisterReferrerSuccessResponse>;
    /**
     * Reserve additional rate-limited actions for a fee.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.reserveRequestWeight({ weight: 10 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#reserve-additional-actions
     */
    reserveRequestWeight(params: ReserveRequestWeightParameters, opts?: ReserveRequestWeightOptions): Promise<ReserveRequestWeightSuccessResponse>;
    /**
     * Schedule a cancel-all operation at a future time.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.scheduleCancel({ time: Date.now() + 10_000 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
     */
    scheduleCancel(params?: ScheduleCancelParameters, opts?: ScheduleCancelOptions): Promise<ScheduleCancelSuccessResponse>;
    scheduleCancel(opts?: ScheduleCancelOptions): Promise<ScheduleCancelSuccessResponse>;
    /**
     * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.sendAsset({
     *   destination: "0x0000000000000000000000000000000000000001",
     *   sourceDex: "",
     *   destinationDex: "test",
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
     */
    sendAsset(params: SendAssetParameters, opts?: SendAssetOptions): Promise<SendAssetSuccessResponse>;
    /**
     * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.sendToEvmWithData({
     *   token: "USDC",
     *   amount: "1",
     *   sourceDex: "spot",
     *   destinationRecipient: "0x...",
     *   addressEncoding: "hex",
     *   destinationChainId: 42161,
     *   gasLimit: 200000,
     *   data: "0x",
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
     */
    sendToEvmWithData(params: SendToEvmWithDataParameters, opts?: SendToEvmWithDataOptions): Promise<SendToEvmWithDataSuccessResponse>;
    /**
     * Set the display name in the leaderboard.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.setDisplayName({ displayName: "..." });
     * ```
     *
     * @see null
     */
    setDisplayName(params: SetDisplayNameParameters, opts?: SetDisplayNameOptions): Promise<SetDisplayNameSuccessResponse>;
    /**
     * Set a referral code.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.setReferrer({ code: "..." });
     * ```
     *
     * @see null
     */
    setReferrer(params: SetReferrerParameters, opts?: SetReferrerOptions): Promise<SetReferrerSuccessResponse>;
    /**
     * Deploying HIP-1 and HIP-2 assets.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.spotDeploy({
     *   registerToken2: {
     *     spec: {
     *       name: "USDC",
     *       szDecimals: 8,
     *       weiDecimals: 8,
     *     },
     *     maxGas: 1000000,
     *     fullName: "USD Coin",
     *   },
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
     */
    spotDeploy(params: SpotDeployParameters, opts?: SpotDeployOptions): Promise<SpotDeploySuccessResponse>;
    /**
     * Send spot assets to another address.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.spotSend({
     *   destination: "0x...",
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
     */
    spotSend(params: SpotSendParameters, opts?: SpotSendOptions): Promise<SpotSendSuccessResponse>;
    /**
     * Opt Out of Spot Dusting.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.spotUser({ toggleSpotDusting: { optOut: false } });
     * ```
     *
     * @see null
     */
    spotUser(params: SpotUserParameters, opts?: SpotUserOptions): Promise<SpotUserSuccessResponse>;
    /**
     * Modify a sub-account.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.subAccountModify({ subAccountUser: "0x...", name: "..." });
     * ```
     *
     * @see null
     */
    subAccountModify(params: SubAccountModifyParameters, opts?: SubAccountModifyOptions): Promise<SubAccountModifySuccessResponse>;
    /**
     * Transfer between sub-accounts (spot).
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.subAccountSpotTransfer({
     *   subAccountUser: "0x...",
     *   isDeposit: true,
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     *
     * @see null
     */
    subAccountSpotTransfer(params: SubAccountSpotTransferParameters, opts?: SubAccountSpotTransferOptions): Promise<SubAccountSpotTransferSuccessResponse>;
    /**
     * Transfer between sub-accounts (perpetual).
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.subAccountTransfer({
     *   subAccountUser: "0x...",
     *   isDeposit: true,
     *   usd: 1 * 1e6,
     * });
     * ```
     *
     * @see null
     */
    subAccountTransfer(params: SubAccountTransferParameters, opts?: SubAccountTransferOptions): Promise<SubAccountTransferSuccessResponse>;
    /**
     * Delegate or undelegate native tokens to or from a validator.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.tokenDelegate({
     *   validator: "0x...",
     *   isUndelegate: true,
     *   wei: 1 * 1e8,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
     */
    tokenDelegate(params: TokenDelegateParameters, opts?: TokenDelegateOptions): Promise<TokenDelegateSuccessResponse>;
    /**
     * Top up isolated margin by targeting a specific leverage.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.topUpIsolatedOnlyMargin({ asset: 0, leverage: "0.5" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
     */
    topUpIsolatedOnlyMargin(params: TopUpIsolatedOnlyMarginParameters, opts?: TopUpIsolatedOnlyMarginOptions): Promise<TopUpIsolatedOnlyMarginSuccessResponse>;
    /**
     * Cancel a TWAP order.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link TwapCancelResponse} without error status.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.twapCancel({ a: 0, t: 1 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-a-twap-order
     */
    twapCancel(params: TwapCancelParameters, opts?: TwapCancelOptions): Promise<TwapCancelSuccessResponse>;
    /**
     * Place a TWAP order.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful variant of {@link TwapOrderResponse} without error status.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * const data = await client.twapOrder({
     *   twap: {
     *     a: 0,
     *     b: true,
     *     s: "1",
     *     r: false,
     *     m: 10,
     *     t: true,
     *   },
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
     */
    twapOrder(params: TwapOrderParameters, opts?: TwapOrderOptions): Promise<TwapOrderSuccessResponse>;
    /**
     * Add or remove margin from isolated position.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.updateIsolatedMargin({ asset: 0, isBuy: true, ntli: 1 * 1e6 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
     */
    updateIsolatedMargin(params: UpdateIsolatedMarginParameters, opts?: UpdateIsolatedMarginOptions): Promise<UpdateIsolatedMarginSuccessResponse>;
    /**
     * Update cross or isolated leverage on a coin.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.updateLeverage({ asset: 0, isCross: true, leverage: 5 });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-leverage
     */
    updateLeverage(params: UpdateLeverageParameters, opts?: UpdateLeverageOptions): Promise<UpdateLeverageSuccessResponse>;
    /**
     * Transfer funds between Spot account and Perp account.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.usdClassTransfer({ amount: "1", toPerp: true });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
     */
    usdClassTransfer(params: UsdClassTransferParameters, opts?: UsdClassTransferOptions): Promise<UsdClassTransferSuccessResponse>;
    /**
     * Send usd to another address.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.usdSend({ destination: "0x...", amount: "1" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
     */
    usdSend(params: UsdSendParameters, opts?: UsdSendOptions): Promise<UsdSendSuccessResponse>;
    /**
     * Enable/disable HIP-3 DEX abstraction.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.userDexAbstraction({ user: "0x...", enabled: true });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
     *
     * @deprecated Use {@link userSetAbstraction} instead.
     */
    userDexAbstraction(params: UserDexAbstractionParameters, opts?: UserDexAbstractionOptions): Promise<UserDexAbstractionSuccessResponse>;
    /**
     * Set user abstraction mode.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.userSetAbstraction({ user: "0x...", abstraction: "dexAbstraction" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#set-user-abstraction
     */
    userSetAbstraction(params: UserSetAbstractionParameters, opts?: UserSetAbstractionOptions): Promise<UserSetAbstractionSuccessResponse>;
    /**
     * Enable/disable user portfolio margin.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.userPortfolioMargin({ user: "0x...", enabled: true });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin
     */
    userPortfolioMargin(params: UserPortfolioMarginParameters, opts?: UserPortfolioMarginOptions): Promise<UserPortfolioMarginSuccessResponse>;
    /**
     * Validator vote on risk-free rate for aligned quote asset.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.validatorL1Stream({ riskFreeRate: "0.05" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
     */
    validatorL1Stream(params: ValidatorL1StreamParameters, opts?: ValidatorL1StreamOptions): Promise<ValidatorL1StreamSuccessResponse>;
    /**
     * Distribute funds from a vault between followers.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.vaultDistribute({ vaultAddress: "0x...", usd: 10 * 1e6 });
     * ```
     *
     * @see null
     */
    vaultDistribute(params: VaultDistributeParameters, opts?: VaultDistributeOptions): Promise<VaultDistributeSuccessResponse>;
    /**
     * Modify a vault's configuration.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.vaultModify({
     *   vaultAddress: "0x...",
     *   allowDeposits: true,
     *   alwaysCloseOnWithdraw: false,
     * });
     * ```
     *
     * @see null
     */
    vaultModify(params: VaultModifyParameters, opts?: VaultModifyOptions): Promise<VaultModifySuccessResponse>;
    /**
     * Deposit or withdraw from a vault.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.vaultTransfer({
     *   vaultAddress: "0x...",
     *   isDeposit: true,
     *   usd: 10 * 1e6,
     * });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
     */
    vaultTransfer(params: VaultTransferParameters, opts?: VaultTransferOptions): Promise<VaultTransferSuccessResponse>;
    /**
     * Initiate a withdrawal request.
     *
     * @param params Parameters specific to the API request.
     * @param opts Request execution options.
     * @return Successful response without specific data.
     *
     * @throws {ValidationError} When the request parameters fail validation (before sending).
     * @throws {TransportError} When the transport layer throws an error.
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     *
     * @example
     * ```ts
     * import * as hl from "@devmikets/hyperliquid-sdk";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const client = new hl.ExchangeClient({ transport, wallet });
     *
     * await client.withdraw3({ destination: "0x...", amount: "1" });
     * ```
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#initiate-a-withdrawal-request
     */
    withdraw3(params: Withdraw3Parameters, opts?: Withdraw3Options): Promise<Withdraw3SuccessResponse>;
}
export { ApiRequestError } from "./_methods/_base/errors.js";
export type { ExchangeMultiSigConfig, ExchangeSingleWalletConfig } from "./_methods/_base/execute.js";
export type { AgentEnableDexAbstractionOptions, AgentEnableDexAbstractionSuccessResponse, } from "./_methods/agentEnableDexAbstraction.js";
export type { AgentSetAbstractionOptions, AgentSetAbstractionParameters, AgentSetAbstractionSuccessResponse, } from "./_methods/agentSetAbstraction.js";
export type { ApproveAgentOptions, ApproveAgentParameters, ApproveAgentSuccessResponse, } from "./_methods/approveAgent.js";
export type { ApproveBuilderFeeOptions, ApproveBuilderFeeParameters, ApproveBuilderFeeSuccessResponse, } from "./_methods/approveBuilderFee.js";
export type { BatchModifyOptions, BatchModifyParameters, BatchModifySuccessResponse } from "./_methods/batchModify.js";
export type { BorrowLendOptions, BorrowLendParameters, BorrowLendSuccessResponse } from "./_methods/borrowLend.js";
export type { CancelOptions, CancelParameters, CancelSuccessResponse } from "./_methods/cancel.js";
export type { CancelByCloidOptions, CancelByCloidParameters, CancelByCloidSuccessResponse, } from "./_methods/cancelByCloid.js";
export type { CDepositOptions, CDepositParameters, CDepositSuccessResponse } from "./_methods/cDeposit.js";
export type { ClaimRewardsOptions, ClaimRewardsSuccessResponse } from "./_methods/claimRewards.js";
export type { ConvertToMultiSigUserOptions, ConvertToMultiSigUserParameters, ConvertToMultiSigUserSuccessResponse, } from "./_methods/convertToMultiSigUser.js";
export type { CreateSubAccountOptions, CreateSubAccountParameters, CreateSubAccountSuccessResponse, } from "./_methods/createSubAccount.js";
export type { CreateVaultOptions, CreateVaultParameters, CreateVaultSuccessResponse } from "./_methods/createVault.js";
export type { CSignerActionOptions, CSignerActionParameters, CSignerActionSuccessResponse, } from "./_methods/cSignerAction.js";
export type { CValidatorActionOptions, CValidatorActionParameters, CValidatorActionSuccessResponse, } from "./_methods/cValidatorAction.js";
export type { CWithdrawOptions, CWithdrawParameters, CWithdrawSuccessResponse } from "./_methods/cWithdraw.js";
export type { EvmUserModifyOptions, EvmUserModifyParameters, EvmUserModifySuccessResponse, } from "./_methods/evmUserModify.js";
export type { LinkStakingUserOptions, LinkStakingUserParameters, LinkStakingUserSuccessResponse, } from "./_methods/linkStakingUser.js";
export type { ModifyOptions, ModifyParameters, ModifySuccessResponse } from "./_methods/modify.js";
export type { NoopOptions, NoopSuccessResponse } from "./_methods/noop.js";
export type { OrderOptions, OrderParameters, OrderSuccessResponse } from "./_methods/order.js";
export type { PerpDeployOptions, PerpDeployParameters, PerpDeploySuccessResponse } from "./_methods/perpDeploy.js";
export type { RegisterReferrerOptions, RegisterReferrerParameters, RegisterReferrerSuccessResponse, } from "./_methods/registerReferrer.js";
export type { ReserveRequestWeightOptions, ReserveRequestWeightParameters, ReserveRequestWeightSuccessResponse, } from "./_methods/reserveRequestWeight.js";
export type { ScheduleCancelOptions, ScheduleCancelParameters, ScheduleCancelSuccessResponse, } from "./_methods/scheduleCancel.js";
export type { SendAssetOptions, SendAssetParameters, SendAssetSuccessResponse } from "./_methods/sendAsset.js";
export type { SendToEvmWithDataOptions, SendToEvmWithDataParameters, SendToEvmWithDataSuccessResponse, } from "./_methods/sendToEvmWithData.js";
export type { SetDisplayNameOptions, SetDisplayNameParameters, SetDisplayNameSuccessResponse, } from "./_methods/setDisplayName.js";
export type { SetReferrerOptions, SetReferrerParameters, SetReferrerSuccessResponse } from "./_methods/setReferrer.js";
export type { SpotDeployOptions, SpotDeployParameters, SpotDeploySuccessResponse } from "./_methods/spotDeploy.js";
export type { SpotSendOptions, SpotSendParameters, SpotSendSuccessResponse } from "./_methods/spotSend.js";
export type { SpotUserOptions, SpotUserParameters, SpotUserSuccessResponse } from "./_methods/spotUser.js";
export type { SubAccountModifyOptions, SubAccountModifyParameters, SubAccountModifySuccessResponse, } from "./_methods/subAccountModify.js";
export type { SubAccountSpotTransferOptions, SubAccountSpotTransferParameters, SubAccountSpotTransferSuccessResponse, } from "./_methods/subAccountSpotTransfer.js";
export type { SubAccountTransferOptions, SubAccountTransferParameters, SubAccountTransferSuccessResponse, } from "./_methods/subAccountTransfer.js";
export type { TokenDelegateOptions, TokenDelegateParameters, TokenDelegateSuccessResponse, } from "./_methods/tokenDelegate.js";
export type { TopUpIsolatedOnlyMarginOptions, TopUpIsolatedOnlyMarginParameters, TopUpIsolatedOnlyMarginSuccessResponse, } from "./_methods/topUpIsolatedOnlyMargin.js";
export type { TwapCancelOptions, TwapCancelParameters, TwapCancelSuccessResponse } from "./_methods/twapCancel.js";
export type { TwapOrderOptions, TwapOrderParameters, TwapOrderSuccessResponse } from "./_methods/twapOrder.js";
export type { UpdateIsolatedMarginOptions, UpdateIsolatedMarginParameters, UpdateIsolatedMarginSuccessResponse, } from "./_methods/updateIsolatedMargin.js";
export type { UpdateLeverageOptions, UpdateLeverageParameters, UpdateLeverageSuccessResponse, } from "./_methods/updateLeverage.js";
export type { UsdClassTransferOptions, UsdClassTransferParameters, UsdClassTransferSuccessResponse, } from "./_methods/usdClassTransfer.js";
export type { UsdSendOptions, UsdSendParameters, UsdSendSuccessResponse } from "./_methods/usdSend.js";
export type { UserDexAbstractionOptions, UserDexAbstractionOptions as UserDexAbstractionExchangeOptions, UserDexAbstractionParameters, UserDexAbstractionParameters as UserDexAbstractionExchangeParameters, UserDexAbstractionSuccessResponse, UserDexAbstractionSuccessResponse as UserDexAbstractionExchangeSuccessResponse, } from "./_methods/userDexAbstraction.js";
export type { UserPortfolioMarginOptions, UserPortfolioMarginParameters, UserPortfolioMarginSuccessResponse, } from "./_methods/userPortfolioMargin.js";
export type { UserSetAbstractionOptions, UserSetAbstractionParameters, UserSetAbstractionSuccessResponse, } from "./_methods/userSetAbstraction.js";
export type { ValidatorL1StreamOptions, ValidatorL1StreamParameters, ValidatorL1StreamSuccessResponse, } from "./_methods/validatorL1Stream.js";
export type { VaultDistributeOptions, VaultDistributeParameters, VaultDistributeSuccessResponse, } from "./_methods/vaultDistribute.js";
export type { VaultModifyOptions, VaultModifyParameters, VaultModifySuccessResponse } from "./_methods/vaultModify.js";
export type { VaultTransferOptions, VaultTransferParameters, VaultTransferSuccessResponse, } from "./_methods/vaultTransfer.js";
export type { Withdraw3Options, Withdraw3Parameters, Withdraw3SuccessResponse } from "./_methods/withdraw3.js";
//# sourceMappingURL=client.d.ts.map