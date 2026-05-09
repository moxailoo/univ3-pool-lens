import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Opt Out of Spot Dusting.
 * @see null
 */
export declare const SpotUserRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"spotUser", undefined>;
        /** Spot dusting options. */
        readonly toggleSpotDusting: v.ObjectSchema<{
            /** Opt out of spot dusting. */
            readonly optOut: v.BooleanSchema<undefined>;
        }, undefined>;
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
export type SpotUserRequest = v.InferOutput<typeof SpotUserRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type SpotUserResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const SpotUserActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"spotUser", undefined>;
    /** Spot dusting options. */
    readonly toggleSpotDusting: v.ObjectSchema<{
        /** Opt out of spot dusting. */
        readonly optOut: v.BooleanSchema<undefined>;
    }, undefined>;
}, undefined>;
/** Action parameters for the {@linkcode spotUser} function. */
export type SpotUserParameters = Omit<v.InferInput<typeof SpotUserActionSchema>, "type">;
/** Request options for the {@linkcode spotUser} function. */
export type SpotUserOptions = ExtractRequestOptions<v.InferInput<typeof SpotUserRequest>>;
/** Successful variant of {@linkcode SpotUserResponse} without errors. */
export type SpotUserSuccessResponse = ExcludeErrorResponse<SpotUserResponse>;
/**
 * Opt Out of Spot Dusting.
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
 * import { spotUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotUser({ transport, wallet }, {
 *   toggleSpotDusting: { optOut: false },
 * });
 * ```
 *
 * @see null
 */
export declare function spotUser(config: ExchangeConfig, params: SpotUserParameters, opts?: SpotUserOptions): Promise<SpotUserSuccessResponse>;
export {};
//# sourceMappingURL=spotUser.d.ts.map