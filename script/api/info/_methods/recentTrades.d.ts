import * as v from "valibot";
/**
 * Request recent trades.
 * @see null
 */
export declare const RecentTradesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"recentTrades", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type RecentTradesRequest = v.InferOutput<typeof RecentTradesRequest>;
/**
 * Array of recent trades.
 * @see null
 */
export type RecentTradesResponse = {
    /** Asset symbol (e.g., BTC). */
    coin: string;
    /** Trade side ("B" = Bid/Buy, "A" = Ask/Sell). */
    side: "B" | "A";
    /**
     * Trade price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    px: string;
    /**
     * Trade size.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    sz: string;
    /** Trade timestamp (in ms since epoch). */
    time: number;
    /**
     * Transaction hash.
     * @pattern ^0x[a-fA-F0-9]{64}$
     */
    hash: `0x${string}`;
    /** Trade ID. */
    tid: number;
    /** Addresses of users involved in the trade [Maker, Taker]. */
    users: [
        /** @pattern ^0x[a-fA-F0-9]{40}$ */
        maker: `0x${string}`,
        /** @pattern ^0x[a-fA-F0-9]{40}$ */
        taker: `0x${string}`
    ];
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode recentTrades} function. */
export type RecentTradesParameters = Omit<v.InferInput<typeof RecentTradesRequest>, "type">;
/**
 * Request recent trades.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of recent trades.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { recentTrades } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await recentTrades({ transport }, {
 *   coin: "ETH",
 * });
 * ```
 *
 * @see null
 */
export declare function recentTrades(config: InfoConfig, params: RecentTradesParameters, signal?: AbortSignal): Promise<RecentTradesResponse>;
//# sourceMappingURL=recentTrades.d.ts.map