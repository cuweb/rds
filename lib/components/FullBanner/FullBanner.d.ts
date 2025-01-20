export interface FullBannerProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
}
export declare const FullBannerWrapper: {
    ({ children, as }: FullBannerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const FullBanner: {
    ({ children, as }: FullBannerProps): import("react/jsx-runtime").JSX.Element;
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
    Video: {
        ({ videoName }: import('./FullBannerVideo').FullBannerVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
