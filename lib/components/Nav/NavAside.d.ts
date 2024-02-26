import { ReactNode } from 'react';
import { UserInfoType } from './../Avatar/Avatar';
import ImenuItem from './NavInterface';
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
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavAsideLoggedInProps {
    menu?: ImenuItem[];
    LoggedInUser?: false;
    LoggedOutUser: true;
    LoggedMenu?: null;
    userNoImage?: null;
    children?: ReactNode;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface NavAsideLoggedOutProps {
    menu?: ImenuItem[];
    LoggedInUser: true;
    LoggedOutUser?: false;
    LoggedMenu: ImenuItem[];
    userNoImage: UserInfoType;
    children?: ReactNode;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const NavAside: {
    ({ menu, LoggedInUser, LoggedOutUser, LoggedMenu, userNoImage, children, onClickHandler, }: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
