declare function eventTarget(): {
    addEventListener: {
        <K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    };
    dispatchEvent: (event: Event) => boolean;
    removeEventListener: {
        <K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    };
};
export default eventTarget;
