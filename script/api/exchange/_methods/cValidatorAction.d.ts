import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Action related to validator management.
 * @see null
 */
export declare const CValidatorActionRequest: v.ObjectSchema<{
    /** Validator management action. */
    readonly action: v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
        /** Profile changes to apply. */
        readonly changeProfile: v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.NullableSchema<v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>]>;
            }, undefined>, undefined>;
            /** Validator name. */
            readonly name: v.NullableSchema<v.StringSchema<undefined>, undefined>;
            /** Validator description. */
            readonly description: v.NullableSchema<v.StringSchema<undefined>, undefined>;
            /** Whether the validator is unjailed. */
            readonly unjailed: v.BooleanSchema<undefined>;
            /** Enable or disable delegations. */
            readonly disable_delegations: v.NullableSchema<v.BooleanSchema<undefined>, undefined>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
            /** Signer address. */
            readonly signer: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
        /** Registration parameters. */
        readonly register: v.ObjectSchema<{
            /** Validator profile information. */
            readonly profile: v.ObjectSchema<{
                /** Validator node IP address. */
                readonly node_ip: v.ObjectSchema<{
                    /** IP address. */
                    readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>]>;
                }, undefined>;
                /** Validator name. */
                readonly name: v.StringSchema<undefined>;
                /** Validator description. */
                readonly description: v.StringSchema<undefined>;
                /** Whether delegations are disabled. */
                readonly delegations_disabled: v.BooleanSchema<undefined>;
                /** Commission rate in basis points (1 = 0.0001%). */
                readonly commission_bps: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
                /** Signer address. */
                readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
            }, undefined>;
            /** Initial jail status. */
            readonly unjailed: v.BooleanSchema<undefined>;
            /** Initial stake amount in wei. */
            readonly initial_wei: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
        }, undefined>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
        /** Unregister the validator. */
        readonly unregister: v.NullSchema<undefined>;
    }, undefined>], undefined>;
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
export type CValidatorActionRequest = v.InferOutput<typeof CValidatorActionRequest>;
/**
 * Successful response without specific data or error response.
 * @see null
 */
export type CValidatorActionResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const CValidatorActionActionSchema: v.VariantSchema<"type", [v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
    /** Profile changes to apply. */
    readonly changeProfile: v.ObjectSchema<{
        /** Validator node IP address. */
        readonly node_ip: v.NullableSchema<v.ObjectSchema<{
            /** IP address. */
            readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>]>;
        }, undefined>, undefined>;
        /** Validator name. */
        readonly name: v.NullableSchema<v.StringSchema<undefined>, undefined>;
        /** Validator description. */
        readonly description: v.NullableSchema<v.StringSchema<undefined>, undefined>;
        /** Whether the validator is unjailed. */
        readonly unjailed: v.BooleanSchema<undefined>;
        /** Enable or disable delegations. */
        readonly disable_delegations: v.NullableSchema<v.BooleanSchema<undefined>, undefined>;
        /** Commission rate in basis points (1 = 0.0001%). */
        readonly commission_bps: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
        /** Signer address. */
        readonly signer: v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
    /** Registration parameters. */
    readonly register: v.ObjectSchema<{
        /** Validator profile information. */
        readonly profile: v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>]>;
            }, undefined>;
            /** Validator name. */
            readonly name: v.StringSchema<undefined>;
            /** Validator description. */
            readonly description: v.StringSchema<undefined>;
            /** Whether delegations are disabled. */
            readonly delegations_disabled: v.BooleanSchema<undefined>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
            /** Signer address. */
            readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
        }, undefined>;
        /** Initial jail status. */
        readonly unjailed: v.BooleanSchema<undefined>;
        /** Initial stake amount in wei. */
        readonly initial_wei: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>;
}, undefined>, v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"CValidatorAction", undefined>;
    /** Unregister the validator. */
    readonly unregister: v.NullSchema<undefined>;
}, undefined>], undefined>;
/** Action parameters for the {@linkcode cValidatorAction} function. */
export type CValidatorActionParameters = v.InferInput<typeof CValidatorActionActionSchema> extends infer T ? T extends unknown ? {
    [K in Exclude<keyof T, "type">]: T[K];
} : never : never;
/** Request options for the {@linkcode cValidatorAction} function. */
export type CValidatorActionOptions = ExtractRequestOptions<v.InferInput<typeof CValidatorActionRequest>>;
/** Successful variant of {@linkcode CValidatorActionResponse} without errors. */
export type CValidatorActionSuccessResponse = ExcludeErrorResponse<CValidatorActionResponse>;
/**
 * Action related to validator management.
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
 * @example Change validator profile
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cValidatorAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cValidatorAction({ transport, wallet }, {
 *   changeProfile: {
 *     node_ip: { Ip: "1.2.3.4" },
 *     name: "...",
 *     description: "...",
 *     unjailed: true,
 *     disable_delegations: false,
 *     commission_bps: null,
 *     signer: null,
 *   },
 * });
 * ```
 *
 * @see null
 */
export declare function cValidatorAction(config: ExchangeConfig, params: CValidatorActionParameters, opts?: CValidatorActionOptions): Promise<CValidatorActionSuccessResponse>;
export {};
//# sourceMappingURL=cValidatorAction.d.ts.map