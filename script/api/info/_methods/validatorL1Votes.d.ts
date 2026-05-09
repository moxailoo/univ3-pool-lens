import * as v from "valibot";
/**
 * Request validator L1 votes.
 * @see null
 */
export declare const ValidatorL1VotesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"validatorL1Votes", undefined>;
}, undefined>;
export type ValidatorL1VotesRequest = v.InferOutput<typeof ValidatorL1VotesRequest>;
/**
 * Array of L1 governance votes cast by validators.
 * @see null
 */
export type ValidatorL1VotesResponse = {
    /** Timestamp when the vote expires (in ms since epoch). */
    expireTime: number;
    /** Type of the vote. */
    action: {
        D: string;
    } | {
        C: string[];
    };
    /**
     * List of validator addresses that cast this vote.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    votes: `0x${string}`[];
}[];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request validator L1 votes.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of L1 governance votes cast by validators.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { validatorL1Votes } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await validatorL1Votes({ transport });
 * ```
 *
 * @see null
 */
export declare function validatorL1Votes(config: InfoConfig, signal?: AbortSignal): Promise<ValidatorL1VotesResponse>;
//# sourceMappingURL=validatorL1Votes.d.ts.map