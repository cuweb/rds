import React from 'react';
export interface HeroTextImageMediaProps {
    children?: React.ReactNode;
    image?: string;
    angle?: 'left' | 'dual' | 'none';
    focalPointX?: string;
    focalPointY?: string;
    hasMobileImage?: boolean;
}
export declare const HeroTextImageMedia: {
    ({ children, image, angle, focalPointX, focalPointY, hasMobileImage, }: HeroTextImageMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
