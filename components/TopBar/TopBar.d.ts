import { PropsWithChildren } from 'react';
export declare const TopBarWrapper: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const TopBar: (({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element) & {
    Logo: {
        ({ children, title, link }: PropsWithChildren<import("./TopBarLogo").TopBarLogoProps>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    SubMenu: {
        ({ label, children }: PropsWithChildren<import("./TopBarSubMenu").TopBarSubMenuProps>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Aside: {
        ({ showGive, showLogin }: import("./TopBarAside").TopBarAsideProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Primary: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Secondary: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=TopBar.d.ts.map