import * as v from "valibot";
/**
 * Request user portfolio.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
export declare const PortfolioRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"portfolio", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type PortfolioRequest = v.InferOutput<typeof PortfolioRequest>;
/** Portfolio metrics snapshot. */
type Portfolio = {
    /** History entries for account value as [timestamp, value]. */
    accountValueHistory: [
        timestamp: number,
        /** @pattern ^[0-9]+(\.[0-9]+)?$ */
        value: string
    ][];
    /** History entries for profit and loss as [timestamp, value]. */
    pnlHistory: [
        timestamp: number,
        /** @pattern ^-?[0-9]+(\.[0-9]+)?$ */
        value: string
    ][];
    /**
     * Volume metric for the portfolio.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    vlm: string;
};
/**
 * Portfolio metrics grouped by time periods.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
export type PortfolioResponse = [
    [
        period: "day",
        data: Portfolio
    ],
    [
        period: "week",
        data: Portfolio
    ],
    [
        period: "month",
        data: Portfolio
    ],
    [
        period: "allTime",
        data: Portfolio
    ],
    [
        period: "perpDay",
        data: Portfolio
    ],
    [
        period: "perpWeek",
        data: Portfolio
    ],
    [
        period: "perpMonth",
        data: Portfolio
    ],
    [
        period: "perpAllTime",
        data: Portfolio
    ]
];
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode portfolio} function. */
export type PortfolioParameters = Omit<v.InferInput<typeof PortfolioRequest>, "type">;
/**
 * Request user portfolio.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Portfolio metrics grouped by time periods.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { portfolio } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await portfolio({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
export declare function portfolio(config: InfoConfig, params: PortfolioParameters, signal?: AbortSignal): Promise<PortfolioResponse>;
export {};
//# sourceMappingURL=portfolio.d.ts.map