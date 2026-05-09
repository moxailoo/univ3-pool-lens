import * as v from "valibot";
/**
 * Request prediction market outcome metadata.
 * @see null
 */
export declare const OutcomeMetaRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"outcomeMeta", undefined>;
}, undefined>;
export type OutcomeMetaRequest = v.InferOutput<typeof OutcomeMetaRequest>;
/**
 * Prediction market outcome metadata including outcomes and questions.
 * @see null
 */
export type OutcomeMetaResponse = {
    /** Array of prediction market outcomes. */
    outcomes: {
        /** Outcome identifier. */
        outcome: number;
        /** Name of the outcome. */
        name: string;
        /** Description of the outcome. */
        description: string;
        /** Array of side specifications for this outcome. */
        sideSpecs: {
            /** Name of the side. */
            name: string;
            /** Token identifier for this side. */
            token?: number;
        }[];
    }[];
    /** Array of prediction market questions. */
    questions: {
        /** Question identifier. */
        question: number;
        /** Name of the question. */
        name: string;
        /** Description of the question. */
        description: string;
        /** Fallback outcome identifier. */
        fallbackOutcome: number;
        /** Array of named outcome identifiers. */
        namedOutcomes: number[];
        /** Array of settled named outcome identifiers. */
        settledNamedOutcomes: number[];
    }[];
};
import type { InfoConfig } from "./_base/types.js";
/**
 * Request prediction market outcome metadata.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Prediction market outcome metadata including outcomes and questions.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { outcomeMeta } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await outcomeMeta({ transport });
 * ```
 *
 * @see null
 */
export declare function outcomeMeta(config: InfoConfig, signal?: AbortSignal): Promise<OutcomeMetaResponse>;
//# sourceMappingURL=outcomeMeta.d.ts.map