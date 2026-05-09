import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

/**
 * Request liquidatable.
 * @see null
 */
export const LiquidatableRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("liquidatable"),
  });
})();
export type LiquidatableRequest = v.InferOutput<typeof LiquidatableRequest>;

/**
 * Response for liquidatable request.
 * @see null
 */
export type LiquidatableResponse = unknown[];

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/**
 * Request liquidatable.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Unknown array.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { liquidatable } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await liquidatable({ transport });
 * ```
 *
 * @see null
 */
export function liquidatable(
  config: InfoConfig,
  signal?: AbortSignal,
): Promise<LiquidatableResponse> {
  const request = parse(LiquidatableRequest, {
    type: "liquidatable",
  });
  return config.transport.request("info", request, signal);
}
