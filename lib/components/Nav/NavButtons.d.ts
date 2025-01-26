import { UserInfoType } from '../Avatar/Avatar';
import { default as ImenuItem } from './NavInterface';
export interface NavButtonsGenericProps {
    menu?: ImenuItem[];
    isSearch?: boolean;
    onClickSearch?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface NavButtonsProps extends NavButtonsGenericProps {
    LoggedInUser?: false;
    LoggedOutUser?: false;
    LoggedMenu?: null;
    userNoImage?: null;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavButtonsLoggedInProps extends NavButtonsGenericProps {
    LoggedInUser?: false;
    LoggedOutUser: true;
    LoggedMenu?: null;
    userNoImage?: null;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavButtonsLoggedOutProps extends NavButtonsGenericProps {
    LoggedInUser: true;
    LoggedOutUser?: false;
    LoggedMenu: ImenuItem[];
    userNoImage: UserInfoType;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const NavButtons: {
    ({ menu, isSearch, onClickSearch, LoggedInUser, LoggedOutUser, LoggedMenu, userNoImage, LoggedInLink, onClickHandler, }: NavButtonsProps | NavButtonsLoggedInProps | NavButtonsLoggedOutProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
