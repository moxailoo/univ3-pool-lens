"use strict";
// Copyright 2018-2026 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semaphore = void 0;
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
class Semaphore {
    #max;
    /** Current number of available permits. */
    #count;
    /** Head of the waiting queue. */
    #head;
    /** Tail of the waiting queue. */
    #tail;
    /**
     * Creates a new semaphore with the specified number of permits.
     *
     * @param max Maximum concurrent permits. Defaults to 1 (mutex).
     * @throws {TypeError} If `max` is not a positive integer.
     */
    constructor(max = 1) {
        if (!Number.isInteger(max) || max < 1) {
            throw new TypeError(`Cannot create semaphore as 'max' must be a positive integer: received ${max}`);
        }
        this.#count = this.#max = max;
    }
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
    acquire() {
        const disposable = { [Symbol.dispose]: () => this.release() };
        if (this.#count > 0) {
            this.#count--;
            return Promise.resolve(disposable);
        }
        return new Promise((res) => {
            const node = { res: () => res(disposable), next: undefined };
            if (this.#tail) {
                this.#tail = this.#tail.next = node;
            }
            else {
                this.#head = this.#tail = node;
            }
        });
    }
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
    tryAcquire() {
        if (this.#count > 0) {
            this.#count--;
            return { [Symbol.dispose]: () => this.release() };
        }
        return undefined;
    }
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
    release() {
        if (this.#head) {
            this.#head.res();
            this.#head = this.#head.next;
            if (!this.#head)
                this.#tail = undefined;
        }
        else if (this.#count < this.#max) {
            this.#count++;
        }
    }
}
exports.Semaphore = Semaphore;
//# sourceMappingURL=unstable_semaphore.js.map