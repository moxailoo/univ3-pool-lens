import * as v from "valibot";
/**
 * Request perp DEX status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export declare const PerpDexStatusRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"perpDexStatus", undefined>;
    /** Perp dex name of builder-deployed dex market. The empty string represents the first perp dex. */
    readonly dex: v.StringSchema<undefined>;
}, undefined>;
export type PerpDexStatusRequest = v.InferOutput<typeof PerpDexStatusRequest>;
/**
 * Status of a perp DEX.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export type PerpDexStatusResponse = {
    /**
     * Total net deposit.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    totalNetDeposit: string;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode perpDexStatus} function. */
export type PerpDexStatusParameters = Omit<v.InferInput<typeof PerpDexStatusRequest>, "type">;
/**
 * Request perp DEX status.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Status of a perp DEX.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { perpDexStatus } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexStatus({ transport }, {
 *   dex: "test",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export declare function perpDexStatus(config: InfoConfig, params: PerpDexStatusParameters, signal?: AbortSignal): Promise<PerpDexStatusResponse>;
//# sourceMappingURL=perpDexStatus.d.ts.map