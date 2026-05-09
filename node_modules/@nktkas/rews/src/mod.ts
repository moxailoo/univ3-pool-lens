// deno-lint-ignore-file no-explicit-any

/**
 * Reconnecting WebSocket with automatic retry logic.
 *
 * Features:
 * - **Drop-in replacement** — standard `WebSocket` API, swap one line
 * - **Auto-reconnection** — configurable retries and delay strategy
 * - **Message buffering** — `send()` queues data while offline, flushes on reconnect
 * - **Persistent listeners** — `addEventListener` and `on*` handlers survive reconnections
 * - **Dynamic URL & protocols** — resolve fresh values on each reconnection
 * - **Zero dependencies** — works in Node.js, Deno, Bun, and browsers
 *
 * @module
 */

// ============================================================
// Types
// ============================================================

/** Type that can be a value or a Promise of that value. */
type MaybePromise<T> = T | Promise<T>;

/** Value or factory function that returns the value. */
type MaybeFn<T, A extends unknown[] = []> = T | ((...args: A) => T);

/** URL or factory function that returns a URL for the WebSocket connection (sync or async). */
type UrlProvider =
  | string
  | URL
  | (() => MaybePromise<string | URL>);
/** Subprotocol(s) or factory function that returns subprotocol(s) for the WebSocket connection (sync or async). */
type ProtocolsProvider =
  | string
  | string[]
  | undefined
  | (() => MaybePromise<string | string[] | undefined>);

/** Data types accepted by {@link ReconnectingWebSocket.send}. */
type WebSocketSendData = string | ArrayBufferLike | Blob | ArrayBufferView;

/** Error code indicating the type of reconnection failure. */
type ReconnectingWebSocketErrorCode =
  | "RECONNECTION_LIMIT"
  | "TERMINATED_BY_USER"
  | "UNKNOWN_ERROR";

/** Configuration options for the {@link ReconnectingWebSocket}. */
export interface ReconnectingWebSocketOptions {
  /**
   * Custom WebSocket constructor.
   * @default `globalThis.WebSocket`
   */
  WebSocket?: new (url: string | URL, protocols?: string | string[]) => WebSocket;
  /**
   * Maximum number of reconnection attempts.
   * @default `3`
   */
  maxRetries?: number;
  /**
   * Maximum time in ms to wait for a connection to open. Set to `null` to disable.
   * @default `10_000`
   */
  connectionTimeout?: number | null;
  /**
   * Delay before reconnection in ms, or a function of attempt number.
   * @default `(n) => Math.min(2 ** n * 150, 10_000)` - Exponential backoff with max 10s.
   */
  reconnectionDelay?: MaybeFn<number, [attempt: number]>;
}

/** Event map for {@link ReconnectingWebSocket} including the custom `terminate` event. */
interface ReconnectingWebSocketEventMap extends WebSocketEventMap {
  /** Event fired when the instance is permanently terminated. */
  terminate: CustomEvent<ReconnectingWebSocketError>;
}

/** Event types supported by attribute-style event handlers (`onopen`, `onclose`, etc.). */
type AttributeEventType = "open" | "close" | "error" | "message";

// ============================================================
// Classes
// ============================================================

/** Error thrown when reconnection fails in {@link ReconnectingWebSocket}. */
export class ReconnectingWebSocketError extends Error {
  /**
   * Error code indicating the type of reconnection error:
   * - `RECONNECTION_LIMIT`: Maximum reconnection attempts reached.
   * - `TERMINATED_BY_USER`: Closed via `close()` method.
   * - `UNKNOWN_ERROR`: Unhandled error in user-provided functions.
   */
  readonly code: ReconnectingWebSocketErrorCode;
  /**
   * Create a new {@link ReconnectingWebSocketError}.
   *
   * @param code Error code indicating the type of reconnection failure.
   * @param cause Underlying error that caused the reconnection failure.
   */
  constructor(code: ReconnectingWebSocketErrorCode, cause?: unknown) {
    super(`Error when reconnecting WebSocket: ${code}`);
    this.name = "ReconnectingWebSocketError";
    this.cause = cause;
    this.code = code;
  }
}

/** WebSocket with auto-reconnection logic. */
export interface ReconnectingWebSocket {
  /**
   * Register an event listener for the specified event type.
   *
   * @param type Event type to listen for.
   * @param listener Callback function or object with `handleEvent` method.
   * @param options Listener options or `useCapture` boolean.
   */
  addEventListener<K extends keyof ReconnectingWebSocketEventMap>(
    type: K,
    listener:
      | ((ev: ReconnectingWebSocketEventMap[K]) => any)
      | { handleEvent: (event: ReconnectingWebSocketEventMap[K]) => any }
      | null,
    options?: boolean | AddEventListenerOptions,
  ): void;

  /**
   * Remove a previously registered event listener.
   *
   * @param type Event type the listener was registered for.
   * @param listener The listener to remove.
   * @param options Listener options or `useCapture` boolean.
   */
  removeEventListener<K extends keyof ReconnectingWebSocketEventMap>(
    type: K,
    listener:
      | ((ev: ReconnectingWebSocketEventMap[K]) => any)
      | { handleEvent: (event: ReconnectingWebSocketEventMap[K]) => any }
      | null,
    options?: boolean | EventListenerOptions,
  ): void;
}
export class ReconnectingWebSocket extends EventTarget implements WebSocket {
  // ============================================================
  // State and initialization
  // ============================================================

  // --- Protected state -------------------------------------------

  /** Current underlying WebSocket instance. */
  protected _socket: WebSocket | undefined;
  /** URL provider for creating new connections. */
  protected _urlProvider: UrlProvider;
  /** Protocols provider for creating new connections. */
  protected _protocolsProvider: ProtocolsProvider;
  /** Binary data type for the WebSocket. */
  protected _binaryType: BinaryType = "blob";

  /** Attribute-style listener for the `close` event. */
  protected _onclose: ((this: WebSocket, ev: CloseEvent) => any) | null = null;
  /** Attribute-style listener for the `error` event. */
  protected _onerror: ((this: WebSocket, ev: Event) => any) | null = null;
  /** Attribute-style listener for the `message` event. */
  protected _onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null = null;
  /** Attribute-style listener for the `open` event. */
  protected _onopen: ((this: WebSocket, ev: Event) => any) | null = null;

  /** Current reconnection attempt number. */
  protected _attempt = 0;
  /** Buffer for messages sent while disconnected. */
  protected _messageBuffer: WebSocketSendData[] = [];
  /** Map of currently active attribute-style listeners. */
  protected _attributeListeners: Partial<Record<AttributeEventType, EventListener>> = {};
  /** Controller used to signal permanent termination. */
  protected _abortController: AbortController = new AbortController();

  // --- Public state ----------------------------------------------

  /** Reconnection configuration options. */
  reconnectOptions: Required<ReconnectingWebSocketOptions>;

  /** Whether the instance has been permanently terminated. */
  get isTerminated(): boolean {
    return this._abortController.signal.aborted;
  }
  /** Termination reason, or `undefined` if not yet terminated. */
  get terminationReason(): ReconnectingWebSocketError | undefined {
    return this._abortController.signal.reason;
  }

  /** AbortSignal that is aborted when the instance is permanently terminated. */
  get terminationSignal(): AbortSignal {
    return this._abortController.signal;
  }

  // --- Constructor -----------------------------------------------

  /**
   * Create a new ReconnectingWebSocket with URL and options.
   *
   * @param url URL or factory function for the WebSocket connection.
   * @param options Configuration options.
   *
   * @throws {TypeError} If no WebSocket implementation is available.
   */
  constructor(url: UrlProvider, options?: ReconnectingWebSocketOptions);
  /**
   * Create a new ReconnectingWebSocket with URL, protocols and options.
   *
   * @param url URL or factory function for the WebSocket connection.
   * @param protocols Subprotocol(s) or factory function.
   * @param options Configuration options.
   *
   * @throws {TypeError} If no WebSocket implementation is available.
   */
  constructor(url: UrlProvider, protocols?: ProtocolsProvider, options?: ReconnectingWebSocketOptions);
  /**
   * Create a new ReconnectingWebSocket.
   *
   * @param url URL or factory function for the WebSocket connection.
   * @param protocolsOrOptions Subprotocol(s), factory function, or options object.
   * @param maybeOptions Configuration options when protocols are provided as second argument.
   *
   * @throws {TypeError} If no WebSocket implementation is available.
   */
  constructor(
    url: UrlProvider,
    protocolsOrOptions?: ProtocolsProvider | ReconnectingWebSocketOptions,
    maybeOptions?: ReconnectingWebSocketOptions,
  ) {
    super();

    const isProtocols = protocolsOrOptions === undefined ||
      typeof protocolsOrOptions === "string" ||
      typeof protocolsOrOptions === "function" ||
      Array.isArray(protocolsOrOptions);
    const protocols = isProtocols ? protocolsOrOptions : undefined;
    const options = isProtocols ? maybeOptions : protocolsOrOptions;

    if (!globalThis.WebSocket && !options?.WebSocket) {
      throw new TypeError(
        "No WebSocket implementation found. Please provide a custom WebSocket constructor in the options.",
      );
    }

    this._urlProvider = url;
    this._protocolsProvider = protocols;
    this.reconnectOptions = {
      WebSocket: options?.WebSocket ?? WebSocket,
      maxRetries: options?.maxRetries ?? 3,
      connectionTimeout: options?.connectionTimeout === undefined ? 10_000 : options.connectionTimeout,
      reconnectionDelay: options?.reconnectionDelay ?? ((n) => Math.min(2 ** n * 150, 10_000)),
    };

    // Background reconnection loop — handles its own errors via _cleanup
    this._runLoop();
  }

  // ============================================================
  // Reconnection lifecycle
  // ============================================================

  /**
   * Create a new WebSocket instance using the current URL and protocols providers.
   *
   * @return Configured WebSocket instance.
   */
  protected async _createSocket(): Promise<WebSocket> {
    const url = typeof this._urlProvider === "function" ? await this._urlProvider() : this._urlProvider;
    const protocols = typeof this._protocolsProvider === "function"
      ? await this._protocolsProvider()
      : this._protocolsProvider;

    const socket = createSocketWithTimeout(
      () => new this.reconnectOptions.WebSocket(url, protocols),
      this.reconnectOptions.connectionTimeout,
    );
    socket.binaryType = this._binaryType;

    return socket;
  }

  /** Run the main reconnection loop. */
  protected async _runLoop(): Promise<void> {
    try {
      while (true) {
        this._socket = await this._createSocket();
        if (this.isTerminated) {
          this._socket.close();
          this.dispatchEvent(new CloseEvent_("close", { code: 1006, reason: "", wasClean: false }));
          break;
        }

        await this._awaitSocketLifecycle();
        if (this.isTerminated) break;

        const attempt = this._attempt;
        if (attempt >= this.reconnectOptions.maxRetries) {
          this._cleanup("RECONNECTION_LIMIT");
          break;
        }
        this._attempt++;

        const delay = typeof this.reconnectOptions.reconnectionDelay === "number"
          ? this.reconnectOptions.reconnectionDelay
          : this.reconnectOptions.reconnectionDelay(attempt);
        await sleep(delay, this._abortController.signal);
        if (this.isTerminated) break;
      }
    } catch (error) {
      this._cleanup("UNKNOWN_ERROR", error);
    }
  }

  /** Await the full lifecycle of the current socket until it closes. */
  protected _awaitSocketLifecycle(): Promise<void> {
    return new Promise<void>((resolve) => {
      const ac = new AbortController();
      const { signal } = ac;

      this._socket!.addEventListener("open", () => {
        this._attempt = 0;

        // Flush buffered messages — remove only successfully sent on partial failure
        let sentCount = 0;
        try {
          for (; sentCount < this._messageBuffer.length; sentCount++) {
            this._socket!.send(this._messageBuffer[sentCount]!);
          }
          this._messageBuffer = [];
        } catch {
          this._messageBuffer.splice(0, sentCount);
          this._socket!.close();
          return;
        }

        this.dispatchEvent(new Event("open"));
      }, { signal });

      this._socket!.addEventListener("message", (e) => {
        this.dispatchEvent(new MessageEvent_("message", { data: e.data, origin: e.origin }));
      }, { signal });

      this._socket!.addEventListener("error", () => {
        this.dispatchEvent(new Event("error"));

        // HACK: Node.js <24 (nodejs/undici#3546) skips the close event
        //       on connection failure. Resolve the lifecycle directly.
        //       On compliant runtimes ac.abort() drops the duplicate.
        if (this._socket!.readyState === ReconnectingWebSocket.CONNECTING) {
          ac.abort();
          this.dispatchEvent(new CloseEvent_("close", { code: 1006, reason: "", wasClean: false }));
          resolve();
        }
      }, { signal });

      this._socket!.addEventListener("close", (e) => {
        ac.abort();
        this.dispatchEvent(new CloseEvent_("close", e));
        resolve();
      }, { signal });
    });
  }

  /**
   * Permanently terminate the instance and clean up resources.
   *
   * @param code Error code indicating the type of termination.
   * @param cause Underlying error that triggered cleanup.
   */
  protected _cleanup(code: ReconnectingWebSocketErrorCode, cause?: unknown): void {
    if (this.isTerminated) return;

    const error = new ReconnectingWebSocketError(code, cause);

    this._abortController.abort(error);
    this._socket?.close();
    this._messageBuffer = [];

    this.dispatchEvent(new CustomEvent_("terminate", { detail: error }));
  }

  // ============================================================
  // WebSocket property implementations
  // ============================================================

  // --- Properties ------------------------------------------------

  get url(): string {
    return this._socket?.url ?? "";
  }

  get readyState(): number {
    if (this.isTerminated) return ReconnectingWebSocket.CLOSED;
    return this._socket?.readyState ?? ReconnectingWebSocket.CONNECTING;
  }

  get bufferedAmount(): number {
    return this._socket?.bufferedAmount ?? 0;
  }

  get extensions(): string {
    return this._socket?.extensions ?? "";
  }

  get protocol(): string {
    return this._socket?.protocol ?? "";
  }

  get binaryType(): BinaryType {
    return this._binaryType;
  }
  set binaryType(value: BinaryType) {
    this._binaryType = value;
    if (this._socket) this._socket.binaryType = value;
  }

  // --- Constants -------------------------------------------------

  /** Connection is being established. */
  readonly CONNECTING = 0;
  /** Connection is open and ready to communicate. */
  readonly OPEN = 1;
  /** Connection is in the process of closing. */
  readonly CLOSING = 2;
  /** Connection is closed. */
  readonly CLOSED = 3;

  /** Connection is being established. */
  static readonly CONNECTING = 0;
  /** Connection is open and ready to communicate. */
  static readonly OPEN = 1;
  /** Connection is in the process of closing. */
  static readonly CLOSING = 2;
  /** Connection is closed. */
  static readonly CLOSED = 3;

  // --- Event handlers --------------------------------------------

  /** Attribute-style handler for `close` events. */
  get onclose(): ((this: WebSocket, ev: CloseEvent) => any) | null {
    return this._onclose;
  }
  /**
   * Set the attribute-style handler for `close` events.
   *
   * @param handler Event handler function, or `null` to remove.
   */
  set onclose(handler: ((this: WebSocket, ev: CloseEvent) => any) | null) {
    this._onclose = handler;
    this._setAttributeListener("close", handler ? (event) => handler.call(this, event as CloseEvent) : null);
  }

  /** Attribute-style handler for `error` events. */
  get onerror(): ((this: WebSocket, ev: Event) => any) | null {
    return this._onerror;
  }
  /**
   * Set the attribute-style handler for `error` events.
   *
   * @param handler Event handler function, or `null` to remove.
   */
  set onerror(handler: ((this: WebSocket, ev: Event) => any) | null) {
    this._onerror = handler;
    this._setAttributeListener("error", handler ? (event) => handler.call(this, event as Event) : null);
  }

  /** Attribute-style handler for `message` events. */
  get onmessage(): ((this: WebSocket, ev: MessageEvent<any>) => any) | null {
    return this._onmessage;
  }
  /**
   * Set the attribute-style handler for `message` events.
   *
   * @param handler Event handler function, or `null` to remove.
   */
  set onmessage(handler: ((this: WebSocket, ev: MessageEvent<any>) => any) | null) {
    this._onmessage = handler;
    this._setAttributeListener("message", handler ? (event) => handler.call(this, event as MessageEvent) : null);
  }

  /** Attribute-style handler for `open` events. */
  get onopen(): ((this: WebSocket, ev: Event) => any) | null {
    return this._onopen;
  }
  /**
   * Set the attribute-style handler for `open` events.
   *
   * @param handler Event handler function, or `null` to remove.
   */
  set onopen(handler: ((this: WebSocket, ev: Event) => any) | null) {
    this._onopen = handler;
    this._setAttributeListener("open", handler ? (event) => handler.call(this, event as Event) : null);
  }

  /**
   * Set or remove an attribute-style event listener.
   *
   * @param type Event type to manage.
   * @param listener Listener function, or `null` to remove.
   */
  protected _setAttributeListener(type: AttributeEventType, listener: EventListener | null): void {
    const previous = this._attributeListeners[type];
    if (previous) super.removeEventListener(type, previous);

    if (listener) {
      this._attributeListeners[type] = listener;
      super.addEventListener(type, listener);
    } else {
      delete this._attributeListeners[type];
    }
  }

  // --- Public methods --------------------------------------------

  /**
   * Close the WebSocket connection.
   *
   * @param code Status code for the closure.
   * @param reason Human-readable reason for the closure.
   * @param permanently If `true`, permanently close and stop reconnection.
   *                    If `false`, close only the current socket without affecting reconnection (does not work with `maxRetries=0`).
   *                    Default: `true`.
   */
  close(code?: number, reason?: string, permanently: boolean = true): void {
    const wasConnecting = this._socket?.readyState === ReconnectingWebSocket.CONNECTING;

    this._socket?.close(code, reason);
    if (permanently) this._cleanup("TERMINATED_BY_USER");

    // HACK: Node.js <24 and Bun skip the close event when close() is called
    //       during CONNECTING. Dispatch it manually;
    //       On compliant runtimes ac.abort() drops the duplicate.
    if (wasConnecting && typeof this._socket?.dispatchEvent === "function") {
      this._socket.dispatchEvent(new CloseEvent_("close", { code: 1006, reason: "", wasClean: false }));
    }
  }

  /**
   * Send data to the server.
   *
   * If the connection is not open,
   * the data is buffered and sent when the connection is established.
   *
   * @param data Data payload to send.
   */
  send(data: WebSocketSendData): void {
    if (this._socket?.readyState !== ReconnectingWebSocket.OPEN && !this.isTerminated) {
      this._messageBuffer.push(data);
    } else {
      this._socket?.send(data);
    }
  }
}

// ============================================================
// Polyfills — fallbacks for runtimes that lack DOM event constructors (e.g. React Native / Hermes)
// ============================================================

const CloseEvent_: typeof CloseEvent = typeof CloseEvent !== "undefined" ? CloseEvent : class extends Event {
  readonly code: number;
  readonly reason: string;
  readonly wasClean: boolean;
  constructor(type: string, init?: CloseEventInit) {
    super(type, init);
    this.code = init?.code ?? 0;
    this.reason = init?.reason ?? "";
    this.wasClean = init?.wasClean ?? false;
  }
};

const MessageEvent_: typeof MessageEvent = typeof MessageEvent !== "undefined" ? MessageEvent : class extends Event {
  readonly data: any;
  readonly origin: string;
  readonly lastEventId: string;
  readonly source: MessageEventSource | null;
  readonly ports: ReadonlyArray<MessagePort>;
  constructor(type: string, init?: MessageEventInit) {
    super(type, init);
    this.data = init?.data ?? null;
    this.origin = init?.origin ?? "";
    this.lastEventId = init?.lastEventId ?? "";
    this.source = init?.source ?? null;
    this.ports = init?.ports ?? [];
  }
  initMessageEvent() {}
};

const CustomEvent_: typeof CustomEvent = typeof CustomEvent !== "undefined" ? CustomEvent : class extends Event {
  readonly detail: any;
  constructor(type: string, init?: CustomEventInit) {
    super(type, init);
    this.detail = init?.detail ?? null;
  }
  initCustomEvent() {}
};

// ============================================================
// Utilities
// ============================================================

/**
 * Create a WebSocket with an optional connection timeout.
 *
 * @param socketFactory Factory function that creates the underlying WebSocket.
 * @param timeout Maximum time in ms to wait for the connection to open, or `null` to disable.
 * @return WebSocket instance with timeout handling attached.
 */
function createSocketWithTimeout(socketFactory: () => WebSocket, timeout: number | null): WebSocket {
  const socket = socketFactory();
  if (timeout === null) return socket;

  const timer = setTimeout(() => {
    const wasConnecting = socket.readyState === ReconnectingWebSocket.CONNECTING;

    // 3008 = Custom close code for connection timeout
    socket.close(3008, "Timeout");

    // HACK: Node.js <24 and Bun skip the close event when close() is called
    //       during CONNECTING. Dispatch it manually;
    //       On compliant runtimes ac.abort() drops the duplicate.
    if (wasConnecting && typeof socket.dispatchEvent === "function") {
      socket.dispatchEvent(new CloseEvent_("close", { code: 3008, reason: "Timeout", wasClean: false }));
    }
  }, timeout);

  const cleanup = () => clearTimeout(timer);
  for (const type of ["open", "close", "error"] as const) {
    socket.addEventListener(type, cleanup, { once: true });
  }

  return socket;
}

/**
 * Wait for a specified duration.
 *
 * @param ms Duration in milliseconds.
 * @param signal Abort signal to cancel the wait.
 */
function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason);

    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);

    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
