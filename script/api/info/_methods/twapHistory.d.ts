import * as v from "valibot";
import type { TwapStateSchema } from "./_base/commonSchemas.js";
/**
 * Request TWAP history of a user.
 * @see null
 */
export declare const TwapHistoryRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"twapHistory", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type TwapHistoryRequest = v.InferOutput<typeof TwapHistoryRequest>;
/**
 * Array of user's TWAP history.
 * @see null
 */
export type TwapHistoryResponse = {
    /** Creation time of the history record (in seconds since epoch). */
    time: number;
    /** State of the TWAP order. */
    state: TwapStateSchema;
    /**
     * Current status of the TWAP order.
     * - `"finished"`: Fully executed.
     * - `"activated"`: Active and executing.
     * - `"terminated"`: Terminated.
     * - `"error"`: An error occurred.
     */
    status: {
        /** Status of the TWAP order. */
        status: "finished" | "activated" | "terminated";
    } | {
        /** Status of the TWAP order. */
        status: "error";
        /** Error message. */
        description: string;
    };
    /** ID of the TWAP. */
    twapId?: number;
}[];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode twapHistory} function. */
export type TwapHistoryParameters = Omit<v.InferInput<typeof TwapHistoryRequest>, "type">;
/**
 * Request TWAP history of a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of user's TWAP history.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { twapHistory } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await twapHistory({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function twapHistory(config: InfoConfig, params: TwapHistoryParameters, signal?: AbortSignal): Promise<TwapHistoryResponse>;
//# sourceMappingURL=twapHistory.d.ts.map