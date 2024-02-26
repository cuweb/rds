/// <reference types="react" />
import { UserInfoType } from '../../components/Avatar/Avatar';
export interface LinkProps {
    title: string;
    link: string;
    active: boolean;
}
export interface mobileLoginProps {
    title: string;
    link?: string;
    onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}
export interface TopNavProps {
    title: string;
    logoUrl?: string;
    brand?: string;
    login?: React.ReactNode;
    hasSearch?: boolean;
    sourceData?: {
        [k: string]: string | number;
    }[];
    children?: React.ReactNode;
    sticky?: boolean;
    navLinks?: LinkProps[];
    mobileLinks?: LinkProps[];
    userMenuItems?: {
        title: string;
        [k: string]: string | number | undefined | (() => void);
    }[];
    userInfo?: UserInfoType;
    session?: unknown;
    searchOn?: string;
    mobileLogin?: mobileLoginProps;
}
export declare const TopNav: ({ children, logoUrl, title, brand, hasSearch, sourceData, searchOn, navLinks, mobileLinks, userMenuItems, userInfo, session, sticky, login, mobileLogin, }: TopNavProps) => import("react/jsx-runtime").JSX.Element;
