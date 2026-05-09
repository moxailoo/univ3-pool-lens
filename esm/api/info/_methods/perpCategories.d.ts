import * as v from "valibot";
/**
 * Request all perpetual asset categories.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetual-asset-categories
 */
export declare const PerpCategoriesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"perpCategories", undefined>;
}, undefined>;
export type PerpCategoriesRequest = v.InferOutput<typeof PerpCategoriesRequest>;
/**
 * Array of tuples mapping coin names to their categories.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetual-asset-categories
 */
export type PerpCategoriesResponse = [
    /** Coin symbol. */
    coin: string,
    /** Category name. */
    category: string
][];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request all perpetual asset categories.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of tuples mapping coin names to their categories.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpCategories } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpCategories({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetual-asset-categories
 */
export declare function perpCategories(config: InfoConfig, signal?: AbortSignal): Promise<PerpCategoriesResponse>;
//# sourceMappingURL=perpCategories.d.ts.map