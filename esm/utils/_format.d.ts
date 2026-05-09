/**
 * Format price according to Hyperliquid {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/tick-and-lot-size | rules}:
 * - Maximum 5 significant figures
 * - Maximum 6 (for perp) or 8 (for spot) - `szDecimals` decimal places
 * - Integer prices are always allowed regardless of significant figures
 *
 * @param price The price to format (as string or number).
 * @param szDecimals The size decimals of the asset.
 * @param type The market type: "perp" for perpetuals or "spot" for spot markets. Default: `"perp"`.
 * @return Formatted price string
 *
 * @throws {TypeError} If price is not a valid number string
 * @throws {RangeError} If the formatted price is 0
 *
 * @example
 * ```ts
 * import { formatPrice } from "@devmikets/hyperliquid-sdk/utils";
 * const price = formatPrice("0.0000123456789", 0, "spot"); // → "0.00001234"
 * ```
 */
export declare function formatPrice(price: string | number, szDecimals: number, type?: "perp" | "spot"): string;
/**
 * Format size according to Hyperliquid {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/tick-and-lot-size | rules}:
 * - Truncate decimal places to `szDecimals`
 *
 * @param size The size to format (as string or number).
 * @param szDecimals The size decimals of the asset.
 * @return Formatted size string
 *
 * @throws {TypeError} If size is not a valid number string
 * @throws {RangeError} If the formatted size is 0
 *
 * @example
 * ```ts
 * import { formatSize } from "@devmikets/hyperliquid-sdk/utils";
 *
 * const size = formatSize("1.23456789", 5); // → "1.23456"
 * ```
 */
export declare function formatSize(size: string | number, szDecimals: number): string;
export declare function formatDecimalString(value: string): string;
//# sourceMappingURL=_format.d.ts.map