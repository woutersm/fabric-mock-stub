import { Iterators } from 'fabric-shim';
/**
 * @hidden
 */
export declare class MockStateQueryIterator implements Iterators.StateQueryIterator {
    private data;
    txID: string;
    private currentLoc;
    private closed;
    constructor(data: Iterators.KV[], txID: string);
    readonly response: {
        results: Iterators.KV[];
        has_more: boolean;
        metadata: Buffer;
        id: string;
    };
    next(): Promise<Iterators.NextResult>;
    close(): Promise<void>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    emit(event: string | symbol, ...args: any[]): boolean;
    eventNames(): (string | symbol)[];
    listenerCount(type: string | symbol): number;
}
