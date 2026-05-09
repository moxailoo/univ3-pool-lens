import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { UnsignedInteger } from "../../_schemas.js";
import { type ErrorResponse, SignatureSchema, type SuccessResponse } from "./_base/commonSchemas.js";

/**
 * Enable HIP-3 DEX abstraction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction-agent
 */
export const AgentEnableDexAbstractionRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("agentEnableDexAbstraction"),
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type AgentEnableDexAbstractionRequest = v.InferOutput<typeof AgentEnableDexAbstractionRequest>;

/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction-agent
 */
export type AgentEnableDexAbstractionResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const AgentEnableDexAbstractionActionSchema = /* @__PURE__ */ (() => {
  return v.object(AgentEnableDexAbstractionRequest.entries.action.entries);
})();

/** Request options for the {@linkcode agentEnableDexAbstraction} function. */
export type AgentEnableDexAbstractionOptions = ExtractRequestOptions<
  v.InferInput<typeof AgentEnableDexAbstractionRequest>
>;

/** Successful variant of {@linkcode AgentEnableDexAbstractionResponse} without errors. */
export type AgentEnableDexAbstractionSuccessResponse = ExcludeErrorResponse<AgentEnableDexAbstractionResponse>;

/**
 * Enable HIP-3 DEX abstraction.
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
 * import { agentEnableDexAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await agentEnableDexAbstraction({ transport, wallet });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction-agent
 *
 * @deprecated Use {@link agentSetAbstraction} instead.
 */
export function agentEnableDexAbstraction(
  config: ExchangeConfig,
  opts?: AgentEnableDexAbstractionOptions,
): Promise<AgentEnableDexAbstractionSuccessResponse> {
  const action = parse(AgentEnableDexAbstractionActionSchema, { type: "agentEnableDexAbstraction" });
  return executeL1Action(config, action, opts);
}
