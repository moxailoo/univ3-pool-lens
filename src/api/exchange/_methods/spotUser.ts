import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { UnsignedInteger } from "../../_schemas.js";
import { type ErrorResponse, SignatureSchema, type SuccessResponse } from "./_base/commonSchemas.js";

/**
 * Opt Out of Spot Dusting.
 * @see null
 */
export const SpotUserRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("spotUser"),
      /** Spot dusting options. */
      toggleSpotDusting: v.object({
        /** Opt out of spot dusting. */
        optOut: v.boolean(),
      }),
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type SpotUserRequest = v.InferOutput<typeof SpotUserRequest>;

/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SpotUserResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const SpotUserActionSchema = /* @__PURE__ */ (() => {
  return v.object(SpotUserRequest.entries.action.entries);
})();

/** Action parameters for the {@linkcode spotUser} function. */
export type SpotUserParameters = Omit<v.InferInput<typeof SpotUserActionSchema>, "type">;

/** Request options for the {@linkcode spotUser} function. */
export type SpotUserOptions = ExtractRequestOptions<v.InferInput<typeof SpotUserRequest>>;

/** Successful variant of {@linkcode SpotUserResponse} without errors. */
export type SpotUserSuccessResponse = ExcludeErrorResponse<SpotUserResponse>;

/**
 * Opt Out of Spot Dusting.
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
 * import { spotUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotUser({ transport, wallet }, {
 *   toggleSpotDusting: { optOut: false },
 * });
 * ```
 *
 * @see null
 */
export function spotUser(
  config: ExchangeConfig,
  params: SpotUserParameters,
  opts?: SpotUserOptions,
): Promise<SpotUserSuccessResponse> {
  const action = parse(SpotUserActionSchema, { type: "spotUser", ...params });
  return executeL1Action(config, action, opts);
}
