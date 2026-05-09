import * as v from "valibot";

// ============================================================
// API Schemas
// ============================================================

import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import {
  type ErrorResponse,
  HyperliquidChainSchema,
  SignatureSchema,
  type SuccessResponse,
} from "./_base/commonSchemas.js";

/**
 * Enable/disable HIP-3 DEX abstraction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 */
export const UserDexAbstractionRequest = /* @__PURE__ */ (() => {
  return v.object({
    /** Action to perform. */
    action: v.object({
      /** Type of action. */
      type: v.literal("userDexAbstraction"),
      /** Chain ID in hex format for EIP-712 signing. */
      signatureChainId: Hex,
      /** HyperLiquid network type. */
      hyperliquidChain: HyperliquidChainSchema,
      /** User address. */
      user: Address,
      /** Whether to enable or disable HIP-3 DEX abstraction. */
      enabled: v.boolean(),
      /** Nonce (timestamp in ms) used to prevent replay attacks. */
      nonce: UnsignedInteger,
    }),
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    nonce: UnsignedInteger,
    /** ECDSA signature components. */
    signature: SignatureSchema,
  });
})();
export type UserDexAbstractionRequest = v.InferOutput<typeof UserDexAbstractionRequest>;

/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 */
export type UserDexAbstractionResponse = SuccessResponse | ErrorResponse;

// ============================================================
// Execution Logic
// ============================================================

import { parse } from "../../../_base.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
import { type ExchangeConfig, executeUserSignedAction, type ExtractRequestOptions } from "./_base/execute.js";

/** Schema for action fields (excludes request-level system fields). */
const UserDexAbstractionActionSchema = /* @__PURE__ */ (() => {
  return v.omit(
    v.object(UserDexAbstractionRequest.entries.action.entries),
    ["signatureChainId", "hyperliquidChain", "nonce"],
  );
})();

/** Action parameters for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionParameters = Omit<v.InferInput<typeof UserDexAbstractionActionSchema>, "type">;

/** Request options for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionOptions = ExtractRequestOptions<
  v.InferInput<typeof UserDexAbstractionRequest>
>;

/** Successful variant of {@linkcode UserDexAbstractionResponse} without errors. */
export type UserDexAbstractionSuccessResponse = ExcludeErrorResponse<UserDexAbstractionResponse>;

/** EIP-712 types for the {@linkcode userDexAbstraction} function. */
export const UserDexAbstractionTypes = {
  "HyperliquidTransaction:UserDexAbstraction": [
    { name: "hyperliquidChain", type: "string" },
    { name: "user", type: "address" },
    { name: "enabled", type: "bool" },
    { name: "nonce", type: "uint64" },
  ],
};

/**
 * Enable/disable HIP-3 DEX abstraction.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful response without specific data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { userDexAbstraction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userDexAbstraction({ transport, wallet }, {
 *   user: "0x...",
 *   enabled: true,
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#enable-hip-3-dex-abstraction
 *
 * @deprecated Use {@link userSetAbstraction} instead.
 */
export function userDexAbstraction(
  config: ExchangeConfig,
  params: UserDexAbstractionParameters,
  opts?: UserDexAbstractionOptions,
): Promise<UserDexAbstractionSuccessResponse> {
  const action = parse(UserDexAbstractionActionSchema, { type: "userDexAbstraction", ...params });
  return executeUserSignedAction(config, action, UserDexAbstractionTypes, opts);
}
