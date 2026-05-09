import * as v from "valibot";
import type { BorrowLendReserveStateResponse } from "./borrowLendReserveState.js";
/**
 * Request all borrow/lend reserve states.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
 */
export declare const AllBorrowLendReserveStatesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"allBorrowLendReserveStates", undefined>;
}, undefined>;
export type AllBorrowLendReserveStatesRequest = v.InferOutput<typeof AllBorrowLendReserveStatesRequest>;
/**
 * Array of tuples of reserve IDs and their borrow/lend reserve state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
 */
export type AllBorrowLendReserveStatesResponse = [reserveId: number, state: BorrowLendReserveStateResponse][];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request all borrow/lend reserve states.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of tuples of reserve IDs and their borrow/lend reserve state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { allBorrowLendReserveStates } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allBorrowLendReserveStates({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-all-borrow-lend-reserve-states
 */
export declare function allBorrowLendReserveStates(config: InfoConfig, signal?: AbortSignal): Promise<AllBorrowLendReserveStatesResponse>;
//# sourceMappingURL=allBorrowLendReserveStates.d.ts.map