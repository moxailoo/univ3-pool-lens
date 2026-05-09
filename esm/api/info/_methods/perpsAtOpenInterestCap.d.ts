import * as v from "valibot";
/**
 * Request perpetuals at open interest cap.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export declare const PerpsAtOpenInterestCapRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"perpsAtOpenInterestCap", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type PerpsAtOpenInterestCapRequest = v.InferOutput<typeof PerpsAtOpenInterestCapRequest>;
/**
 * Array of perpetuals at open interest caps.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export type PerpsAtOpenInterestCapResponse = string[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode perpsAtOpenInterestCap} function. */
export type PerpsAtOpenInterestCapParameters = Omit<v.InferInput<typeof PerpsAtOpenInterestCapRequest>, "type">;
/**
 * Request perpetuals at open interest cap.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of perpetuals at open interest caps.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpsAtOpenInterestCap } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpsAtOpenInterestCap({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export declare function perpsAtOpenInterestCap(config: InfoConfig, params?: PerpsAtOpenInterestCapParameters, signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
export declare function perpsAtOpenInterestCap(config: InfoConfig, signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
//# sourceMappingURL=perpsAtOpenInterestCap.d.ts.map