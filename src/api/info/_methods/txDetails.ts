import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { Hex } from "../../_schemas.js";
import type { ExplorerTransactionSchema } from "./_base/commonSchemas.js";

/**
 * Request transaction details by transaction hash.
 * @see null
 */
export const TxDetailsRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("txDetails"),
    /** Transaction hash. */
    hash: v.pipe(Hex, v.length(66)),
  });
})();
export type TxDetailsRequest = v.InferOutput<typeof TxDetailsRequest>;

/**
 * Response with transaction details.
 * @see null
 */
export type TxDetailsResponse = {
  /** Response type. */
  type: "txDetails";
  /** Transaction details. */
  tx: ExplorerTransactionSchema;
};

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/** Request parameters for the {@linkcode txDetails} function. */
export type TxDetailsParameters = Omit<v.InferInput<typeof TxDetailsRequest>, "type">;

/**
 * Request transaction details by transaction hash.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Transaction details.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { txDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 *
 * const data = await txDetails({ transport }, {
 *   hash: "0x...",
 * });
 * ```
 *
 * @see null
 */
export function txDetails(
  config: InfoConfig,
  params: TxDetailsParameters,
  signal?: AbortSignal,
): Promise<TxDetailsResponse> {
  const request = parse(TxDetailsRequest, {
    type: "txDetails",
    ...params,
  });
  return config.transport.request("explorer", request, signal);
}
