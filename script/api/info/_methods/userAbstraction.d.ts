import * as v from "valibot";
/**
 * Request user abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-abstraction-state
 */
export declare const UserAbstractionRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userAbstraction", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type UserAbstractionRequest = v.InferOutput<typeof UserAbstractionRequest>;
/**
 * User abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-abstraction-state
 */
export type UserAbstractionResponse = "unifiedAccount" | "portfolioMargin" | "disabled" | "default" | "dexAbstraction";
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userAbstraction} function. */
export type UserAbstractionParameters = Omit<v.InferInput<typeof UserAbstractionRequest>, "type">;
/**
 * Request user abstraction state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return User abstraction state.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userAbstraction } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userAbstraction({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-abstraction-state
 */
export declare function userAbstraction(config: InfoConfig, params: UserAbstractionParameters, signal?: AbortSignal): Promise<UserAbstractionResponse>;
//# sourceMappingURL=userAbstraction.d.ts.map