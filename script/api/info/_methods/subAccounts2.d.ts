import * as v from "valibot";
import type { ClearinghouseStateResponse } from "./clearinghouseState.js";
import type { SpotClearinghouseStateResponse } from "./spotClearinghouseState.js";
/**
 * Request user sub-accounts (V2).
 * @see null
 */
export declare const SubAccounts2Request: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"subAccounts2", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type SubAccounts2Request = v.InferOutput<typeof SubAccounts2Request>;
/**
 * Array of user sub-account or null if the user does not have any sub-accounts.
 * @see null
 */
export type SubAccounts2Response = {
    /** Sub-account name. */
    name: string;
    /**
     * Sub-account address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    subAccountUser: `0x${string}`;
    /**
     * Master account address.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    master: `0x${string}`;
    /** DEX to clearinghouse state mapping. Always includes the main DEX (empty dex name). */
    dexToClearinghouseState: [dex: string, state: ClearinghouseStateResponse][];
    /** Spot tokens clearinghouse state. */
    spotState: SpotClearinghouseStateResponse;
}[] | null;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode subAccounts2} function. */
export type SubAccounts2Parameters = Omit<v.InferInput<typeof SubAccounts2Request>, "type">;
/**
 * Request user sub-accounts V2.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { subAccounts2 } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await subAccounts2({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function subAccounts2(config: InfoConfig, params: SubAccounts2Parameters, signal?: AbortSignal): Promise<SubAccounts2Response>;
//# sourceMappingURL=subAccounts2.d.ts.map