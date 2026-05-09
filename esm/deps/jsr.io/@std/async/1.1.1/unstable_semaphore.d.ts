/**
 * A counting semaphore for limiting concurrent access to a resource.
 *
 * @experimental **UNSTABLE**: New API, yet to be vetted.
 *
 * @example Usage
 * ```ts
 * import { Semaphore } from "@std/async/unstable-semaphore";
 *
 * const sem = new Semaphore(2);
 * {
 *   using _permit = await sem.acquire();
 *   // critical section
 * } // permit is automatically released when exiting the block
 * ```
 */
export declare class Semaphore {
    #private;
    /**
     * Creates a new semaphore with the specified number of permits.
     *
     * @param max Maximum concurrent permits. Defaults to 1 (mutex).
     * @throws {TypeError} If `max` is not a positive integer.
     */
    constructor(max?: number);
    /**
     * Acquires a permit, waiting if none are available.
     *
     * @example Usage
     * ```ts no-assert
     * import { Semaphore } from "@std/async/unstable-semaphore";
     *
     * const sem = new Semaphore(1);
     * await sem.acquire();
     * try {
     *   // critical section
     * } finally {
     *   sem.release();
     * }
     * ```
     *
     * @example Using `using` statement
     * ```ts no-assert
     * import { Semaphore } from "@std/async/unstable-semaphore";
     *
     * const sem = new Semaphore(1);
     * {
     *   using _permit = await sem.acquire();
     *   // critical section
     * } // permit is automatically released when exiting the block
     * ```
     *
     * @returns A promise that resolves to a {@linkcode Disposable} when a permit is acquired.
     */
    acquire(): Promise<Disposable>;
    /**
     * Tries to acquire a permit without waiting.
     *
     * @example Usage
     * ```ts no-assert
     * import { Semaphore } from "@std/async/unstable-semaphore";
     *
     * const sem = new Semaphore(1);
     * const permit = sem.tryAcquire();
     * if (permit) {
     *   using _ = permit;
     *   // critical section
     * } else {
     *   // resource is busy
     * }
     * ```
     *
     * @returns A {@linkcode Disposable} if a permit was acquired, `undefined` otherwise.
     */
    tryAcquire(): Disposable | undefined;
    /**
     * Releases a permit, allowing the next waiter to proceed.
     *
     * @example Usage
     * ```ts no-assert
     * import { Semaphore } from "@std/async/unstable-semaphore";
     *
     * const sem = new Semaphore(1);
     * await sem.acquire();
     * try {
     *   // critical section
     * } finally {
     *   sem.release();
     * }
     * ```
     */
    release(): void;
}
//# sourceMappingURL=unstable_semaphore.d.ts.map