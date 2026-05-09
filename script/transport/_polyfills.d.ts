/** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */
export declare const Promise_: {
    /** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers */
    withResolvers: <T>() => PromiseWithResolvers<T>;
};
/** @see https://developer.mozilla.org/en-US/docs/Web/API/DOMException */
export declare const DOMException_: {
    new (message?: string, name?: string): DOMException;
    prototype: DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
};
/** @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal */
export declare const AbortSignal_: {
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static */
    any: (signals: AbortSignal[]) => AbortSignal;
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static */
    timeout: (ms: number) => AbortSignal;
};
/** @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent */
export declare const CustomEvent_: {
    new <T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
    prototype: CustomEvent;
};
//# sourceMappingURL=_polyfills.d.ts.map