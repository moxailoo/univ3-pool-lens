import * as v from "valibot";
/** Base error class for all SDK errors. */
export declare class HyperliquidError extends Error {
    constructor(message?: string, options?: ErrorOptions);
}
/** Thrown when request parameters fail schema validation. */
export declare class ValidationError extends HyperliquidError {
    cause: v.ValiError<v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>;
    constructor(message: string, options: {
        cause: v.ValiError<v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>;
    });
}
/** Wrapper around `v.parse` that throws {@linkcode ValidationError} instead of `ValiError`. */
export declare function parse<const TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>(schema: TSchema, input: unknown): v.InferOutput<TSchema>;
//# sourceMappingURL=_base.d.ts.map