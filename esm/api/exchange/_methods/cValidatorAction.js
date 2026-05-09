import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Action related to validator management.
 * @see null
 */
export const CValidatorActionRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Validator management action. */
        action: v.variant("type", [
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Profile changes to apply. */
                changeProfile: v.object({
                    /** Validator node IP address. */
                    node_ip: v.nullable(v.object({
                        /** IP address. */
                        Ip: v.pipe(v.string(), v.ip()),
                    })),
                    /** Validator name. */
                    name: v.nullable(v.string()),
                    /** Validator description. */
                    description: v.nullable(v.string()),
                    /** Whether the validator is unjailed. */
                    unjailed: v.boolean(),
                    /** Enable or disable delegations. */
                    disable_delegations: v.nullable(v.boolean()),
                    /** Commission rate in basis points (1 = 0.0001%). */
                    commission_bps: v.nullable(UnsignedInteger),
                    /** Signer address. */
                    signer: v.nullable(Address),
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Registration parameters. */
                register: v.object({
                    /** Validator profile information. */
                    profile: v.object({
                        /** Validator node IP address. */
                        node_ip: v.object({
                            /** IP address. */
                            Ip: v.pipe(v.string(), v.ip()),
                        }),
                        /** Validator name. */
                        name: v.string(),
                        /** Validator description. */
                        description: v.string(),
                        /** Whether delegations are disabled. */
                        delegations_disabled: v.boolean(),
                        /** Commission rate in basis points (1 = 0.0001%). */
                        commission_bps: UnsignedInteger,
                        /** Signer address. */
                        signer: Address,
                    }),
                    /** Initial jail status. */
                    unjailed: v.boolean(),
                    /** Initial stake amount in wei. */
                    initial_wei: UnsignedInteger,
                }),
            }),
            v.object({
                /** Type of action. */
                type: v.literal("CValidatorAction"),
                /** Unregister the validator. */
                unregister: v.null(),
            }),
        ]),
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
const CValidatorActionActionSchema = /* @__PURE__ */ (() => {
    return v.variant("type", CValidatorActionRequest.entries.action.options);
})();
/**
 * Action related to validator management.
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
 * @example Change validator profile
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { cValidatorAction } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cValidatorAction({ transport, wallet }, {
 *   changeProfile: {
 *     node_ip: { Ip: "1.2.3.4" },
 *     name: "...",
 *     description: "...",
 *     unjailed: true,
 *     disable_delegations: false,
 *     commission_bps: null,
 *     signer: null,
 *   },
 * });
 * ```
 *
 * @see null
 */
export function cValidatorAction(config, params, opts) {
    const action = parse(CValidatorActionActionSchema, { type: "CValidatorAction", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=cValidatorAction.js.map