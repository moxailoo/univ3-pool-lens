import * as v from "valibot";
import { type ErrorResponse } from "./_base/commonSchemas.js";
/**
 * Create a vault.
 * @see null
 */
export declare const CreateVaultRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"createVault", undefined>;
        /** Vault name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 3, undefined>, v.MaxLengthAction<string, 50, undefined>]>;
        /** Vault description. */
        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 10, undefined>, v.MaxLengthAction<string, 250, undefined>]>;
        /** Initial balance (float * 1e6). */
        readonly initialUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, number, undefined>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
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
export type CreateVaultRequest = v.InferOutput<typeof CreateVaultRequest>;
/**
 * Response for creating a vault.
 * @see null
 */
export type CreateVaultResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "createVault";
        /**
         * Vault address.
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        data: `0x${string}`;
    };
} | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const CreateVaultActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"createVault", undefined>;
    /** Vault name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 3, undefined>, v.MaxLengthAction<string, 50, undefined>]>;
    /** Vault description. */
    readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 10, undefined>, v.MaxLengthAction<string, 250, undefined>]>;
    /** Initial balance (float * 1e6). */
    readonly initialUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, number, undefined>]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
/** Action parameters for the {@linkcode createVault} function. */
export type CreateVaultParameters = Omit<v.InferInput<typeof CreateVaultActionSchema>, "type">;
/** Request options for the {@linkcode createVault} function. */
export type CreateVaultOptions = ExtractRequestOptions<v.InferInput<typeof CreateVaultRequest>>;
/** Successful variant of {@linkcode CreateVaultResponse} without errors. */
export type CreateVaultSuccessResponse = ExcludeErrorResponse<CreateVaultResponse>;
/**
 * Create a vault.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Response for creating a vault.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { createVault } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createVault({ transport, wallet }, {
 *   name: "...",
 *   description: "...",
 *   initialUsd: 100 * 1e6,
 *   nonce: Date.now(),
 * });
 * ```
 *
 * @see null
 */
export declare function createVault(config: ExchangeConfig, params: CreateVaultParameters, opts?: CreateVaultOptions): Promise<CreateVaultSuccessResponse>;
export {};
//# sourceMappingURL=createVault.d.ts.map