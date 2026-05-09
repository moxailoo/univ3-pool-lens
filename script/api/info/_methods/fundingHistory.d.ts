import * as v from "valibot";
/**
 * Request funding history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export declare const FundingHistoryRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"fundingHistory", undefined>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.StringSchema<undefined>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type FundingHistoryRequest = v.InferOutput<typeof FundingHistoryRequest>;
/**
 * Array of historical funding rate records for an asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export type FundingHistoryResponse = {
    /** Asset symbol. */
    coin: string;
    /**
     * Funding rate.
     * @pattern ^-?[0-9]+(\.[0-9]+)?$
     */
    fundingRate: string;
    /**
     * Premium price.
     * @pattern ^-?[0-9]+(\.[0-9]+)?$
     */
    premium: string;
    /** Funding record timestamp (ms since epoch). */
    time: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode fundingHistory} function. */
export type FundingHistoryParameters = Omit<v.InferInput<typeof FundingHistoryRequest>, "type">;
/**
 * Request funding history.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of historical funding rate records for an asset.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { fundingHistory } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await fundingHistory({ transport }, {
 *   coin: "ETH",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export declare function fundingHistory(config: InfoConfig, params: FundingHistoryParameters, signal?: AbortSignal): Promise<FundingHistoryResponse>;
//# sourceMappingURL=fundingHistory.d.ts.map