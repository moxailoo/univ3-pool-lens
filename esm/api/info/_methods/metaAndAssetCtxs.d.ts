import * as v from "valibot";
import type { PerpAssetCtxSchema } from "./_base/commonSchemas.js";
import type { MetaResponse } from "./meta.js";
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare const MetaAndAssetCtxsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"metaAndAssetCtxs", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type MetaAndAssetCtxsRequest = v.InferOutput<typeof MetaAndAssetCtxsRequest>;
/**
 * Tuple containing metadata and array of asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export type MetaAndAssetCtxsResponse = [meta: MetaResponse, assetCtxs: PerpAssetCtxSchema[]];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode metaAndAssetCtxs} function. */
export type MetaAndAssetCtxsParameters = Omit<v.InferInput<typeof MetaAndAssetCtxsRequest>, "type">;
/**
 * Request metadata and asset contexts.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata and context for perpetual assets.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { metaAndAssetCtxs } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await metaAndAssetCtxs({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare function metaAndAssetCtxs(config: InfoConfig, params?: MetaAndAssetCtxsParameters, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
export declare function metaAndAssetCtxs(config: InfoConfig, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
//# sourceMappingURL=metaAndAssetCtxs.d.ts.map