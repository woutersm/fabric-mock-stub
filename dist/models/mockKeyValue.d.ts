import { Iterators } from 'fabric-shim';
export declare class MockKeyValue implements Iterators.KV {
    key: string;
    value: Buffer;
    constructor(key: string, value: Buffer);
    getKey(): string;
    getValue(): Buffer;
}
