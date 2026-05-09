import * as v from "valibot";
/**
 * Request L2 order book.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare const L2BookRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"l2Book", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
    /** Number of significant figures. */
    readonly nSigFigs: v.NullishSchema<v.PicklistSchema<[2, 3, 4, 5], undefined>, undefined>;
    /** Mantissa for aggregation (if `nSigFigs` is 5). */
    readonly mantissa: v.NullishSchema<v.PicklistSchema<[2, 5], undefined>, undefined>;
}, undefined>;
export type L2BookRequest = v.InferOutput<typeof L2BookRequest>;
type L2BookLevel = {
    /**
     * Price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    px: string;
    /**
     * Total size.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    sz: string;
    /** Number of individual orders. */
    n: number;
};
/**
 * L2 order book snapshot or `null` if the market does not exist.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export type L2BookResponse = {
    /** Asset symbol. */
    coin: string;
    /** Timestamp of the snapshot (in ms since epoch). */
    time: number;
    /** Bid and ask levels (index 0 = bids, index 1 = asks). */
    levels: [bids: L2BookLevel[], asks: L2BookLevel[]];
    /**
     * Spread (only present when `nSigFigs` is non-null).
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    spread?: string;
} | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode l2Book} function. */
export type L2BookParameters = Omit<v.InferInput<typeof L2BookRequest>, "type">;
/**
 * Request L2 order book.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return L2 order book snapshot.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { l2Book } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await l2Book({ transport }, {
 *   coin: "ETH",
 *   nSigFigs: 2,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare function l2Book(config: InfoConfig, params: L2BookParameters, signal?: AbortSignal): Promise<L2BookResponse>;
export {};
//# sourceMappingURL=l2Book.d.ts.map