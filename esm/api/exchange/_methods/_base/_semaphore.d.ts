/**
 * Per-key semaphore registry for serializing async operations.
 * @module
 */
/**
 * Acquires a lock for the given key, executes the provided async function, and releases the lock.
 *
 * @param key The key to lock on.
 * @param fn The async function to execute while holding the lock.
 * @return The result of the async function.
 */
export declare function withLock<K, T>(key: K, fn: () => Promise<T>): Promise<T>;
//# sourceMappingURL=_semaphore.d.ts.map