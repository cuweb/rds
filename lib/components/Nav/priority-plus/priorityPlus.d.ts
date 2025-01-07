import { Events } from './events/createEvent';
import { default as DeepPartial } from './types/DeepPartial';
declare enum El {
    Container = "container",
    Main = "main",
    PrimaryNavWrapper = "primary-nav-wrapper",
    PrimaryNav = "primary-nav",
    OverflowNav = "overflow-nav",
    ToggleBtn = "toggle-btn",
    NavItems = "nav-item"
}
interface Options {
    classNames: {
        [El.Container]: string[];
        [El.Main]: string[];
        [El.PrimaryNavWrapper]: string[];
        [El.PrimaryNav]: string[];
        [El.OverflowNav]: string[];
        [El.ToggleBtn]: string[];
        [El.NavItems]: string[];
    };
    collapseAtCount: number;
    defaultOverflowVisible: boolean;
    openOnToggle: boolean;
}
declare function priorityPlus(targetElem: HTMLElement, userOptions?: DeepPartial<Options>): {
    destroy: () => void;
    getNavElements: () => {
        main: HTMLElement;
        "primary-nav-wrapper": HTMLElement;
        "primary-nav": HTMLElement;
        "nav-item": HTMLLIElement[];
        "overflow-nav": HTMLElement;
        "toggle-btn": HTMLElement;
    };
    off: (eventType: Events, cb: import('./events/eventHandler').EventCallback) => any;
    on: (eventType: Events, cb: import('./events/eventHandler').EventCallback, afterReady?: boolean) => any;
    setOverflowNavOpen: (open?: boolean) => any;
    toggleOverflowNav: () => any;
};
export default priorityPlus;
