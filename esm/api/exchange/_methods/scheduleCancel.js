import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { SignatureSchema } from "./_base/commonSchemas.js";
/**
 * Schedule a cancel-all operation at a future time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
export const ScheduleCancelRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("scheduleCancel"),
            /**
             * Scheduled time (in ms since epoch).
             * Must be at least 5 seconds in the future.
             *
             * If not specified, will cause all scheduled cancel operations to be deleted.
             */
            time: v.optional(UnsignedInteger),
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
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeL1Action } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const ScheduleCancelActionSchema = /* @__PURE__ */ (() => {
    return v.object(ScheduleCancelRequest.entries.action.entries);
})();
export function scheduleCancel(config, paramsOrOpts, maybeOpts) {
    const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
    const params = isFirstArgParams ? paramsOrOpts : {};
    const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
    const action = parse(ScheduleCancelActionSchema, { type: "scheduleCancel", ...params });
    return executeL1Action(config, action, opts);
}
//# sourceMappingURL=scheduleCancel.js.map