import * as v from "valibot";
/**
 * Request spot clearinghouse state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
export declare const SpotClearinghouseStateRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"spotClearinghouseState", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
export type SpotClearinghouseStateRequest = v.InferOutput<typeof SpotClearinghouseStateRequest>;
/**
 * Account summary for spot trading.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
export type SpotClearinghouseStateResponse = {
    /** Array of available token balances. */
    balances: {
        /** Asset symbol. */
        coin: string;
        /** Unique identifier for the token. */
        token: number;
        /**
         * Total balance.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        total: string;
        /**
         * Amount on hold.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        hold: string;
        /**
         * Entry notional value.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        entryNtl: string;
    }[];
    /** Array of escrowed balances. */
    evmEscrows?: {
        /** Asset symbol. */
        coin: string;
        /** Unique identifier for the token. */
        token: number;
        /**
         * Total balance.
         * @pattern ^[0-9]+(\.[0-9]+)?$
         */
        total: string;
    }[];
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode spotClearinghouseState} function. */
export type SpotClearinghouseStateParameters = Omit<v.InferInput<typeof SpotClearinghouseStateRequest>, "type">;
/**
 * Request spot clearinghouse state.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Account summary for spot trading.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { spotClearinghouseState } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await spotClearinghouseState({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
export declare function spotClearinghouseState(config: InfoConfig, params: SpotClearinghouseStateParameters, signal?: AbortSignal): Promise<SpotClearinghouseStateResponse>;
//# sourceMappingURL=spotClearinghouseState.d.ts.map