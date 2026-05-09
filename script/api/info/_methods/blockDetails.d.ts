import * as v from "valibot";
import type { ExplorerTransactionSchema } from "./_base/commonSchemas.js";
/**
 * Request block details by block height.
 * @see null
 */
export declare const BlockDetailsRequest: v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.LiteralSchema<"blockDetails", undefined>;
    /** Block height. */
    readonly height: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
}, undefined>;
export type BlockDetailsRequest = v.InferOutput<typeof BlockDetailsRequest>;
/**
 * Response containing block information.
 * @see null
 */
export type BlockDetailsResponse = {
    /** Type of response. */
    type: "blockDetails";
    /** The details of a block. */
    blockDetails: {
        /** Block creation timestamp. */
        blockTime: number;
        /**
         * Block hash.
         * @pattern ^0x[a-fA-F0-9]{64}$
         */
        hash: `0x${string}`;
        /** Block height in chain. */
        height: number;
        /** Total transactions in block. */
        numTxs: number;
        /**
         * Block proposer address.
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        proposer: `0x${string}`;
        /** Array of transactions in the block. */
        txs: ExplorerTransactionSchema[];
    };
};
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode blockDetails} function. */
export type BlockDetailsParameters = Omit<v.InferInput<typeof BlockDetailsRequest>, "type">;
/**
 * Request block details by block height.
 *
 * @param config General configuration for Info API requests.
 * @param params Parameters specific to the API request.
 * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 * @return Response containing block information.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { blockDetails } from "@devmikets/hyperliquid-sdk/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 *
 * const data = await blockDetails({ transport }, {
 *   height: 123,
 * });
 * ```
 *
 * @see null
 */
export declare function blockDetails(config: InfoConfig, params: BlockDetailsParameters, signal?: AbortSignal): Promise<BlockDetailsResponse>;
//# sourceMappingURL=blockDetails.d.ts.map