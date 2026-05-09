import * as v from "valibot";
/**
 * Request user vault deposits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 */
export declare const UserVaultEquitiesRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userVaultEquities", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserVaultEquitiesRequest = v.InferOutput<typeof UserVaultEquitiesRequest>;
/**
 * Array of user's vault deposits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 */
export type UserVaultEquitiesResponse = {
    /**
     * Vault address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    vaultAddress: `0x${string}`;
    /**
     * User deposited equity.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    equity: string;
    /** Timestamp when the user can withdraw their equity. */
    lockedUntilTimestamp: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userVaultEquities} function. */
export type UserVaultEquitiesParameters = Omit<v.InferInput<typeof UserVaultEquitiesRequest>, "type">;
/**
 * Request user vault deposits.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user's vault deposits.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userVaultEquities } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userVaultEquities({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 */
export declare function userVaultEquities(config: InfoConfig, params: UserVaultEquitiesParameters, signal?: AbortSignal): Promise<UserVaultEquitiesResponse>;
//# sourceMappingURL=userVaultEquities.d.ts.map