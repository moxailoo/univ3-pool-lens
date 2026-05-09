/**
 * Common schemas and types shared across Exchange API methods.
 * @module
 */
import * as v from "valibot";
import { Hex } from "../../../_schemas.js";
/** ECDSA signature components. */
export const SignatureSchema = /* @__PURE__ */ (() => {
    return v.object({
        /** First 32-byte component. */
        r: v.pipe(Hex, v.length(66)),
        /** Second 32-byte component. */
        s: v.pipe(Hex, v.length(66)),
        /** Recovery identifier. */
        v: v.picklist([27, 28]),
    });
})();
/** HyperLiquid network type. */
export const HyperliquidChainSchema = /* @__PURE__ */ (() => {
    return v.picklist(["Mainnet", "Testnet"]);
})();
//# sourceMappingURL=commonSchemas.js.map