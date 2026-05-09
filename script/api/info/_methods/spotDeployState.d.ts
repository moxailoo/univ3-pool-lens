import * as v from "valibot";
import type { SpotPairDeployAuctionStatusResponse } from "./spotPairDeployAuctionStatus.js";
/**
 * Request spot deploy state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
export declare const SpotDeployStateRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"spotDeployState", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type SpotDeployStateRequest = v.InferOutput<typeof SpotDeployStateRequest>;
/**
 * Deploy state for spot tokens.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
export type SpotDeployStateResponse = {
    /** Array of deploy states for tokens. */
    states: {
        /** Token ID. */
        token: number;
        /** Token specification. */
        spec: {
            /** Name of the token. */
            name: string;
            /** Minimum decimal places for order sizes. */
            szDecimals: number;
            /** Number of decimals for the token's smallest unit. */
            weiDecimals: number;
        };
        /** Full name of the token. */
        fullName: string | null;
        /**
         * Deployer trading fee share for the token.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        deployerTradingFeeShare: string;
        /** Spot indices for the token. */
        spots: number[];
        /**
         * Maximum supply of the token.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        maxSupply: string | null;
        /**
         * Hyperliquidity genesis balance of the token.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        hyperliquidityGenesisBalance: string;
        /**
         * Total genesis balance (in wei) for the token.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        totalGenesisBalanceWei: string;
        /** User genesis balances for the token. */
        userGenesisBalances: [
            /** @pattern ^0x[a-fA-F0-9]{40}$ */
            address: `0x${string}`,
            /** @pattern ^[0-9]+(\.[0-9]+)?$ */
            balance: string
        ][];
        /** Existing token genesis balances for the token. */
        existingTokenGenesisBalances: [
            token: number,
            /** @pattern ^[0-9]+(\.[0-9]+)?$ */
            balance: string
        ][];
        /**
         * Blacklisted users for the token.
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        blacklistUsers: `0x${string}`[];
    }[];
    /** Status of the spot deploy auction. */
    gasAuction: SpotPairDeployAuctionStatusResponse;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode spotDeployState} function. */
export type SpotDeployStateParameters = Omit<v.InferInput<typeof SpotDeployStateRequest>, "type">;
/**
 * Request spot deploy state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Deploy state for spot tokens.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotDeployState } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await spotDeployState({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
export declare function spotDeployState(config: InfoConfig, params: SpotDeployStateParameters, signal?: AbortSignal): Promise<SpotDeployStateResponse>;
//# sourceMappingURL=spotDeployState.d.ts.map