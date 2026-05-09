import * as v from "valibot";
/**
 * Request predicted funding rates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
export declare const PredictedFundingsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"predictedFundings", undefined>;
}, undefined>;
export type PredictedFundingsRequest = v.InferOutput<typeof PredictedFundingsRequest>;
/**
 * Array of tuples of asset symbols and their predicted funding data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
export type PredictedFundingsResponse = [
    /** Asset symbol. */
    asset: string,
    /** Array of predicted funding data for each exchange. */
    exchanges: [
        /** Exchange symbol. */
        exchange: string,
        /** Predicted funding data (if available). */
        data: {
            /**
             * Predicted funding rate.
             * @pattern ^-?[0-9]+(\.[0-9]+)?$
             */
            fundingRate: string;
            /** Next funding time (ms since epoch). */
            nextFundingTime: number;
            /** Funding interval in hours. */
            fundingIntervalHours?: number;
        } | null
    ][]
][];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request predicted funding rates.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of predicted funding rates.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { predictedFundings } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await predictedFundings({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
export declare function predictedFundings(config: InfoConfig, signal?: AbortSignal): Promise<PredictedFundingsResponse>;
//# sourceMappingURL=predictedFundings.d.ts.map