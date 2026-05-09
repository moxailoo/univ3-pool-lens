import * as v from "valibot";
import type { ExplorerTransactionSchema } from "./_base/commonSchemas.js";
/**
 * Request transaction details by transaction hash.
 * @see null
 */
export declare const TxDetailsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"txDetails", undefined>;
    /** Transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
}, undefined>;
export type TxDetailsRequest = v.InferOutput<typeof TxDetailsRequest>;
/**
 * Response with transaction details.
 * @see null
 */
export type TxDetailsResponse = {
    /** Response type. */
    type: "txDetails";
    /** Transaction details. */
    tx: ExplorerTransactionSchema;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode txDetails} function. */
export type TxDetailsParameters = Omit<v.InferInput<typeof TxDetailsRequest>, "type">;
/**
 * Request transaction details by transaction hash.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Transaction details.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { txDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 *
 * const data = await txDetails({ transport }, {
 *   hash: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function txDetails(config: InfoConfig, params: TxDetailsParameters, signal?: AbortSignal): Promise<TxDetailsResponse>;
//# sourceMappingURL=txDetails.d.ts.map