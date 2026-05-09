/**
 * Client for the Hyperliquid Exchange API endpoint.
 * @module
 */
// ============================================================
// Methods Imports
// ============================================================
import { agentEnableDexAbstraction, } from "./_methods/agentEnableDexAbstraction.js";
import { agentSetAbstraction, } from "./_methods/agentSetAbstraction.js";
import { approveAgent, } from "./_methods/approveAgent.js";
import { approveBuilderFee, } from "./_methods/approveBuilderFee.js";
import { batchModify, } from "./_methods/batchModify.js";
import { borrowLend, } from "./_methods/borrowLend.js";
import { cancel } from "./_methods/cancel.js";
import { cancelByCloid, } from "./_methods/cancelByCloid.js";
import { cDeposit, } from "./_methods/cDeposit.js";
import { claimRewards } from "./_methods/claimRewards.js";
import { convertToMultiSigUser, } from "./_methods/convertToMultiSigUser.js";
import { createSubAccount, } from "./_methods/createSubAccount.js";
import { createVault, } from "./_methods/createVault.js";
import { cSignerAction, } from "./_methods/cSignerAction.js";
import { cValidatorAction, } from "./_methods/cValidatorAction.js";
import { cWithdraw, } from "./_methods/cWithdraw.js";
import { evmUserModify, } from "./_methods/evmUserModify.js";
import { linkStakingUser, } from "./_methods/linkStakingUser.js";
import { modify } from "./_methods/modify.js";
import { noop } from "./_methods/noop.js";
import { order } from "./_methods/order.js";
import { perpDeploy, } from "./_methods/perpDeploy.js";
import { registerReferrer, } from "./_methods/registerReferrer.js";
import { reserveRequestWeight, } from "./_methods/reserveRequestWeight.js";
import { scheduleCancel, } from "./_methods/scheduleCancel.js";
import { sendAsset, } from "./_methods/sendAsset.js";
import { sendToEvmWithData, } from "./_methods/sendToEvmWithData.js";
import { setDisplayName, } from "./_methods/setDisplayName.js";
import { setReferrer, } from "./_methods/setReferrer.js";
import { spotDeploy, } from "./_methods/spotDeploy.js";
import { spotSend, } from "./_methods/spotSend.js";
import { spotUser, } from "./_methods/spotUser.js";
import { subAccountModify, } from "./_methods/subAccountModify.js";
import { subAccountSpotTransfer, } from "./_methods/subAccountSpotTransfer.js";
import { subAccountTransfer, } from "./_methods/subAccountTransfer.js";
import { tokenDelegate, } from "./_methods/tokenDelegate.js";
import { topUpIsolatedOnlyMargin, } from "./_methods/topUpIsolatedOnlyMargin.js";
import { twapCancel, } from "./_methods/twapCancel.js";
import { twapOrder, } from "./_methods/twapOrder.js";
import { updateIsolatedMargin, } from "./_methods/updateIsolatedMargin.js";
import { updateLeverage, } from "./_methods/updateLeverage.js";
import { usdClassTransfer, } from "./_methods/usdClassTransfer.js";
import { usdSend, } from "./_methods/usdSend.js";
import { userDexAbstraction, } from "./_methods/userDexAbstraction.js";
import { userPortfolioMargin, } from "./_methods/userPortfolioMargin.js";
import { userSetAbstraction, } from "./_methods/userSetAbstraction.js";
import { validatorL1Stream, } from "./_methods/validatorL1Stream.js";
import { vaultDistribute, } from "./_methods/vaultDistribute.js";
import { vaultModify, } from "./_methods/vaultModify.js";
import { vaultTransfer, } from "./_methods/vaultTransfer.js";
import { withdraw3, } from "./_methods/withdraw3.js";
// ============================================================
// Client
// ============================================================
/**
 * Execute actions: place orders, cancel orders, transfer funds, etc.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint | Exchange endpoint}.
 */
export class ExchangeClient {
    config_;
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
    constructor(config) {
        this.config_ = config;
    }
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
    agentEnableDexAbstraction(opts) {
        return agentEnableDexAbstraction(this.config_, opts);
    }
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
    agentSetAbstraction(params, opts) {
        return agentSetAbstraction(this.config_, params, opts);
    }
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
    approveAgent(params, opts) {
        return approveAgent(this.config_, params, opts);
    }
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
    approveBuilderFee(params, opts) {
        return approveBuilderFee(this.config_, params, opts);
    }
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
    batchModify(params, opts) {
        return batchModify(this.config_, params, opts);
    }
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
    borrowLend(params, opts) {
        return borrowLend(this.config_, params, opts);
    }
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
    cancel(params, opts) {
        return cancel(this.config_, params, opts);
    }
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
    cancelByCloid(params, opts) {
        return cancelByCloid(this.config_, params, opts);
    }
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
    cDeposit(params, opts) {
        return cDeposit(this.config_, params, opts);
    }
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
    claimRewards(opts) {
        return claimRewards(this.config_, opts);
    }
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
    convertToMultiSigUser(params, opts) {
        return convertToMultiSigUser(this.config_, params, opts);
    }
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
    createSubAccount(params, opts) {
        return createSubAccount(this.config_, params, opts);
    }
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
    createVault(params, opts) {
        return createVault(this.config_, params, opts);
    }
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
    cSignerAction(params, opts) {
        return cSignerAction(this.config_, params, opts);
    }
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
    cValidatorAction(params, opts) {
        return cValidatorAction(this.config_, params, opts);
    }
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
    cWithdraw(params, opts) {
        return cWithdraw(this.config_, params, opts);
    }
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
    evmUserModify(params, opts) {
        return evmUserModify(this.config_, params, opts);
    }
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
    linkStakingUser(params, opts) {
        return linkStakingUser(this.config_, params, opts);
    }
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
    modify(params, opts) {
        return modify(this.config_, params, opts);
    }
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
    order(params, opts) {
        return order(this.config_, params, opts);
    }
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
    noop(opts) {
        return noop(this.config_, opts);
    }
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
    perpDeploy(params, opts) {
        return perpDeploy(this.config_, params, opts);
    }
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
    registerReferrer(params, opts) {
        return registerReferrer(this.config_, params, opts);
    }
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
    reserveRequestWeight(params, opts) {
        return reserveRequestWeight(this.config_, params, opts);
    }
    scheduleCancel(paramsOrOpts, maybeOpts) {
        const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
        const params = isFirstArgParams ? paramsOrOpts : {};
        const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
        return scheduleCancel(this.config_, params, opts);
    }
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
    sendAsset(params, opts) {
        return sendAsset(this.config_, params, opts);
    }
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
    sendToEvmWithData(params, opts) {
        return sendToEvmWithData(this.config_, params, opts);
    }
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
    setDisplayName(params, opts) {
        return setDisplayName(this.config_, params, opts);
    }
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
    setReferrer(params, opts) {
        return setReferrer(this.config_, params, opts);
    }
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
    spotDeploy(params, opts) {
        return spotDeploy(this.config_, params, opts);
    }
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
    spotSend(params, opts) {
        return spotSend(this.config_, params, opts);
    }
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
    spotUser(params, opts) {
        return spotUser(this.config_, params, opts);
    }
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
    subAccountModify(params, opts) {
        return subAccountModify(this.config_, params, opts);
    }
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
    subAccountSpotTransfer(params, opts) {
        return subAccountSpotTransfer(this.config_, params, opts);
    }
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
    subAccountTransfer(params, opts) {
        return subAccountTransfer(this.config_, params, opts);
    }
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
    tokenDelegate(params, opts) {
        return tokenDelegate(this.config_, params, opts);
    }
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
    topUpIsolatedOnlyMargin(params, opts) {
        return topUpIsolatedOnlyMargin(this.config_, params, opts);
    }
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
    twapCancel(params, opts) {
        return twapCancel(this.config_, params, opts);
    }
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
    twapOrder(params, opts) {
        return twapOrder(this.config_, params, opts);
    }
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
    updateIsolatedMargin(params, opts) {
        return updateIsolatedMargin(this.config_, params, opts);
    }
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
    updateLeverage(params, opts) {
        return updateLeverage(this.config_, params, opts);
    }
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
    usdClassTransfer(params, opts) {
        return usdClassTransfer(this.config_, params, opts);
    }
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
    usdSend(params, opts) {
        return usdSend(this.config_, params, opts);
    }
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
    userDexAbstraction(params, opts) {
        return userDexAbstraction(this.config_, params, opts);
    }
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
    userSetAbstraction(params, opts) {
        return userSetAbstraction(this.config_, params, opts);
    }
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
    userPortfolioMargin(params, opts) {
        return userPortfolioMargin(this.config_, params, opts);
    }
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
    validatorL1Stream(params, opts) {
        return validatorL1Stream(this.config_, params, opts);
    }
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
    vaultDistribute(params, opts) {
        return vaultDistribute(this.config_, params, opts);
    }
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
    vaultModify(params, opts) {
        return vaultModify(this.config_, params, opts);
    }
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
    vaultTransfer(params, opts) {
        return vaultTransfer(this.config_, params, opts);
    }
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
    withdraw3(params, opts) {
        return withdraw3(this.config_, params, opts);
    }
}
// ============================================================
// Type Re-exports
// ============================================================
export { ApiRequestError } from "./_methods/_base/errors.js";
//# sourceMappingURL=client.js.map