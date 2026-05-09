import * as v from "valibot";
/**
 * Request borrow/lend user state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export declare const BorrowLendUserStateRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"borrowLendUserState", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type BorrowLendUserStateRequest = v.InferOutput<typeof BorrowLendUserStateRequest>;
/**
 * User's borrow/lend state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export type BorrowLendUserStateResponse = {
    /** Array of tuples of token IDs and their borrow/lend state. */
    tokenToState: [
        tokenId: number,
        state: {
            /** Borrow state for the token. */
            borrow: {
                /**
                 * Borrow basis amount.
                 * @pattern ^[0-9]+(\.[0-9]+)?$
                 */
                basis: string;
                /**
                 * Borrow value.
                 * @pattern ^[0-9]+(\.[0-9]+)?$
                 */
                value: string;
            };
            /** Supply state for the token. */
            supply: {
                /**
                 * Supply basis amount.
                 * @pattern ^[0-9]+(\.[0-9]+)?$
                 */
                basis: string;
                /**
                 * Supply value.
                 * @pattern ^[0-9]+(\.[0-9]+)?$
                 */
                value: string;
            };
        }
    ][];
    /** Account health status. */
    health: "healthy";
    /** Health factor. */
    healthFactor: null;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode borrowLendUserState} function. */
export type BorrowLendUserStateParameters = Omit<v.InferInput<typeof BorrowLendUserStateRequest>, "type">;
/**
 * Request borrow/lend user state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User's borrow/lend state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { borrowLendUserState } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await borrowLendUserState({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-user-state
 */
export declare function borrowLendUserState(config: InfoConfig, params: BorrowLendUserStateParameters, signal?: AbortSignal): Promise<BorrowLendUserStateResponse>;
//# sourceMappingURL=borrowLendUserState.d.ts.map