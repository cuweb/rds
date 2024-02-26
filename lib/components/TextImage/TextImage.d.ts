import React from 'react';
export interface TextImageProps {
    children?: React.ReactNode;
    maxWidth?: '5xl' | '7xl' | 'max';
    flexRow?: 'md' | 'lg';
    hasBorder?: boolean;
    flipX?: boolean;
    flipYsm?: boolean;
}
export declare const TextImageWrapper: ({ children, maxWidth, flexRow, hasBorder, flipX, flipYsm, }: TextImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const TextImage: (({ children, maxWidth, flexRow, hasBorder, flipX, flipYsm, }: TextImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, angle, flipX, focalPointX, focalPointY, hasMobileImage, }: import("./TextImageContent").TextImageContentProps & import("./TextImageContent").TextImageMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
