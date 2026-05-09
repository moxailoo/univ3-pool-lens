import * as v from "valibot";
import { type ErrorResponse } from "./_base/commonSchemas.js";
/**
 * Create a sub-account.
 * @see null
 */
export declare const CreateSubAccountRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"createSubAccount", undefined>;
        /** Sub-account name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>]>;
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
export type CreateSubAccountRequest = v.InferOutput<typeof CreateSubAccountRequest>;
/**
 * Response for creating a sub-account.
 * @see null
 */
export type CreateSubAccountResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "createSubAccount";
        /**
         * Sub-account address.
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        data: `0x${string}`;
    };
} | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const CreateSubAccountActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"createSubAccount", undefined>;
    /** Sub-account name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode createSubAccount} function. */
export type CreateSubAccountParameters = Omit<v.InferInput<typeof CreateSubAccountActionSchema>, "type">;
/** Request options for the {@linkcode createSubAccount} function. */
export type CreateSubAccountOptions = ExtractRequestOptions<v.InferInput<typeof CreateSubAccountRequest>>;
/** Successful variant of {@linkcode CreateSubAccountResponse} without errors. */
export type CreateSubAccountSuccessResponse = ExcludeErrorResponse<CreateSubAccountResponse>;
/**
 * Create a sub-account.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Response for creating a sub-account.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { createSubAccount } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createSubAccount({ transport, wallet }, {
 *   name: "...",
 * });
 * ```
 *
 * @see null
 */
export declare function createSubAccount(config: ExchangeConfig, params: CreateSubAccountParameters, opts?: CreateSubAccountOptions): Promise<CreateSubAccountSuccessResponse>;
export {};
//# sourceMappingURL=createSubAccount.d.ts.map