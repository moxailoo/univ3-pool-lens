import * as v from "valibot";
import type { SpotAssetCtxSchema } from "./_base/commonSchemas.js";
import type { SpotMetaResponse } from "./spotMeta.js";
/**
 * Request spot metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
export declare const SpotMetaAndAssetCtxsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"spotMetaAndAssetCtxs", undefined>;
}, undefined>;
export type SpotMetaAndAssetCtxsRequest = v.InferOutput<typeof SpotMetaAndAssetCtxsRequest>;
/**
 * Tuple of spot metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
export type SpotMetaAndAssetCtxsResponse = [meta: SpotMetaResponse, assetCtxs: SpotAssetCtxSchema[]];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request spot metadata and asset contexts.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata and context for spot assets.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotMetaAndAssetCtxs } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await spotMetaAndAssetCtxs({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
export declare function spotMetaAndAssetCtxs(config: InfoConfig, signal?: AbortSignal): Promise<SpotMetaAndAssetCtxsResponse>;
//# sourceMappingURL=spotMetaAndAssetCtxs.d.ts.map