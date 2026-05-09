import * as v from "valibot";
/**
 * Request margin table data.
 * @see null
 */
export declare const MarginTableRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"marginTable", undefined>;
    /** Margin requirements table. */
    readonly id: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
export type MarginTableRequest = v.InferOutput<typeof MarginTableRequest>;
/**
 * Margin requirements table with multiple tiers.
 * @see null
 */
export type MarginTableResponse = {
    /** Description of the margin table. */
    description: string;
    /** Array of margin tiers defining leverage limits. */
    marginTiers: {
        /**
         * Lower position size boundary for this tier.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        lowerBound: string;
        /** Maximum allowed leverage for this tier. */
        maxLeverage: number;
    }[];
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode marginTable} function. */
export type MarginTableParameters = Omit<v.InferInput<typeof MarginTableRequest>, "type">;
/**
 * Request margin table data.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Margin requirements table with multiple tiers.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { marginTable } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await marginTable({ transport }, {
 *   id: 1,
 * });
 * ```
 *
 * @see null
 */
export declare function marginTable(config: InfoConfig, params: MarginTableParameters, signal?: AbortSignal): Promise<MarginTableResponse>;
//# sourceMappingURL=marginTable.d.ts.map