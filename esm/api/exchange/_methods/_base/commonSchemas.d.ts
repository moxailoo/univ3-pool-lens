/**
 * Common schemas and types shared across Exchange API methods.
 * @module
 */
import * as v from "valibot";
/** Error response for failed operations. */
export type ErrorResponse = {
    /** Error status. */
    status: "err";
    /** Error message. */
    response: string;
};
/** Successful response without specific data. */
export type SuccessResponse = {
    /** Successful status. */
    status: "ok";
    /** Response details. */
    response: {
        /** Type of response. */
        type: "default";
    };
};
/** ECDSA signature components. */
export declare const SignatureSchema: v.ObjectSchema<{
    /** First 32-byte component. */
    readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
    /** Second 32-byte component. */
    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>;
    /** Recovery identifier. */
    readonly v: v.PicklistSchema<[27, 28], undefined>;
}, undefined>;
export type SignatureSchema = v.InferOutput<typeof SignatureSchema>;
/** HyperLiquid network type. */
export declare const HyperliquidChainSchema: v.PicklistSchema<["Mainnet", "Testnet"], undefined>;
export type HyperliquidChainSchema = v.InferOutput<typeof HyperliquidChainSchema>;
//# sourceMappingURL=commonSchemas.d.ts.map