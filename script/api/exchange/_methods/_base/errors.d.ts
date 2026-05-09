/**
 * Error types and utilities for Exchange API responses.
 * @module
 */
import { HyperliquidError } from "../../../../_base.js";
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
/** Exclude error variants from response type. */
export type ExcludeErrorResponse<T> = T extends {
    status: "err";
} ? never : T extends {
    response: {
        data: {
            statuses: ReadonlyArray<infer S>;
        };
    };
} ? Exclude<S, {
    error: unknown;
}> extends never ? never : Prettify<Omit<T, "response"> & {
    response: Prettify<Omit<T["response"], "data"> & {
        data: {
            statuses: Array<Exclude<S, {
                error: unknown;
            }>>;
        };
    }>;
}> : T extends {
    response: {
        data: {
            status: infer S;
        };
    };
} ? S extends {
    error: unknown;
} ? never : Prettify<Omit<T, "response"> & {
    response: Prettify<Omit<T["response"], "data"> & {
        data: {
            status: Exclude<S, {
                error: unknown;
            }>;
        };
    }>;
}> : T;
/** Thrown when Exchange API returns an error response. */
export declare class ApiRequestError extends HyperliquidError {
    readonly response: unknown;
    /**
     * @param response Raw API response that contains the error
     */
    constructor(response: unknown);
}
/**
 * Assert that response is successful, throw ApiRequestError otherwise.
 *
 * @param response Raw API response to validate
 *
 * @throws {ApiRequestError} If the response contains an error
 */
export declare function assertSuccessResponse(response: unknown): void;
export {};
//# sourceMappingURL=errors.d.ts.map