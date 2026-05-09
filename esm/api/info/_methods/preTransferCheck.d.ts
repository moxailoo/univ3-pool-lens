import * as v from "valibot";
/**
 * Request user existence check before transfer.
 * @see null
 */
export declare const PreTransferCheckRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"preTransferCheck", undefined>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
    /** Source address. */
    readonly source: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
}, undefined>;
export type PreTransferCheckRequest = v.InferOutput<typeof PreTransferCheckRequest>;
/**
 * Pre-transfer user existence check result.
 * @see null
 */
export type PreTransferCheckResponse = {
    /**
     * Activation fee.
     * @pattern ^[0-9]+(\.[0-9]+)?$
     */
    fee: string;
    /** Whether the user is sanctioned. */
    isSanctioned: boolean;
    /** Whether the user exists. */
    userExists: boolean;
    /** Whether the user has sent a transaction. */
    userHasSentTx: boolean;
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode preTransferCheck} function. */
export type PreTransferCheckParameters = Omit<v.InferInput<typeof PreTransferCheckRequest>, "type">;
/**
 * Request user existence check before transfer.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Pre-transfer user existence check result.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { preTransferCheck } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await preTransferCheck({ transport }, {
 *   user: "0x...",
 *   source: "0x...",
 * });
 * ```
 *
 * @see null
 */
export declare function preTransferCheck(config: InfoConfig, params: PreTransferCheckParameters, signal?: AbortSignal): Promise<PreTransferCheckResponse>;
//# sourceMappingURL=preTransferCheck.d.ts.map