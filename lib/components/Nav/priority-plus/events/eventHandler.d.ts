import { Events } from './createEvent';
export type EventCallback = (eventDetail: CustomEvent<{}>) => void;
declare function createEventHandler(): {
    off: (eventType: Events, cb: EventCallback) => any;
    on: (eventType: Events, cb: EventCallback, afterReady?: boolean) => any;
    setEventReady: (ready?: boolean) => void;
    trigger: (event: CustomEvent<{}>) => void;
};
export default createEventHandler;
