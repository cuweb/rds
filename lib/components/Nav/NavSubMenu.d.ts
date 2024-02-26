import ImenuItem from './NavInterface';
export interface menuItemProps {
    submenu: ImenuItem[];
    isSubMenu: boolean;
    isInnerSubMenu: boolean;
    id: string;
}
export declare const NavSubMenu: {
    ({ submenu, isSubMenu, isInnerSubMenu, id }: menuItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
