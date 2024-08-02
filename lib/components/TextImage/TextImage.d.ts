import { default as React } from '../../../node_modules/react';

export interface TextImageProps {
    children?: React.ReactNode;
    maxWidth?: '5xl' | '7xl' | 'max';
    flexRow?: 'md' | 'lg';
    flipX?: boolean;
    flipYsm?: boolean;
}
export declare const TextImageWrapper: {
    ({ children, maxWidth, flexRow, flipX, flipYsm }: TextImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const TextImage: {
    ({ children, maxWidth, flexRow, flipX, flipYsm }: TextImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, focalPointX, focalPointY, hasMobileImage, }: import('./TextImageContent').TextImageContentProps & import('./TextImageContent').TextImageMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
