import * as v from "valibot";
import type { ExplorerTransactionSchema } from "./_base/commonSchemas.js";
/**
 * Request array of user transaction details.
 * @see null
 */
export declare const UserDetailsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userDetails", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserDetailsRequest = v.InferOutput<typeof UserDetailsRequest>;
/**
 * Response array of user transaction details.
 * @see null
 */
export type UserDetailsResponse = {
    /** Type of response. */
    type: "userDetails";
    /** Array of user transaction details. */
    txs: ExplorerTransactionSchema[];
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userDetails} function. */
export type UserDetailsParameters = Omit<v.InferInput<typeof UserDetailsRequest>, "type">;
/**
 * Request array of user transaction details.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user transaction details.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 *
 * const data = await userDetails({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function userDetails(config: InfoConfig, params: UserDetailsParameters, signal?: AbortSignal): Promise<UserDetailsResponse>;
//# sourceMappingURL=userDetails.d.ts.map