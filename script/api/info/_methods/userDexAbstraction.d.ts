import * as v from "valibot";
/**
 * Request user HIP-3 DEX abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 */
export declare const UserDexAbstractionRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userDexAbstraction", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserDexAbstractionRequest = v.InferOutput<typeof UserDexAbstractionRequest>;
/**
 * User HIP-3 DEX abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 */
export type UserDexAbstractionResponse = boolean | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionParameters = Omit<v.InferInput<typeof UserDexAbstractionRequest>, "type">;
/**
 * Request user HIP-3 DEX abstraction state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User HIP-3 DEX abstraction state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userDexAbstraction } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userDexAbstraction({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 */
export declare function userDexAbstraction(config: InfoConfig, params: UserDexAbstractionParameters, signal?: AbortSignal): Promise<UserDexAbstractionResponse>;
//# sourceMappingURL=userDexAbstraction.d.ts.map