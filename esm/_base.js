import * as v from "valibot";
/** Base error class for all SDK errors. */
export class HyperliquidError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = "HyperliquidError";
    }
}
/** Thrown when request parameters fail schema validation. */
export class ValidationError extends HyperliquidError {
    cause;
    constructor(message, options) {
        super(message, options);
        this.name = "ValidationError";
        this.cause = options.cause;
    }
}
/** Wrapper around `v.parse` that throws {@linkcode ValidationError} instead of `ValiError`. */
export function parse(schema, input) {
    try {
        return v.parse(schema, input);
    }
    catch (error) {
        const valiError = error;
        throw new ValidationError(v.summarize(valiError.issues), { cause: valiError });
    }
}
//# sourceMappingURL=_base.js.map