import React from 'react';
export interface TextImageContentProps {
    children?: React.ReactNode;
    title?: string;
    headerType?: 'h1' | 'h2';
    isCenter?: boolean;
}
export interface TextImageMediaProps {
    imageUrl?: string;
    contentWidth?: number;
    imageZoom?: number;
    angle?: 'left' | 'dual' | 'none';
    focalPointX?: string;
    focalPointY?: string;
    hasMobileImage?: boolean;
}
export declare const TextImageContent: {
    ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, angle, focalPointX, focalPointY, hasMobileImage, }: TextImageContentProps & TextImageMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TextImageContent.d.ts.map