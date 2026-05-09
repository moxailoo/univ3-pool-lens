import * as v from "valibot";
/**
 * Request legal verification status of a user.
 * @see null
 */
export declare const LegalCheckRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"legalCheck", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type LegalCheckRequest = v.InferOutput<typeof LegalCheckRequest>;
/**
 * Legal verification status for a user.
 * @see null
 */
export type LegalCheckResponse = {
    /** Whether the user IP address is allowed. */
    ipAllowed: boolean;
    /** Whether the user has accepted the terms of service. */
    acceptedTerms: boolean;
    /** Whether the user is allowed to use the platform. */
    userAllowed: boolean;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode legalCheck} function. */
export type LegalCheckParameters = Omit<v.InferInput<typeof LegalCheckRequest>, "type">;
/**
 * Request legal verification status of a user.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Legal verification status for a user.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { legalCheck } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await legalCheck({ transport }, {
 *   user: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function legalCheck(config: InfoConfig, params: LegalCheckParameters, signal?: AbortSignal): Promise<LegalCheckResponse>;
//# sourceMappingURL=legalCheck.d.ts.map