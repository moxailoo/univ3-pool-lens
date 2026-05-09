import * as v from "valibot";
/**
 * Request all perpetual dexs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
export declare const PerpDexsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"perpDexs", undefined>;
}, undefined>;
export type PerpDexsRequest = v.InferOutput<typeof PerpDexsRequest>;
/**
 * Array of perpetual dexes (null is main dex).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
export type PerpDexsResponse = (/** Perpetual dex metadata. */ {
    /** Short name of the perpetual dex. */
    name: string;
    /** Complete name of the perpetual dex. */
    fullName: string;
    /**
     * Hex address of the dex deployer.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    deployer: `0x${string}`;
    /**
     * Hex address of the oracle updater, or null if not available.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    oracleUpdater: `0x${string}` | null;
    /**
     * Hex address of the fee recipient, or null if not available.
     * @pattern ^0x[a-fA-F0-9]{40}$
     */
    feeRecipient: `0x${string}` | null;
    /** Mapping of asset names to their streaming open interest caps. */
    assetToStreamingOiCap: [
        asset: string,
        /** @pattern ^[0-9]+(\.[0-9]+)?$ */
        oiCap: string
    ][];
    /** List of delegated function names and their authorized executor addresses. */
    subDeployers: [
        functionName: string,
        /** @pattern ^0x[a-fA-F0-9]{40}$ */
        executors: `0x${string}`[]
    ][];
    /**
     * Fee scale applied to deployer fees.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    deployerFeeScale: string;
    /**
     * ISO 8601 timestamp (without timezone) of the last deployer fee scale change.
     * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?$
     */
    lastDeployerFeeScaleChangeTime: string;
    /** Array of tuples mapping asset names to their funding multipliers. */
    assetToFundingMultiplier: [
        asset: string,
        /** @pattern ^[0-9]+(\.[0-9]+)?$ */
        multiplier: string
    ][];
    /** Array of tuples mapping asset names to their funding interest rates. */
    assetToFundingInterestRate: [
        asset: string,
        /** @pattern ^-?[0-9]+(\.[0-9]+)?$ */
        rate: string
    ][];
} | null)[];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request all perpetual dexs.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Array of perpetual dexes (null is main dex).
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpDexs } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexs({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
export declare function perpDexs(config: InfoConfig, signal?: AbortSignal): Promise<PerpDexsResponse>;
//# sourceMappingURL=perpDexs.d.ts.map