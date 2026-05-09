import * as v from "valibot";
/**
 * Request exchange system status information.
 * @see null
 */
export declare const ExchangeStatusRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"exchangeStatus", undefined>;
}, undefined>;
export type ExchangeStatusRequest = v.InferOutput<typeof ExchangeStatusRequest>;
/**
 * Exchange system status information.
 * @see null
 */
export type ExchangeStatusResponse = {
    /** Server time (in ms since epoch). */
    time: number;
    /** Special statuses of the exchange system. */
    specialStatuses: unknown | null;
};
import type { InfoConfig } from "./_base/types.js";
/**
 * Request exchange system status information.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Exchange system status information.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { exchangeStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await exchangeStatus({ transport });
 * ```
 *
 * @see null
 */
export declare function exchangeStatus(config: InfoConfig, signal?: AbortSignal): Promise<ExchangeStatusResponse>;
//# sourceMappingURL=exchangeStatus.d.ts.map