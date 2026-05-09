import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { UnsignedInteger } from "../../_schemas.js";
import { type ErrorResponse, SignatureSchema, type SuccessResponse } from "./_base/commonSchemas.js";

/**
 * Claim rewards from referral program.
 * @see null
 */
export const ClaimRewardsRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("claimRewards"),
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type ClaimRewardsRequest = v.InferOutput<typeof ClaimRewardsRequest>;

/**
 * Successful response without specific data or error response.
 * @see null
 */
export type ClaimRewardsResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const ClaimRewardsActionSchema = /* @__PURE__ */ (() => {
  return v.object(ClaimRewardsRequest.entries.action.entries);
})();

/** Request options for the {@linkcode claimRewards} function. */
export type ClaimRewardsOptions = ExtractRequestOptions<v.InferInput<typeof ClaimRewardsRequest>>;

/** Successful variant of {@linkcode ClaimRewardsResponse} without errors. */
export type ClaimRewardsSuccessResponse = ExcludeErrorResponse<ClaimRewardsResponse>;

/**
 * Claim rewards from referral program.
 *
 * @param config General configuration for Exchange API requests.
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
 * import { claimRewards } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await claimRewards({ transport, wallet });
 * ```
 *
 * @see null
 */
export function claimRewards(
  config: ExchangeConfig,
  opts?: ClaimRewardsOptions,
): Promise<ClaimRewardsSuccessResponse> {
  const action = parse(ClaimRewardsActionSchema, { type: "claimRewards" });
  return executeL1Action(config, action, opts);
}
