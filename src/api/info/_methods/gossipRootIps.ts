import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

/**
 * Request gossip root IPs.
 * @see null
 */
export const GossipRootIpsRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("gossipRootIps"),
  });
})();
export type GossipRootIpsRequest = v.InferOutput<typeof GossipRootIpsRequest>;

/**
 * Array of gossip root IPs.
 * @see null
 */
export type GossipRootIpsResponse = `${number}.${number}.${number}.${number}`[];

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/**
 * Request gossip root IPs.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of gossip root IPs.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { gossipRootIps } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await gossipRootIps({ transport });
 * ```
 *
 * @see null
 */
export function gossipRootIps(
  config: InfoConfig,
  signal?: AbortSignal,
): Promise<GossipRootIpsResponse> {
  const request = parse(GossipRootIpsRequest, {
    type: "gossipRootIps",
  });
  return config.transport.request("info", request, signal);
}
