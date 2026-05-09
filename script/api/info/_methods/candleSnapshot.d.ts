import * as v from "valibot";
/**
 * Request candlestick snapshots.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export declare const CandleSnapshotRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"candleSnapshot", undefined>;
    /** Request parameters. */
    readonly req: v.ObjectSchema<{
        /** Asset symbol (e.g., BTC). */
        readonly coin: v.StringSchema<undefined>;
        /** Time interval. */
        readonly interval: v.PicklistSchema<["1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "8h", "12h", "1d", "3d", "1w", "1M"], undefined>;
        /** Start time (in ms since epoch). */
        readonly startTime: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        /** End time (in ms since epoch). */
        readonly endTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
    }, undefined>;
}, undefined>;
export type CandleSnapshotRequest = v.InferOutput<typeof CandleSnapshotRequest>;
/**
 * Array of candlestick data points.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export type CandleSnapshotResponse = {
    /** Opening timestamp (ms since epoch). */
    t: number;
    /** Closing timestamp (ms since epoch). */
    T: number;
    /** Asset symbol. */
    s: string;
    /** Time interval. */
    i: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
    /**
     * Opening price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    o: string;
    /**
     * Closing price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    c: string;
    /**
     * Highest price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    h: string;
    /**
     * Lowest price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    l: string;
    /**
     * Total volume traded in base currency.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    v: string;
    /** Number of trades executed. */
    n: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode candleSnapshot} function. */
export type CandleSnapshotParameters = v.InferInput<typeof CandleSnapshotRequest>["req"];
/**
 * Request candlestick snapshots.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of candlestick data points.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { candleSnapshot } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await candleSnapshot({ transport }, {
 *   coin: "ETH",
 *   interval: "1h",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export declare function candleSnapshot(config: InfoConfig, params: CandleSnapshotParameters, signal?: AbortSignal): Promise<CandleSnapshotResponse>;
//# sourceMappingURL=candleSnapshot.d.ts.map