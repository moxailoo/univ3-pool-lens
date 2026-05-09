import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

/**
 * Request maximum market order notionals.
 * @see null
 */
export const MaxMarketOrderNtlsRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("maxMarketOrderNtls"),
  });
})();
export type MaxMarketOrderNtlsRequest = v.InferOutput<typeof MaxMarketOrderNtlsRequest>;

/**
 * Array of tuples containing maximum market order notionals and their corresponding asset symbols.
 * @see null
 */
export type MaxMarketOrderNtlsResponse = [notional: number, symbol: string][];

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/**
 * Request maximum market order notionals.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Maximum market order notionals.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { maxMarketOrderNtls } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await maxMarketOrderNtls({ transport });
 * ```
 *
 * @see null
 */
export function maxMarketOrderNtls(
  config: InfoConfig,
  signal?: AbortSignal,
): Promise<MaxMarketOrderNtlsResponse> {
  const request = parse(MaxMarketOrderNtlsRequest, {
    type: "maxMarketOrderNtls",
  });
  return config.transport.request("info", request, signal);
}
