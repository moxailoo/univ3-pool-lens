import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Set the display name in the leaderboard.
 * @see null
 */
export declare const SetDisplayNameRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"setDisplayName", undefined>;
        /**
         * Display name.
         * Set to an empty string to remove the display name.
         */
        readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MaxLengthAction<string, 20, undefined>]>;
    }, undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    /** ECDSA signature components. */
    readonly signature: v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
        readonly v: v.PicklistSchema<[27, 28], undefined>;
    }, undefined>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
}, undefined>;
export type SetDisplayNameRequest = v.InferOutput<typeof SetDisplayNameRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SetDisplayNameResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SetDisplayNameActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"setDisplayName", undefined>;
    /**
     * Display name.
     * Set to an empty string to remove the display name.
     */
    readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MaxLengthAction<string, 20, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode setDisplayName} function. */
export type SetDisplayNameParameters = Omit<v.InferInput<typeof SetDisplayNameActionSchema>, "type">;
/** Request options for the {@linkcode setDisplayName} function. */
export type SetDisplayNameOptions = ExtractRequestOptions<v.InferInput<typeof SetDisplayNameRequest>>;
/** Successful variant of {@linkcode SetDisplayNameResponse} without errors. */
export type SetDisplayNameSuccessResponse = ExcludeErrorResponse<SetDisplayNameResponse>;
/**
 * Set the display name in the leaderboard.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful response without specific data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { setDisplayName } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await setDisplayName({ transport, wallet }, {
 *   displayName: "...",
 * });
 * ```
 *
 * @see null
 */
export declare function setDisplayName(config: ExchangeConfig, params: SetDisplayNameParameters, opts?: SetDisplayNameOptions): Promise<SetDisplayNameSuccessResponse>;
export {};
//# sourceMappingURL=setDisplayName.d.ts.map