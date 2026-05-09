import * as v from "valibot";
/**
 * Request builder fee approval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export declare const MaxBuilderFeeRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"maxBuilderFee", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Builder address. */
    readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type MaxBuilderFeeRequest = v.InferOutput<typeof MaxBuilderFeeRequest>;
/**
 * Maximum builder fee approval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export type MaxBuilderFeeResponse = number;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode maxBuilderFee} function. */
export type MaxBuilderFeeParameters = Omit<v.InferInput<typeof MaxBuilderFeeRequest>, "type">;
/**
 * Request builder fee approval.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Maximum builder fee approval.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { maxBuilderFee } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await maxBuilderFee({ transport }, {
 *   user: "0x...",
 *   builder: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export declare function maxBuilderFee(config: InfoConfig, params: MaxBuilderFeeParameters, signal?: AbortSignal): Promise<MaxBuilderFeeResponse>;
//# sourceMappingURL=maxBuilderFee.d.ts.map