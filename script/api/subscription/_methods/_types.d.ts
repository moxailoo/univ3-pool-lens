import type { ISubscriptionTransport } from "../../../transport/mod.js";
/** Configuration for subscription API requests. */
export interface SubscriptionConfig<T extends ISubscriptionTransport = ISubscriptionTransport> {
    /** The transport used to connect to the Hyperliquid API. */
    transport: T;
}
//# sourceMappingURL=_types.d.ts.map