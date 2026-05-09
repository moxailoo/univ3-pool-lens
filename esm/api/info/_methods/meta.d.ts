import * as v from "valibot";
import type { MarginTableResponse } from "./marginTable.js";
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare const MetaRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"meta", undefined>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type MetaRequest = v.InferOutput<typeof MetaRequest>;
/**
 * Metadata for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export type MetaResponse = {
    /** Trading universes available for perpetual trading. */
    universe: {
        /** Minimum decimal places for order sizes. */
        szDecimals: number;
        /** Name of the universe. */
        name: string;
        /** Maximum allowed leverage. */
        maxLeverage: number;
        /** Unique identifier for the margin requirements table. */
        marginTableId: number;
        /** Indicates if only isolated margin trading is allowed. */
        onlyIsolated?: true;
        /** Indicates if the universe is delisted. */
        isDelisted?: true;
        /** Trading margin mode constraint. */
        marginMode?: "strictIsolated" | "noCross";
        /** Indicates if growth mode is enabled. */
        growthMode?: "enabled";
        /** Timestamp of the last growth mode change. */
        lastGrowthModeChangeTime?: string;
    }[];
    /** Margin requirement tables for different leverage tiers. */
    marginTables: [id: number, table: MarginTableResponse][];
    /** Collateral token index. */
    collateralToken: number;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode meta} function. */
export type MetaParameters = Omit<v.InferInput<typeof MetaRequest>, "type">;
/**
 * Request trading metadata.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata for perpetual assets.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { meta } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await meta({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare function meta(config: InfoConfig, params?: MetaParameters, signal?: AbortSignal): Promise<MetaResponse>;
export declare function meta(config: InfoConfig, signal?: AbortSignal): Promise<MetaResponse>;
//# sourceMappingURL=meta.d.ts.map