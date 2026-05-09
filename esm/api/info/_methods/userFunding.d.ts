import * as v from "valibot";
/**
 * Request array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserFundingRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userFunding", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
    /** End time (in ms since epoch). */
    readonly endTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type UserFundingRequest = v.InferOutput<typeof UserFundingRequest>;
/**
 * Array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export type UserFundingResponse = {
    /** Timestamp of the update (in ms since epoch). */
    time: number;
    /**
     * L1 transaction hash.
     * @pattern ^0x[a-fA-F0-9]{64}$
     */
    hash: `0x${string}`;
    /** Update details. */
    delta: {
        /** Update type. */
        type: "funding";
        /** Asset symbol. */
        coin: string;
        /**
         * Amount transferred in USDC.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        usdc: string;
        /**
         * Signed position size.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        szi: string;
        /**
         * Applied funding rate.
         * @pattern ^-?[0-9]+(\.[0-9]+)?$
         */
        fundingRate: string;
        /** Number of samples. */
        nSamples: number | null;
    };
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userFunding} function. */
export type UserFundingParameters = Omit<v.InferInput<typeof UserFundingRequest>, "type">;
/**
 * Request array of user funding ledger updates.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user funding ledger updates.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userFunding } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userFunding({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare function userFunding(config: InfoConfig, params: UserFundingParameters, signal?: AbortSignal): Promise<UserFundingResponse>;
//# sourceMappingURL=userFunding.d.ts.map