import { ReactNode } from '../../../node_modules/react';
export interface NavWrapperProps {
    navType?: 'primary' | 'secondary';
    children: ReactNode;
}
export declare const NavWrapper: ({ navType, children }: NavWrapperProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Nav: (({ navType, children }: NavWrapperProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Logo: {
        ({ title, link }: import("./NavLogo").NavLogoProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Aside: {
        ({ menu, LoggedInUser, LoggedOutUser, LoggedMenu, userNoImage, children, onClickHandler, }: import("./NavAside").NavAsideProps | import("./NavAside").NavAsideLoggedInProps | import("./NavAside").NavAsideLoggedOutProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Primary: {
        ({ children }: {
            children?: ReactNode;
        }): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Secondary: {
        ({ children }: {
            children?: ReactNode;
        }): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ menu }: import("./NavMenu").navMenuProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};
