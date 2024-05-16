import { ReactNode } from '../../../node_modules/react';
import { UserInfoType } from './../Avatar/Avatar';
import { default as ImenuItem } from './NavInterface';

export declare const styles: {
    listItemLink: string;
};
export interface NavAsideProps {
    menu?: ImenuItem[];
    LoggedInUser?: false;
    LoggedOutUser?: false;
    LoggedMenu?: null;
    userNoImage?: null;
    children?: ReactNode;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavAsideLoggedInProps {
    menu?: ImenuItem[];
    LoggedInUser?: false;
    LoggedOutUser: true;
    LoggedMenu?: null;
    userNoImage?: null;
    children?: ReactNode;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavAsideLoggedOutProps {
    menu?: ImenuItem[];
    LoggedInUser: true;
    LoggedOutUser?: false;
    LoggedMenu: ImenuItem[];
    userNoImage: UserInfoType;
    children?: ReactNode;
    LoggedInLink?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const NavAside: {
    ({ menu, LoggedInUser, LoggedOutUser, LoggedMenu, userNoImage, children, LoggedInLink, onClickHandler, }: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
