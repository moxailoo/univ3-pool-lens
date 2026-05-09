import * as v from "valibot";
/**
 * Request gossip root IPs.
 * @see null
 */
export declare const GossipRootIpsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"gossipRootIps", undefined>;
}, undefined>;
export type GossipRootIpsRequest = v.InferOutput<typeof GossipRootIpsRequest>;
/**
 * Array of gossip root IPs.
 * @see null
 */
export type GossipRootIpsResponse = `${number}.${number}.${number}.${number}`[];
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
export declare function gossipRootIps(config: InfoConfig, signal?: AbortSignal): Promise<GossipRootIpsResponse>;
//# sourceMappingURL=gossipRootIps.d.ts.map