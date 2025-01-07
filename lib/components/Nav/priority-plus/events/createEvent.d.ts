export declare enum Events {
    ShowOverflow = "showOverflow",
    HideOverflow = "hideOverflow",
    ItemsChanged = "itemsChanged",
    ToggleClicked = "toggleClicked"
}
export interface ItemsChangedEvent {
    detail: {
        overflowCount: number;
    };
}
export interface ToggleClickedEvent {
    detail: {
        original: Event;
    };
}
declare function createEvent(name: Events, payload?: {}): CustomEvent<{}>;
export declare function createShowOverflowEvent(): CustomEvent<{}>;
export declare function createHideOverflowEvent(): CustomEvent<{}>;
export declare function createItemsChangedEvent({ overflowCount }: ItemsChangedEvent['detail']): CustomEvent<{}>;
export declare function createToggleClickedEvent({ original }: ToggleClickedEvent['detail']): CustomEvent<{}>;
export default createEvent;
