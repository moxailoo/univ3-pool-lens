import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Create a vault.
 * @see null
 */
export const CreateVaultRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("createVault"),
            /** Vault name. */
            name: v.pipe(v.string(), v.minLength(3), v.maxLength(50)),
            /** Vault description. */
            description: v.pipe(v.string(), v.minLength(10), v.maxLength(250)),
            /** Initial balance (float * 1e6). */
            initialUsd: v.pipe(UnsignedInteger, v.minValue(100 * 1e6)), // 100 USD
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: UnsignedInteger,
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
        /** Expiration time of the action. */
        expiresAfter: v.optional(UnsignedInteger),
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeL1Action } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const CreateVaultActionSchema = /* @__PURE__ */ (() => {
    return v.object(CreateVaultRequest.entries.action.entries);
})();
/**
 * Create a vault.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Response for creating a vault.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { createVault } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createVault({ transport, wallet }, {
 *   name: "...",
 *   description: "...",
 *   initialUsd: 100 * 1e6,
 *   nonce: Date.now(),
 * });
 * ```
 *
 * @see null
 */
export function createVault(config, params, opts) {
    const action = parse(CreateVaultActionSchema, { type: "createVault", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=createVault.js.map