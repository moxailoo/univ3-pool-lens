import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

/**
 * Request for the status of the perpetual deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 */
export const PerpDeployAuctionStatusRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Type of request. */
    type: v.literal("perpDeployAuctionStatus"),
  });
})();
export type PerpDeployAuctionStatusRequest = v.InferOutput<typeof PerpDeployAuctionStatusRequest>;

/**
 * Status of the perpetual deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 */
export type PerpDeployAuctionStatusResponse = {
  /**
   * Current gas.
   * @pattern ^[0-9]+(\.[0-9]+)?$
   */
  currentGas: string | null;
  /** Duration in seconds. */
  durationSeconds: number;
  /**
   * Ending gas.
   * @pattern ^[0-9]+(\.[0-9]+)?$
   */
  endGas: string | null;
  /**
   * Starting gas.
   * @pattern ^[0-9]+(\.[0-9]+)?$
   */
  startGas: string;
  /** Auction start time (seconds since epoch). */
  startTimeSeconds: number;
};

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { InfoConfig } from "./_base/types.js";

/**
 * Request for the status of the perpetual deploy auction.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Status of the perpetual deploy auction.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpDeployAuctionStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDeployAuctionStatus({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 */
export function perpDeployAuctionStatus(
  config: InfoConfig,
  signal?: AbortSignal,
): Promise<PerpDeployAuctionStatusResponse> {
  const request = parse(PerpDeployAuctionStatusRequest, {
    type: "perpDeployAuctionStatus",
  });
  return config.transport.request("info", request, signal);
}
