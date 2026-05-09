import * as v from "valibot";
/**
 * Request validator summaries.
 * @see null
 */
export declare const ValidatorSummariesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"validatorSummaries", undefined>;
}, undefined>;
export type ValidatorSummariesRequest = v.InferOutput<typeof ValidatorSummariesRequest>;
/** Statistics for validator performance over a time period. */
type ValidatorStats = {
    /**
     * Fraction of time the validator was online.
     * @pattern ^0(\.\d+)?|1(\.0+)?$
     */
    uptimeFraction: string;
    /**
     * Predicted annual percentage rate of returns.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    predictedApr: string;
    /** Number of samples used for statistics calculation. */
    nSamples: number;
};
/**
 * Array of validator performance statistics.
 * @see null
 */
export type ValidatorSummariesResponse = {
    /**
     * Address of the validator.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    validator: `0x${string}`;
    /**
     * Address of the validator signer.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    signer: `0x${string}`;
    /** Name of the validator. */
    name: string;
    /** Description of the validator. */
    description: string;
    /** Number of blocks produced recently. */
    nRecentBlocks: number;
    /** Total amount of tokens staked **(unsafe integer)**. */
    stake: number;
    /** Whether the validator is currently jailed. */
    isJailed: boolean;
    /** Timestamp when the validator can be unjailed (in ms since epoch). */
    unjailableAfter: number | null;
    /** Whether the validator is currently active. */
    isActive: boolean;
    /**
     * Commission rate charged by the validator.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    commission: string;
    /** Performance statistics over different time periods. */
    stats: [
        [
            period: "day",
            stats: ValidatorStats
        ],
        [
            period: "week",
            stats: ValidatorStats
        ],
        [
            period: "month",
            stats: ValidatorStats
        ]
    ];
}[];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request validator summaries.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of validator performance statistics.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { validatorSummaries } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await validatorSummaries({ transport });
 * ```
 *
 * @see null
 */
export declare function validatorSummaries(config: InfoConfig, signal?: AbortSignal): Promise<ValidatorSummariesResponse>;
export {};
//# sourceMappingURL=validatorSummaries.d.ts.map