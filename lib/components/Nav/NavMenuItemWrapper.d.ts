import ImenuItem from './NavInterface';
interface NavMenuItemWrapperProps {
    menuItem: ImenuItem;
    isSubMenu: boolean;
    isInnerSubMenu: boolean;
}
export declare const NavMenuItemWrapper: {
    ({ menuItem, isSubMenu, isInnerSubMenu }: NavMenuItemWrapperProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
