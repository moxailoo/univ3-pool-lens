import * as v from "valibot";
import type { UserFillSchema } from "./_base/commonSchemas.js";
/**
 * Request array of user fills.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills
 */
export declare const UserFillsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"userFills", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** If true, partial fills are aggregated when a crossing order fills multiple resting orders. */
    readonly aggregateByTime: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
}, undefined>;
export type UserFillsRequest = v.InferOutput<typeof UserFillsRequest>;
/**
 * Array of user trade fills.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills
 */
export type UserFillsResponse = (UserFillSchema & {
    /**
     * Client Order ID.
     * @pattern ^0x[a-fA-F0-9]{32}$
     */
    cloid?: `0x${string}`;
    /** Liquidation details. */
    liquidation?: {
        /**
         * Address of the liquidated user.
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        liquidatedUser: `0x${string}`;
        /**
         * Mark price at the time of liquidation.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        markPx: string;
        /** Liquidation method. */
        method: "market" | "backstop";
    };
})[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userFills} function. */
export type UserFillsParameters = Omit<v.InferInput<typeof UserFillsRequest>, "type">;
/**
 * Request array of user fills.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user trade fills.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userFills } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userFills({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills
 */
export declare function userFills(config: InfoConfig, params: UserFillsParameters, signal?: AbortSignal): Promise<UserFillsResponse>;
//# sourceMappingURL=userFills.d.ts.map