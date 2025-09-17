import { default as React } from '../../../node_modules/react';
export interface TextMediaProps {
    children?: React.ReactNode;
    reverse?: boolean;
}
export declare const TextMediaWrapper: {
    ({ children, reverse }: TextMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const TextMedia: {
    ({ children, reverse }: TextMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, title, headerType, metaData, width, align, hasUnderline, isLight, isWhite, }: import('./TextMediaContent').TextMediaContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    BgImage: {
        ({ imageUrl, imageZoom, focalPointX, focalPointY, hasBorder, }: import('./TextMediaBgImg').TextMediaBgImgProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Aside: {
        ({ children, align, hasBorder }: import('./TextMediaAside').TextMediaAsideProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
