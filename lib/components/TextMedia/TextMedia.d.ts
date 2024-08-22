import { default as React } from '../../../node_modules/react';
import { gridGapClasses, maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
type gridGapKeys = keyof typeof gridGapClasses;
export interface TextMediaProps {
    children?: React.ReactNode;
    maxWidth?: maxWidthKeys;
    gridGap?: gridGapKeys;
    reverse?: boolean;
}
export declare const TextMediaWrapper: {
    ({ children, maxWidth, gridGap, reverse }: TextMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const TextMedia: {
    ({ children, maxWidth, gridGap, reverse }: TextMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, title, headerType, width, align, hasUnderline, isWhite, }: import('./TextMediaContent').TextMediaContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    BgImage: {
        ({ imageUrl, imageZoom, focalPointX, focalPointY, border, }: import('./TextMediaBgImg').TextMediaBgImgProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Aside: {
        ({ children, align, border, borderColor }: import('./TextMediaAside').TextMediaAsideProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
