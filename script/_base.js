"use strict";
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
exports.ValidationError = exports.HyperliquidError = void 0;
exports.parse = parse;
const v = __importStar(require("valibot"));
/** Base error class for all SDK errors. */
class HyperliquidError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = "HyperliquidError";
    }
}
exports.HyperliquidError = HyperliquidError;
/** Thrown when request parameters fail schema validation. */
class ValidationError extends HyperliquidError {
    cause;
    constructor(message, options) {
        super(message, options);
        this.name = "ValidationError";
        this.cause = options.cause;
    }
}
exports.ValidationError = ValidationError;
/** Wrapper around `v.parse` that throws {@linkcode ValidationError} instead of `ValiError`. */
function parse(schema, input) {
    try {
        return v.parse(schema, input);
    }
    catch (error) {
        const valiError = error;
        throw new ValidationError(v.summarize(valiError.issues), { cause: valiError });
    }
}
//# sourceMappingURL=_base.js.map