import { HyperliquidError } from "../_base.js";
/** Thrown when an error occurs at the transport level (e.g., timeout). */
export class TransportError extends HyperliquidError {
    constructor(message, options) {
        super(message, options);
        this.name = "TransportError";
    }
}
//# sourceMappingURL=_base.js.map