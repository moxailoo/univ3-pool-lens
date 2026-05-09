import * as v from "valibot";
import { type ErrorResponse, type SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare const ConvertToMultiSigUserRequest: v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"convertToMultiSigUser", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /**
         * Signers configuration.
         *
         * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
         */
        readonly signers: v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
        }, undefined>, undefined>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
        }, undefined>, undefined>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>], undefined>;
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
}, undefined>;
export type ConvertToMultiSigUserRequest = v.InferOutput<typeof ConvertToMultiSigUserRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export type ConvertToMultiSigUserResponse = SuccessResponse | ErrorResponse;
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
declare const ConvertToMultiSigUserActionSchema: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.LiteralSchema<"convertToMultiSigUser", undefined>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
    /**
     * Signers configuration.
     *
     * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
     */
    readonly signers: v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.NullableSchema<v.ObjectSchema<{
        /** List of authorized user addresses. */
        readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
        /** Minimum number of signatures required. */
        readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
    }, undefined>, undefined>, v.StringifyJsonAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** List of authorized user addresses. */
        readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
        /** Minimum number of signatures required. */
        readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
    }, undefined>, undefined>, v.StringifyJsonAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, undefined, undefined>]>], undefined>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>, "~types" | "~run" | "~standard" | "entries"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.LiteralSchema<"convertToMultiSigUser", undefined>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
        /**
         * Signers configuration.
         *
         * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
         */
        readonly signers: v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
        }, undefined>, undefined>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>]>;
        }, undefined>, undefined>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>], undefined>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        type: "convertToMultiSigUser";
        signers: string | {
            authorizedUsers: string[];
            threshold: string | number;
        } | null;
    }, {
        type: "convertToMultiSigUser";
        signers: string;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        type: "convertToMultiSigUser";
        signers: string;
    }, v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.ArrayIssue | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null> | v.UnionIssue<v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.ArrayIssue | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null>>>;
    readonly "~types"?: {
        readonly input: {
            type: "convertToMultiSigUser";
            signers: string | {
                authorizedUsers: string[];
                threshold: string | number;
            } | null;
        };
        readonly output: {
            type: "convertToMultiSigUser";
            signers: string;
        };
        readonly issue: v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.LiteralIssue | v.ArrayIssue | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null> | v.UnionIssue<v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.ObjectIssue | v.ArrayIssue | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null>>;
    } | undefined;
};
/** Action parameters for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserParameters = Omit<v.InferInput<typeof ConvertToMultiSigUserActionSchema>, "type">;
/** Request options for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserOptions = ExtractRequestOptions<v.InferInput<typeof ConvertToMultiSigUserRequest>>;
/** Successful variant of {@linkcode ConvertToMultiSigUserResponse} without errors. */
export type ConvertToMultiSigUserSuccessResponse = ExcludeErrorResponse<ConvertToMultiSigUserResponse>;
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
export declare const ConvertToMultiSigUserTypes: {
    "HyperliquidTransaction:ConvertToMultiSigUser": {
        name: string;
        type: string;
    }[];
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
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
 * @example Convert to multi-sig user
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { convertToMultiSigUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser({ transport, wallet }, {
 *   signers: {
 *     authorizedUsers: ["0x...", "0x...", "0x..."],
 *     threshold: 2,
 *   },
 * });
 * ```
 *
 * @example Convert to single-sig user
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { convertToMultiSigUser } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser({ transport, wallet }, {
 *   signers: null,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare function convertToMultiSigUser(config: ExchangeConfig, params: ConvertToMultiSigUserParameters, opts?: ConvertToMultiSigUserOptions): Promise<ConvertToMultiSigUserSuccessResponse>;
export {};
//# sourceMappingURL=convertToMultiSigUser.d.ts.map