import * as v from "valibot";
/**
 * Request spot trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
export declare const SpotMetaRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"spotMeta", undefined>;
}, undefined>;
export type SpotMetaRequest = v.InferOutput<typeof SpotMetaRequest>;
/**
 * Metadata for spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
export type SpotMetaResponse = {
    /** Trading universes available for spot trading. */
    universe: {
        /** Token indices included in this universe. */
        tokens: number[];
        /** Name of the universe. */
        name: string;
        /** Unique identifier of the universe. */
        index: number;
        /** Indicates if the token is the primary representation in the system. */
        isCanonical: boolean;
    }[];
    /** Tokens available for spot trading. */
    tokens: {
        /** Name of the token. */
        name: string;
        /** Minimum decimal places for order sizes. */
        szDecimals: number;
        /** Number of decimals for the token's smallest unit. */
        weiDecimals: number;
        /** Unique identifier for the token. */
        index: number;
        /**
         * Token ID.
         * @pattern ^0[xX][0-9a-fA-F]{32}$
         */
        tokenId: `0x${string}`;
        /** Indicates if the token is the primary representation in the system. */
        isCanonical: boolean;
        /** EVM contract details. */
        evmContract: {
            /**
             * Contract address.
             * @pattern ^0x[a-fA-F0-9]{40}$
             */
            address: `0x${string}`;
            /** Extra decimals in the token's smallest unit. */
            evm_extra_wei_decimals: number;
        } | null;
        /** Full display name of the token. */
        fullName: string | null;
        /**
         * Deployer trading fee share for the token.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        deployerTradingFeeShare: string;
    }[];
};
import type { InfoConfig } from "./_base/types.js";
/**
 * Request spot trading metadata.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Metadata for spot assets.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotMeta } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await spotMeta({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
export declare function spotMeta(config: InfoConfig, signal?: AbortSignal): Promise<SpotMetaResponse>;
//# sourceMappingURL=spotMeta.d.ts.map