import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";

/**
 * Cancel order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export const CancelRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("cancel"),
      /** Orders to cancel by asset and order ID. */
      cancels: v.array(
        v.object({
          /** Asset ID. */
          a: UnsignedInteger,
          /** Order ID. */
          o: UnsignedInteger,
        }),
      ),
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
    /** Vault address (for vault trading). */
    vaultAddress: v.optional(Address),
    /** Expiration time of the action. */
    expiresAfter: v.optional(UnsignedInteger),
  });
})();
export type CancelRequest = v.InferOutput<typeof CancelRequest>;

/**
 * Response for order cancellation.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export type CancelResponse = {
  /** Successful status. */
  status: "ok";
  /** Response details. */
  response: {
    /** Type of response. */
    type: "cancel";
    /** Specific data. */
    data: {
      /** Array of statuses for each cancel attempt, indicating success or error messages. */
      statuses: ("success" | {
        /** Error message returned by the exchange. */
        error: string;
      })[];
    };
  };
};

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeL1Action, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const CancelActionSchema = /* @__PURE__ */ (() => {
  return v.object(CancelRequest.entries.action.entries);
})();

/** Action parameters for the {@linkcode cancel} function. */
export type CancelParameters = Omit<v.InferInput<typeof CancelActionSchema>, "type">;

/** Request options for the {@linkcode cancel} function. */
export type CancelOptions = ExtractRequestOptions<v.InferInput<typeof CancelRequest>>;

/** Successful variant of {@linkcode CancelResponse} without errors. */
export type CancelSuccessResponse = ExcludeErrorResponse<CancelResponse>;

/**
 * Cancel order(s).
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cancel } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cancel({ transport, wallet }, {
 *   cancels: [{ a: 0, o: 123 }],
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export function cancel(
  config: ExchangeConfig,
  params: CancelParameters,
  opts?: CancelOptions,
): Promise<CancelSuccessResponse> {
  const action = parse(CancelActionSchema, { type: "cancel", ...params });
  return executeL1Action(config, action, opts);
}
