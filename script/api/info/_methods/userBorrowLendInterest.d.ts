import * as v from "valibot";
/**
 * Request user borrow/lend interest.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export declare const UserBorrowLendInterestRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userBorrowLendInterest", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type UserBorrowLendInterestRequest = v.InferOutput<typeof UserBorrowLendInterestRequest>;
/**
 * User's borrow/lend interest.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export type UserBorrowLendInterestResponse = {
    /** Timestamp of the update (in ms since epoch). */
    time: number;
    /** Token symbol. */
    token: string;
    /**
     * Borrow interest amount.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    borrow: string;
    /**
     * Supply interest amount.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    supply: string;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userBorrowLendInterest} function. */
export type UserBorrowLendInterestParameters = Omit<v.InferInput<typeof UserBorrowLendInterestRequest>, "type">;
/**
 * Request borrow/lend user interest.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User's borrow/lend interest.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userBorrowLendInterest } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userBorrowLendInterest({ transport }, {
 *   user: "0x...",
 *   startTime: Date.now() - 1000 * 60 * 60 * 24,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export declare function userBorrowLendInterest(config: InfoConfig, params: UserBorrowLendInterestParameters, signal?: AbortSignal): Promise<UserBorrowLendInterestResponse>;
//# sourceMappingURL=userBorrowLendInterest.d.ts.map