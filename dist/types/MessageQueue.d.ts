import { Data } from './Trebuchet';
export declare type SendFn = (message: Data) => void;
declare class MessageQueue {
    queue: Array<Data>;
    add(message: Data): void;
    clear(): void;
    flush(send: SendFn): void;
}
export default MessageQueue;
//# sourceMappingURL=MessageQueue.d.ts.map