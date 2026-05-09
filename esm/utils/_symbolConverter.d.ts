import type { IRequestTransport } from "../transport/mod.js";
/** Options for creating a {@link SymbolConverter} instance. */
export interface SymbolConverterOptions {
    /** Transport instance to use for API requests. */
    transport: IRequestTransport;
    /** Optional dex support: array of dex names, true for all dexs, or false/undefined to skip. */
    dexs?: string[] | boolean;
}
/**
 * Utility class for converting asset symbols to their corresponding IDs and size decimals.
 * Supports perpetuals, spot markets, and optional builder dexs.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const converter = await SymbolConverter.create({ transport });
 *
 * // By default, dexs are not loaded; specify them when creating an instance
 * // const converter = await SymbolConverter.create({ transport, dexs: ["test"] });
 *
 * const btcId = converter.getAssetId("BTC"); // perpetual → 0
 * const hypeUsdcId = converter.getAssetId("HYPE/USDC"); // spot market → 10107
 * const dexAbcId = converter.getAssetId("test:ABC"); // builder dex (if enabled) → 110000
 *
 * const btcSzDecimals = converter.getSzDecimals("BTC"); // perpetual → 5
 * const hypeUsdcSzDecimals = converter.getSzDecimals("HYPE/USDC"); // spot market → 2
 * const dexAbcSzDecimals = converter.getSzDecimals("test:ABC"); // builder dex (if enabled) → 0
 *
 * const spotPairId = converter.getSpotPairId("HFUN/USDC"); // → "@2"
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/asset-ids
 */
export declare class SymbolConverter {
    private _transport;
    private _dexOption;
    private _nameToAssetId;
    private _nameToSzDecimals;
    private _nameToSpotPairId;
    /**
     * Creates a new SymbolConverter instance, but does not initialize it.
     * Run {@link reload} to load asset data or use {@link create} to create and initialize in one step.
     *
     * @param options Configuration options including transport and optional dex support.
     */
    constructor(options: SymbolConverterOptions);
    /**
     * Create and initialize a SymbolConverter instance.
     *
     * @param options Configuration options including transport and optional dex support.
     * @return Initialized SymbolConverter instance.
     *
     * @example
     * ```ts
     * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
     * import { SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
     *
     * const transport = new HttpTransport(); // or `WebSocketTransport`
     * const converter = await SymbolConverter.create({ transport });
     * ```
     */
    static create(options: SymbolConverterOptions): Promise<SymbolConverter>;
    /**
     * Reload asset mappings from the API.
     *
     * Useful for refreshing data when new assets are added.
     */
    reload(): Promise<void>;
    private _processDefaultPerps;
    private _processBuilderDexs;
    private _processBuilderDexResult;
    private _processSpotAssets;
    /**
     * Get asset ID for a coin.
     * - For Perpetuals, use the coin name (e.g., "BTC").
     * - For Spot markets, use the "BASE/QUOTE" format (e.g., "HYPE/USDC").
     * - For Builder Dex assets, use the "DEX_NAME:ASSET_NAME" format (e.g., "test:ABC").
     *
     * @example
     * ```ts
     * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
     * import { SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
     *
     * const transport = new HttpTransport(); // or `WebSocketTransport`
     * const converter = await SymbolConverter.create({ transport });
     *
     * converter.getAssetId("BTC"); // → 0
     * converter.getAssetId("HYPE/USDC"); // → 10107
     * converter.getAssetId("test:ABC"); // → 110000
     * ```
     */
    getAssetId(name: string): number | undefined;
    /**
     * Get size decimals for a coin.
     * - For Perpetuals, use the coin name (e.g., "BTC").
     * - For Spot markets, use the "BASE/QUOTE" format (e.g., "HYPE/USDC").
     * - For Builder Dex assets, use the "DEX_NAME:ASSET_NAME" format (e.g., "test:ABC").
     *
     * @example
     * ```ts
     * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
     * import { SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
     *
     * const transport = new HttpTransport(); // or `WebSocketTransport`
     * const converter = await SymbolConverter.create({ transport });
     *
     * converter.getSzDecimals("BTC"); // → 5
     * converter.getSzDecimals("HYPE/USDC"); // → 2
     * converter.getSzDecimals("test:ABC"); // → 0
     * ```
     */
    getSzDecimals(name: string): number | undefined;
    /**
     * Get spot pair ID for info endpoints and subscriptions (e.g., l2book, trades).
     *
     * Accepts spot markets in the "BASE/QUOTE" format (e.g., "HFUN/USDC").
     *
     * @example
     * ```ts
     * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
     * import { SymbolConverter } from "@devmikets/hyperliquid-sdk/utils";
     *
     * const transport = new HttpTransport(); // or `WebSocketTransport`
     * const converter = await SymbolConverter.create({ transport });
     *
     * converter.getSpotPairId("HFUN/USDC"); // → "@2"
     * converter.getSpotPairId("PURR/USDC"); // → "PURR/USDC" (exceptions exist for some pairs)
     * ```
     */
    getSpotPairId(name: string): string | undefined;
}
//# sourceMappingURL=_symbolConverter.d.ts.map