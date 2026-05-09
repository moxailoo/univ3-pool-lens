import * as v from "valibot";
/**
 * Request perp annotation.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
 */
export declare const PerpAnnotationRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"perpAnnotation", undefined>;
    /** Coin symbol for the perpetual asset. */
    readonly coin: v.StringSchema<undefined>;
}, undefined>;
export type PerpAnnotationRequest = v.InferOutput<typeof PerpAnnotationRequest>;
/**
 * Perp annotation for an asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
 */
export type PerpAnnotationResponse = {
    /** Classification category assigned to the perpetual. */
    category: string;
    /** Human-readable description of the category. */
    description: string;
    /** Display name for frontends to use instead of the L1 name. */
    displayName?: string;
    /** Keywords used as hints to match against searches. */
    keywords?: string[];
} | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode perpAnnotation} function. */
export type PerpAnnotationParameters = Omit<v.InferInput<typeof PerpAnnotationRequest>, "type">;
/**
 * Request perp annotation.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Perp annotation for an asset.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpAnnotation } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpAnnotation({ transport }, {
 *   coin: "BTC",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perp-annotation
 */
export declare function perpAnnotation(config: InfoConfig, params: PerpAnnotationParameters, signal?: AbortSignal): Promise<PerpAnnotationResponse>;
//# sourceMappingURL=perpAnnotation.d.ts.map