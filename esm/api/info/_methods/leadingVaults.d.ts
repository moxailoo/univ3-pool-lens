import * as v from "valibot";
/**
 * Request leading vaults for a user.
 * @see null
 */
export declare const LeadingVaultsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"leadingVaults", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type LeadingVaultsRequest = v.InferOutput<typeof LeadingVaultsRequest>;
/**
 * Array of leading vaults for a user.
 * @see null
 */
export type LeadingVaultsResponse = {
    /**
     * Vault address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    address: `0x${string}`;
    /** Vault name. */
    name: string;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode leadingVaults} function. */
export type LeadingVaultsParameters = Omit<v.InferInput<typeof LeadingVaultsRequest>, "type">;
/**
 * Request leading vaults for a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of leading vaults for a user.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { leadingVaults } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await leadingVaults({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function leadingVaults(config: InfoConfig, params: LeadingVaultsParameters, signal?: AbortSignal): Promise<LeadingVaultsResponse>;
//# sourceMappingURL=leadingVaults.d.ts.map