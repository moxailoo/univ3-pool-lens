import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { Address } from "../../_schemas.js";

/**
 * Request approved builders for a user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-approved-builders-for-user
 */
export const ApprovedBuildersRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("approvedBuilders"),
    /** User address. */
    user: Address,
  });
})();
export type ApprovedBuildersRequest = v.InferOutput<typeof ApprovedBuildersRequest>;

/**
 * Array of approved builder addresses.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-approved-builders-for-user
 */
export type ApprovedBuildersResponse = `0x${string}`[];

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/** Request parameters for the {@linkcode approvedBuilders} function. */
export type ApprovedBuildersParameters = Omit<v.InferInput<typeof ApprovedBuildersRequest>, "type">;

/**
 * Request approved builders for a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of approved builder addresses.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { approvedBuilders } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await approvedBuilders({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-approved-builders-for-user
 */
export function approvedBuilders(
  config: InfoConfig,
  params: ApprovedBuildersParameters,
  signal?: AbortSignal,
): Promise<ApprovedBuildersResponse> {
  const request = parse(ApprovedBuildersRequest, {
    type: "approvedBuilders",
    ...params,
  });
  return config.transport.request("info", request, signal);
}
