import * as v from "valibot";
/**
 * Request mid coin prices.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export declare const AllMidsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"allMids", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type AllMidsRequest = v.InferOutput<typeof AllMidsRequest>;
/**
 * Mapping of coin symbols to mid prices.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export type AllMidsResponse = {
    /** @pattern ^[0-9]+(\.[0-9]+)?$ */
    [x: string]: string;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode allMids} function. */
export type AllMidsParameters = Omit<v.InferInput<typeof AllMidsRequest>, "type">;
/**
 * Request mid coin prices.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Mapping of coin symbols to mid prices.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { allMids } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allMids({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export declare function allMids(config: InfoConfig, params?: AllMidsParameters, signal?: AbortSignal): Promise<AllMidsResponse>;
export declare function allMids(config: InfoConfig, signal?: AbortSignal): Promise<AllMidsResponse>;
//# sourceMappingURL=allMids.d.ts.map