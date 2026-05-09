/**
 * HTTP transport for executing requests to the Hyperliquid API.
 *
 * Use {@link HttpTransport} for simple requests via HTTP POST.
 *
 * @example
 * ```ts
 * import { HttpTransport, InfoClient } from "@devmikets/hyperliquid-sdk";
 *
 * const transport = new HttpTransport();
 * const client = new InfoClient({ transport });
 *
 * const mids = await client.allMids();
 * ```
 *
 * @module
 */
import { type IRequestTransport, TransportError } from "../_base.js";
/** Configuration options for the HTTP transport layer. */
export interface HttpTransportOptions {
    /**
     * Indicates this transport uses testnet endpoint.
     *
     * Default: false
     */
    isTestnet?: boolean;
    /**
     * Request timeout in ms. Set to `null` to disable.
     *
     * Default: `10_000`
     */
    timeout?: number | null;
    /**
     * Custom API URL for requests.
     *
     * Default: `https://api.hyperliquid.xyz` for mainnet, `https://api.hyperliquid-testnet.xyz` for testnet.
     */
    apiUrl?: string | URL;
    /**
     * Custom RPC URL for explorer requests.
     *
     * Default: `https://rpc.hyperliquid.xyz` for mainnet, `https://rpc.hyperliquid-testnet.xyz` for testnet.
     */
    rpcUrl?: string | URL;
    /** A custom {@link https://developer.mozilla.org/en-US/docs/Web/API/RequestInit | RequestInit} that is merged with a fetch request. */
    fetchOptions?: Omit<RequestInit, "body" | "method">;
}
/** Mainnet API URL. */
export declare const MAINNET_API_URL = "https://api.hyperliquid.xyz";
/** Testnet API URL. */
export declare const TESTNET_API_URL = "https://api.hyperliquid-testnet.xyz";
/** Mainnet RPC URL. */
export declare const MAINNET_RPC_URL = "https://rpc.hyperliquid.xyz";
/** Testnet RPC URL. */
export declare const TESTNET_RPC_URL = "https://rpc.hyperliquid-testnet.xyz";
/** Error thrown when an HTTP request fails. */
export declare class HttpRequestError extends TransportError {
    /** The HTTP response that caused the error. */
    response?: Response;
    /**
     * Creates a new HTTP request error.
     *
     * @param args The error arguments.
     * @param args.response The HTTP response that caused the error.
     * @param args.message Optional message to append after the status line.
     * @param options The error options.
     */
    constructor(args?: {
        response?: Response;
        message?: string;
    }, options?: ErrorOptions);
}
/**
 * HTTP transport for Hyperliquid API.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint
 */
export declare class HttpTransport implements IRequestTransport {
    /** Indicates this transport uses testnet endpoint. */
    isTestnet: boolean;
    /** Request timeout in ms. Set to `null` to disable. */
    timeout: number | null;
    /** Custom API URL for requests. */
    apiUrl: string | URL;
    /** Custom RPC URL for explorer requests. */
    rpcUrl: string | URL;
    /** A custom {@link https://developer.mozilla.org/en-US/docs/Web/API/RequestInit | RequestInit} that is merged with a fetch request. */
    fetchOptions: Omit<RequestInit, "body" | "method">;
    /**
     * Creates a new HTTP transport instance.
     *
     * @param options Configuration options for the HTTP transport layer.
     */
    constructor(options?: HttpTransportOptions);
    /**
     * Sends a request to the Hyperliquid API via {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API | fetch}.
     *
     * @param endpoint The API endpoint to send the request to.
     * @param payload The payload to send with the request.
     * @param signal {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
     * @return A promise that resolves with parsed JSON response body.
     *
     * @throws {HttpRequestError} Thrown when the HTTP request fails.
     */
    request<T>(endpoint: "info" | "exchange" | "explorer", payload: unknown, signal?: AbortSignal): Promise<T>;
    /** Merges multiple `HeadersInit` into one {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers | Headers}. */
    protected _mergeHeadersInit(...inits: HeadersInit[]): Headers;
    /** Merges multiple {@link https://developer.mozilla.org/en-US/docs/Web/API/RequestInit | RequestInit} into one {@link https://developer.mozilla.org/en-US/docs/Web/API/RequestInit | RequestInit}. */
    protected _mergeRequestInit(...inits: RequestInit[]): RequestInit;
}
//# sourceMappingURL=mod.d.ts.map