import ImenuItem from './NavInterface';
interface NavMenuItemWrapperProps {
    menuItem: ImenuItem;
    isSubMenu: boolean;
    isInnerSubMenu: boolean;
}
export declare const NavMenuItemWrapper: {
    ({ menuItem, isSubMenu, isInnerSubMenu }: NavMenuItemWrapperProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
export {};
