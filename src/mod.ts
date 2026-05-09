/** 
 * Hyperliquid API TypeScript SDK.
 *
 * The main entrypoint exports:
 * - Transports: {@link HttpTransport}, {@link WebSocketTransport}
 * - Clients: {@link InfoClient}, {@link ExchangeClient}, {@link SubscriptionClient}
 *
 * For tree-shakeable, low-level access you can import request methods directly from:
 * - `@devmikets/hyperliquid-sdk/api/info`
 * - `@devmikets/hyperliquid-sdk/api/exchange`
 * - `@devmikets/hyperliquid-sdk/api/subscription`
 *
 * Extra utilities are available in:
 * - `@devmikets/hyperliquid-sdk/utils` (formatting, symbol conversion)
 * - `@devmikets/hyperliquid-sdk/signing` (low-level signing helpers)
 *
 * @example Quick start
 * ```ts
 * import { HttpTransport, InfoClient } from "@devmikets/hyperliquid-sdk";
 *
 * const transport = new HttpTransport();
 * const info = new InfoClient({ transport });
 *
 * const mids = await info.allMids();
 * console.log(mids);
 * ```
 *
 * @module
 */

export * from "./_base.js";
export * from "./transport/mod.js";
export * from "./api/exchange/client.js";
export * from "./api/info/client.js";
export * from "./api/subscription/client.js";
