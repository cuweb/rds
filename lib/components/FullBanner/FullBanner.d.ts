export interface FullBannerProps {
    children?: React.ReactNode;
}
export declare const FullBannerWrapper: {
    ({ children }: FullBannerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const FullBanner: {
    ({ children }: FullBannerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, title, headerType, opacity, justify, }: import('./FullBannerContent').FullBannerContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Image: {
        ({ children }: import('./FullBannerImage').FullBannerImageProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Video: import('../../../node_modules/react').FC<import('./FullBannerVideo').FullBannerVideoProps>;
};
