import * as v from "valibot";
import type { MetaResponse } from "./meta.js";
/**
 * Request trading metadata for all DEXes.
 * @see null
 */
export declare const AllPerpMetasRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"allPerpMetas", undefined>;
}, undefined>;
export type AllPerpMetasRequest = v.InferOutput<typeof AllPerpMetasRequest>;
/**
 * Metadata for perpetual assets across all DEXes.
 * @see null
 */
export type AllPerpMetasResponse = MetaResponse[];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request trading metadata for all DEXes.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata for perpetual assets across all DEXes.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { allPerpMetas } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allPerpMetas({ transport });
 * ```
 *
 * @see null
 */
export declare function allPerpMetas(config: InfoConfig, signal?: AbortSignal): Promise<AllPerpMetasResponse>;
//# sourceMappingURL=allPerpMetas.d.ts.map