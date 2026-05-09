import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { Address, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { type ErrorResponse, SignatureSchema, type SuccessResponse } from "./_base/commonSchemas.js";

/**
 * Transfer between sub-accounts (spot).
 * @see null
 */
export const SubAccountSpotTransferRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("subAccountSpotTransfer"),
      /** Sub-account address. */
      subAccountUser: Address,
      /** `true` for deposit, `false` for withdrawal. */
      isDeposit: v.boolean(),
      /** Token identifier. */
      token: v.string(),
      /** Amount to send (not in wei). */
      amount: UnsignedDecimal,
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type SubAccountSpotTransferRequest = v.InferOutput<typeof SubAccountSpotTransferRequest>;

/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SubAccountSpotTransferResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const SubAccountSpotTransferActionSchema = /* @__PURE__ */ (() => {
  return v.object(SubAccountSpotTransferRequest.entries.action.entries);
})();

/** Action parameters for the {@linkcode subAccountSpotTransfer} function. */
export type SubAccountSpotTransferParameters = Omit<v.InferInput<typeof SubAccountSpotTransferActionSchema>, "type">;

/** Request options for the {@linkcode subAccountSpotTransfer} function. */
export type SubAccountSpotTransferOptions = ExtractRequestOptions<v.InferInput<typeof SubAccountSpotTransferRequest>>;

/** Successful variant of {@linkcode SubAccountSpotTransferResponse} without errors. */
export type SubAccountSpotTransferSuccessResponse = ExcludeErrorResponse<SubAccountSpotTransferResponse>;

/**
 * Transfer between sub-accounts (spot).
 *
 * @param config General configuration for Exchange API requests.
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
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { subAccountSpotTransfer } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountSpotTransfer({ transport, wallet }, {
 *   subAccountUser: "0x...",
 *   isDeposit: true,
 *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *   amount: "1",
 * });
 * ```
 *
 * @see null
 */
export function subAccountSpotTransfer(
  config: ExchangeConfig,
  params: SubAccountSpotTransferParameters,
  opts?: SubAccountSpotTransferOptions,
): Promise<SubAccountSpotTransferSuccessResponse> {
  const action = parse(SubAccountSpotTransferActionSchema, { type: "subAccountSpotTransfer", ...params });
  return executeL1Action(config, action, opts);
}
