"use strict";
/**
 * Error types and utilities for Exchange API responses.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequestError = void 0;
exports.assertSuccessResponse = assertSuccessResponse;
const _base_js_1 = require("../../../../_base.js");
// ============================================================
// Error Classes
// ============================================================
/** Thrown when Exchange API returns an error response. */
class ApiRequestError extends _base_js_1.HyperliquidError {
    response;
    /**
     * @param response Raw API response that contains the error
     */
    constructor(response) {
        const message = extractErrorMessage(response) ||
            "An unknown error occurred while processing an API request. See `response` for more details.";
        super(message);
        this.name = "ApiRequestError";
        this.response = response;
    }
}
exports.ApiRequestError = ApiRequestError;
// ============================================================
// Error Detection (Duck Typing)
// ============================================================
/** Check if value has an error property. */
function hasError(value) {
    return typeof value === "object" && value !== null &&
        "error" in value && typeof value.error === "string";
}
/** Check if response has error status. */
function hasErrorStatus(response) {
    return typeof response === "object" && response !== null &&
        "status" in response && response.status === "err";
}
/** Check if response has statuses array with errors. */
function hasStatusesWithErrors(response) {
    if (typeof response !== "object" || response === null)
        return false;
    const r = response;
    const statuses = r.response?.data?.statuses;
    return Array.isArray(statuses) && statuses.some(hasError);
}
/** Check if response has single status with error. */
function hasSingleStatusWithError(response) {
    if (typeof response !== "object" || response === null)
        return false;
    const r = response;
    return hasError(r.response?.data?.status);
}
/** Extract error message from response using duck typing. */
function extractErrorMessage(response) {
    if (hasErrorStatus(response)) {
        return response.response;
    }
    const r = response;
    if (Array.isArray(r.response?.data?.statuses)) {
        const errors = r.response.data.statuses.reduce((acc, status, index) => {
            if (hasError(status))
                acc.push(`Order ${index}: ${status.error}`);
            return acc;
        }, []);
        if (errors.length > 0)
            return errors.join(", ");
    }
    if (hasError(r.response?.data?.status)) {
        return r.response.data.status.error;
    }
    return undefined;
}
// ============================================================
// Assertions
// ============================================================
/**
 * Assert that response is successful, throw ApiRequestError otherwise.
 *
 * @param response Raw API response to validate
 *
 * @throws {ApiRequestError} If the response contains an error
 */
function assertSuccessResponse(response) {
    if (hasErrorStatus(response) || hasStatusesWithErrors(response) || hasSingleStatusWithError(response)) {
        throw new ApiRequestError(response);
    }
}
//# sourceMappingURL=errors.js.map