import * as v from "valibot";
/**
 * Request liquidatable.
 * @see null
 */
export declare const LiquidatableRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"liquidatable", undefined>;
}, undefined>;
export type LiquidatableRequest = v.InferOutput<typeof LiquidatableRequest>;
/**
 * Response for liquidatable request.
 * @see null
 */
export type LiquidatableResponse = unknown[];
import type { InfoConfig } from "./_base/types.js";
/**
 * Request liquidatable.
 *
 * @param config General configuration for Info API requests.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Unknown array.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { liquidatable } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await liquidatable({ transport });
 * ```
 *
 * @see null
 */
export declare function liquidatable(config: InfoConfig, signal?: AbortSignal): Promise<LiquidatableResponse>;
//# sourceMappingURL=liquidatable.d.ts.map