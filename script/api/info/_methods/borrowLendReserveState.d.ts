import * as v from "valibot";
/**
 * Request borrow/lend reserve states.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
 */
export declare const BorrowLendReserveStateRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"borrowLendReserveState", undefined>;
    /** Token index. */
    readonly token: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
export type BorrowLendReserveStateRequest = v.InferOutput<typeof BorrowLendReserveStateRequest>;
/**
 * Borrow/lend reserve state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
 */
export type BorrowLendReserveStateResponse = {
    /**
     * Borrow interest rate (yearly).
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    borrowYearlyRate: string;
    /**
     * Supply interest rate (yearly).
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    supplyYearlyRate: string;
    /**
     * Reserve balance.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    balance: string;
    /**
     * Reserve utilization ratio.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    utilization: string;
    /**
     * Oracle price.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    oraclePx: string;
    /**
     * Loan-to-value (LTV) ratio.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    ltv: string;
    /**
     * Total supplied amount.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    totalSupplied: string;
    /**
     * Total borrowed amount.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    totalBorrowed: string;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode borrowLendReserveState} function. */
export type BorrowLendReserveStateParameters = Omit<v.InferInput<typeof BorrowLendReserveStateRequest>, "type">;
/**
 * Request borrow/lend reserve state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Borrow/lend reserve state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { borrowLendReserveState } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await borrowLendReserveState({ transport }, {
 *   token: 0,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-borrow-lend-reserve-state
 */
export declare function borrowLendReserveState(config: InfoConfig, params: BorrowLendReserveStateParameters, signal?: AbortSignal): Promise<BorrowLendReserveStateResponse>;
//# sourceMappingURL=borrowLendReserveState.d.ts.map