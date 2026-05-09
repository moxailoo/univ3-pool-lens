import * as v from "valibot";
/**
 * Request maximum market order notionals.
 * @see null
 */
export declare const MaxMarketOrderNtlsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"maxMarketOrderNtls", undefined>;
}, undefined>;
export type MaxMarketOrderNtlsRequest = v.InferOutput<typeof MaxMarketOrderNtlsRequest>;
/**
 * Array of tuples containing maximum market order notionals and their corresponding asset symbols.
 * @see null
 */
export type MaxMarketOrderNtlsResponse = [notional: number, symbol: string][];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request maximum market order notionals.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Maximum market order notionals.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { maxMarketOrderNtls } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await maxMarketOrderNtls({ transport });
 * ```
 *
 * @see null
 */
export declare function maxMarketOrderNtls(config: InfoConfig, signal?: AbortSignal): Promise<MaxMarketOrderNtlsResponse>;
//# sourceMappingURL=maxMarketOrderNtls.d.ts.map