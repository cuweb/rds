import { ReactNode } from '../../../node_modules/react';
export interface NavWrapperProps {
    children: ReactNode;
}
export declare const NavWrapper: ({ children }: NavWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const Nav: (({ children }: NavWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    Top: {
        ({ children }: import('../../../node_modules/react').PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Logo: {
        ({ title, link }: import('./NavLogo').NavLogoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Buttons: {
        ({ menu, isSearch, onClickSearch, LoggedInUser, LoggedOutUser, LoggedMenu, userNoImage, LoggedInLink, onClickHandler, }: import('./NavButtons').NavButtonsProps | import('./NavButtons').NavButtonsLoggedInProps | import('./NavButtons').NavButtonsLoggedOutProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Aside: {
        ({ children }: import('../../../node_modules/react').PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Bottom: {
        ({ children }: import('../../../node_modules/react').PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ menu }: import('./NavMenu').navMenuProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
