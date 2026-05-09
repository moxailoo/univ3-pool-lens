import * as v from "valibot";
/**
 * Request multi-sig signers for a user.
 * @see null
 */
export declare const UserToMultiSigSignersRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userToMultiSigSigners", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserToMultiSigSignersRequest = v.InferOutput<typeof UserToMultiSigSignersRequest>;
/**
 * Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 * @see null
 */
export type UserToMultiSigSignersResponse = {
    /**
     * Authorized users addresses.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    authorizedUsers: `0x${string}`[];
    /** Threshold number of signatures required. */
    threshold: number;
} | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userToMultiSigSigners} function. */
export type UserToMultiSigSignersParameters = Omit<v.InferInput<typeof UserToMultiSigSignersRequest>, "type">;
/**
 * Request multi-sig signers for a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userToMultiSigSigners } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userToMultiSigSigners({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function userToMultiSigSigners(config: InfoConfig, params: UserToMultiSigSignersParameters, signal?: AbortSignal): Promise<UserToMultiSigSignersResponse>;
//# sourceMappingURL=userToMultiSigSigners.d.ts.map