"use strict";
// deno-lint-ignore-file valibot-project/require-name-suffix
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percent = exports.Cloid = exports.Address = exports.Hex = exports.UnsignedInteger = exports.Integer = exports.Decimal = exports.UnsignedDecimal = void 0;
/**
 * Common valibot schemas for primitive types used across the API.
 * @module
 */
const v = __importStar(require("valibot"));
const _format_js_1 = require("../utils/_format.js");
// ============================================================
// Number
// ============================================================
/** Unsigned decimal number as a string (e.g., "123.45"). */
exports.UnsignedDecimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => (0, _format_js_1.formatDecimalString)(value)), v.regex(/^[0-9]+(\.[0-9]+)?$/));
})();
/** Decimal number as a string, can be negative (e.g., "-123.45"). */
exports.Decimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => (0, _format_js_1.formatDecimalString)(value)), v.regex(/^-?[0-9]+(\.[0-9]+)?$/));
})();
/** Safe integer number. */
exports.Integer = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toNumber(), v.number(), // HACK: for correct JSONSchema generation
    v.safeInteger());
})();
/** Unsigned safe integer number (>= 0). */
exports.UnsignedInteger = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toNumber(), v.number(), // HACK: for correct JSONSchema generation
    v.safeInteger(), v.minValue(0));
})();
// ============================================================
// Hex
// ============================================================
/** Hexadecimal string starting with "0x". */
exports.Hex = (() => {
    return v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.transform((value) => value.toLowerCase()));
})();
/** Ethereum address (42 characters hex string). */
exports.Address = (() => {
    return v.pipe(exports.Hex, v.length(42));
})();
/** Client order ID (34 characters hex string). */
exports.Cloid = (() => {
    return v.pipe(exports.Hex, v.length(34));
})();
// ============================================================
// Other
// ============================================================
/** Percentage string (e.g., "50%"). */
exports.Percent = (() => {
    return v.pipe(v.string(), v.regex(/^[0-9]+(\.[0-9]+)?%$/), v.transform((value) => value));
})();
//# sourceMappingURL=_schemas.js.map