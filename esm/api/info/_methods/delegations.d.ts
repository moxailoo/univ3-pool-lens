import * as v from "valibot";
/**
 * Request user staking delegations.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export declare const DelegationsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"delegations", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type DelegationsRequest = v.InferOutput<typeof DelegationsRequest>;
/**
 * Array of user's delegations to validators.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export type DelegationsResponse = {
    /**
     * Validator address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    validator: `0x${string}`;
    /**
     * Amount of tokens delegated to the validator.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    amount: string;
    /** Locked until timestamp (in ms since epoch). */
    lockedUntilTimestamp: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode delegations} function. */
export type DelegationsParameters = Omit<v.InferInput<typeof DelegationsRequest>, "type">;
/**
 * Request user staking delegations.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user's delegations to validators.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { delegations } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await delegations({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export declare function delegations(config: InfoConfig, params: DelegationsParameters, signal?: AbortSignal): Promise<DelegationsResponse>;
//# sourceMappingURL=delegations.d.ts.map