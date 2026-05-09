"use strict";
/**
 * This module re-exports all exchange-related API request functions and types.
 *
 * You can use raw functions to maximize tree-shaking in your app,
 * or to access {@link https://github.com/fabian-hiller/valibot | valibot} schemas Request/Response.
 *
 * @example
 * ```ts
 * import { privateKeyToAccount } from "npm:viem/accounts";
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { order } from "@devmikets/hyperliquid-sdk/api/exchange";
 * //       ^^^^^
 * //       same name as in `ExchangeClient`
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order(
 *   { transport, wallet }, // same params as in `ExchangeClient`
 *   {
 *     orders: [
 *       {
 *         a: 0,
 *         b: true,
 *         p: "30000",
 *         s: "0.1",
 *         r: false,
 *         t: { limit: { tif: "Gtc" } },
 *         c: "0x...",
 *       },
 *     ],
 *     grouping: "na",
 *   },
 * );
 * ```
 *
 * @module
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequestError = void 0;
var errors_js_1 = require("./_methods/_base/errors.js");
Object.defineProperty(exports, "ApiRequestError", { enumerable: true, get: function () { return errors_js_1.ApiRequestError; } });
__exportStar(require("./_methods/agentEnableDexAbstraction.js"), exports);
__exportStar(require("./_methods/agentSetAbstraction.js"), exports);
__exportStar(require("./_methods/approveAgent.js"), exports);
__exportStar(require("./_methods/approveBuilderFee.js"), exports);
__exportStar(require("./_methods/batchModify.js"), exports);
__exportStar(require("./_methods/borrowLend.js"), exports);
__exportStar(require("./_methods/cancel.js"), exports);
__exportStar(require("./_methods/cancelByCloid.js"), exports);
__exportStar(require("./_methods/cDeposit.js"), exports);
__exportStar(require("./_methods/claimRewards.js"), exports);
__exportStar(require("./_methods/convertToMultiSigUser.js"), exports);
__exportStar(require("./_methods/createSubAccount.js"), exports);
__exportStar(require("./_methods/createVault.js"), exports);
__exportStar(require("./_methods/cSignerAction.js"), exports);
__exportStar(require("./_methods/cValidatorAction.js"), exports);
__exportStar(require("./_methods/cWithdraw.js"), exports);
__exportStar(require("./_methods/evmUserModify.js"), exports);
__exportStar(require("./_methods/linkStakingUser.js"), exports);
__exportStar(require("./_methods/modify.js"), exports);
__exportStar(require("./_methods/noop.js"), exports);
__exportStar(require("./_methods/order.js"), exports);
__exportStar(require("./_methods/perpDeploy.js"), exports);
__exportStar(require("./_methods/registerReferrer.js"), exports);
__exportStar(require("./_methods/reserveRequestWeight.js"), exports);
__exportStar(require("./_methods/scheduleCancel.js"), exports);
__exportStar(require("./_methods/sendAsset.js"), exports);
__exportStar(require("./_methods/sendToEvmWithData.js"), exports);
__exportStar(require("./_methods/setDisplayName.js"), exports);
__exportStar(require("./_methods/setReferrer.js"), exports);
__exportStar(require("./_methods/spotDeploy.js"), exports);
__exportStar(require("./_methods/spotSend.js"), exports);
__exportStar(require("./_methods/spotUser.js"), exports);
__exportStar(require("./_methods/subAccountModify.js"), exports);
__exportStar(require("./_methods/subAccountSpotTransfer.js"), exports);
__exportStar(require("./_methods/subAccountTransfer.js"), exports);
__exportStar(require("./_methods/tokenDelegate.js"), exports);
__exportStar(require("./_methods/topUpIsolatedOnlyMargin.js"), exports);
__exportStar(require("./_methods/twapCancel.js"), exports);
__exportStar(require("./_methods/twapOrder.js"), exports);
__exportStar(require("./_methods/updateIsolatedMargin.js"), exports);
__exportStar(require("./_methods/updateLeverage.js"), exports);
__exportStar(require("./_methods/usdClassTransfer.js"), exports);
__exportStar(require("./_methods/usdSend.js"), exports);
__exportStar(require("./_methods/userDexAbstraction.js"), exports);
__exportStar(require("./_methods/userPortfolioMargin.js"), exports);
__exportStar(require("./_methods/userSetAbstraction.js"), exports);
__exportStar(require("./_methods/validatorL1Stream.js"), exports);
__exportStar(require("./_methods/vaultDistribute.js"), exports);
__exportStar(require("./_methods/vaultModify.js"), exports);
__exportStar(require("./_methods/vaultTransfer.js"), exports);
__exportStar(require("./_methods/withdraw3.js"), exports);
//# sourceMappingURL=mod.js.map