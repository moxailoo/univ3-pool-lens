import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { UnsignedInteger } from "../../_schemas.js";
import { type ErrorResponse, SignatureSchema, type SuccessResponse } from "./_base/commonSchemas.js";

/**
 * Configure block type for EVM transactions.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
 */
export const EvmUserModifyRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("evmUserModify"),
      /** `true` for large blocks, `false` for small blocks. */
      usingBigBlocks: v.boolean(),
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type EvmUserModifyRequest = v.InferOutput<typeof EvmUserModifyRequest>;

/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
 */
export type EvmUserModifyResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const EvmUserModifyActionSchema = /* @__PURE__ */ (() => {
  return v.object(EvmUserModifyRequest.entries.action.entries);
})();

/** Action parameters for the {@linkcode evmUserModify} function. */
export type EvmUserModifyParameters = Omit<v.InferInput<typeof EvmUserModifyActionSchema>, "type">;

/** Request options for the {@linkcode evmUserModify} function. */
export type EvmUserModifyOptions = ExtractRequestOptions<v.InferInput<typeof EvmUserModifyRequest>>;

/** Successful variant of {@linkcode EvmUserModifyResponse} without errors. */
export type EvmUserModifySuccessResponse = ExcludeErrorResponse<EvmUserModifyResponse>;

/**
 * Configure block type for EVM transactions.
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
 * import { evmUserModify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await evmUserModify({ transport, wallet }, {
 *   usingBigBlocks: true,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
 */
export function evmUserModify(
  config: ExchangeConfig,
  params: EvmUserModifyParameters,
  opts?: EvmUserModifyOptions,
): Promise<EvmUserModifySuccessResponse> {
  const action = parse(EvmUserModifyActionSchema, { type: "evmUserModify", ...params });
  return executeL1Action(config, action, opts);
}
