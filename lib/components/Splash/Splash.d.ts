export type SplashWrapperProps = {
    children?: React.ReactNode;
};
export declare const SplashWrapper: {
    ({ children }: SplashWrapperProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Splash: {
    ({ children }: SplashWrapperProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Background: {
        (props: import('./SplashBackground').SplashBackgroundProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ logo, preHeader, header, backgroundType, children }: import('./SplashContent').SplashBaseProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
