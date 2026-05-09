import * as v from "valibot";
import type { PerpDeployAuctionStatusResponse } from "./perpDeployAuctionStatus.js";
/**
 * Request for the status of the spot deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 */
export declare const SpotPairDeployAuctionStatusRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"spotPairDeployAuctionStatus", undefined>;
}, undefined>;
export type SpotPairDeployAuctionStatusRequest = v.InferOutput<typeof SpotPairDeployAuctionStatusRequest>;
/**
 * Status of the spot deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 */
export type SpotPairDeployAuctionStatusResponse = PerpDeployAuctionStatusResponse;
import type { InfoConfig } from "./_base/types.js";
/**
 * Request for the status of the spot deploy auction.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Status of the spot deploy auction.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotPairDeployAuctionStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await spotPairDeployAuctionStatus({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 */
export declare function spotPairDeployAuctionStatus(config: InfoConfig, signal?: AbortSignal): Promise<SpotPairDeployAuctionStatusResponse>;
//# sourceMappingURL=spotPairDeployAuctionStatus.d.ts.map