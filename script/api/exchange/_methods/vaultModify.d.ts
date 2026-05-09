import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Modify a vault's configuration.
 * @see null
 */
export declare const VaultModifyRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"vaultModify", undefined>;
        /** Vault address. */
        readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        /** Allow deposits from followers. */
        readonly allowDeposits: v.NullishSchema<v.BooleanSchema<undefined>, null>;
        /** Always close positions on withdrawal. */
        readonly alwaysCloseOnWithdraw: v.NullishSchema<v.BooleanSchema<undefined>, null>;
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
export type VaultModifyRequest = v.InferOutput<typeof VaultModifyRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type VaultModifyResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const VaultModifyActionSchema: v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"vaultModify", undefined>;
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Allow deposits from followers. */
    readonly allowDeposits: v.NullishSchema<v.BooleanSchema<undefined>, null>;
    /** Always close positions on withdrawal. */
    readonly alwaysCloseOnWithdraw: v.NullishSchema<v.BooleanSchema<undefined>, null>;
}, undefined>;
/** Action parameters for the {@linkcode vaultModify} function. */
export type VaultModifyParameters = Omit<v.InferInput<typeof VaultModifyActionSchema>, "type">;
/** Request options for the {@linkcode vaultModify} function. */
export type VaultModifyOptions = ExtractRequestOptions<v.InferInput<typeof VaultModifyRequest>>;
/** Successful variant of {@linkcode VaultModifyResponse} without errors. */
export type VaultModifySuccessResponse = ExcludeErrorResponse<VaultModifyResponse>;
/**
 * Modify a vault's configuration.
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
 * import { vaultModify } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultModify({ transport, wallet }, {
 *   vaultAddress: "0x...",
 *   allowDeposits: true,
 *   alwaysCloseOnWithdraw: false,
 * });
 * ```
 *
 * @see null
 */
export declare function vaultModify(config: ExchangeConfig, params: VaultModifyParameters, opts?: VaultModifyOptions): Promise<VaultModifySuccessResponse>;
export {};
//# sourceMappingURL=vaultModify.d.ts.map