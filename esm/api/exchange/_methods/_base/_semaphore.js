/**
 * Per-key semaphore registry for serializing async operations.
 * @module
 */
import { Semaphore } from "../../../../deps/jsr.io/@std/async/1.1.1/unstable_semaphore.js";
/**
 * A reference-counted registry for lazily creating and reusing per-key values.
 *
 * @template K Map key type.
 * @template V Stored value type.
 */
class RefCountedRegistry {
    _map = new Map();
    _factory;
    /**
     * Creates a new registry instance.
     *
     * @param factory Factory function used to create a new value when a key is first referenced.
     */
    constructor(factory) {
        this._factory = factory;
    }
    /**
     * Increments the reference count for a key and returns its value.
     *
     * If the key is not present, a new value is created via the factory.
     *
     * @param key Registry key.
     * @return The value associated with the key.
     */
    ref(key) {
        let entry = this._map.get(key);
        if (!entry) {
            entry = { value: this._factory(), refs: 0 };
            this._map.set(key, entry);
        }
        entry.refs++;
        return entry.value;
    }
    /**
     * Decrements the reference count for a key.
     *
     * When the count reaches zero, the entry is removed.
     *
     * @param key Registry key.
     */
    unref(key) {
        const entry = this._map.get(key);
        if (!entry)
            return;
        if (--entry.refs === 0) {
            this._map.delete(key);
        }
    }
}
const semaphores = new RefCountedRegistry(() => new Semaphore(1));
/**
 * Acquires a lock for the given key, executes the provided async function, and releases the lock.
 *
 * @param key The key to lock on.
 * @param fn The async function to execute while holding the lock.
 * @return The result of the async function.
 */
export async function withLock(key, fn) {
    const semaphore = semaphores.ref(key);
    await semaphore.acquire();
    try {
        return await fn();
    }
    finally {
        semaphore.release();
        semaphores.unref(key);
    }
}
//# sourceMappingURL=_semaphore.js.map