import { Iterators } from 'fabric-shim';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
export declare class MockKeyModification implements Iterators.KeyModification {
    is_delete: boolean;
    value: Buffer;
    tx_id: string;
    timestamp: Timestamp;
    constructor(is_delete: boolean, value: Buffer, tx_id: string);
    getIsDelete(): boolean;
    getValue(): Buffer;
    getTimestamp(): Timestamp;
    getTxId(): string;
}
