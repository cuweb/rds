import React from '../../../node_modules/react';
export interface HeroTextImageMediaProps {
    children?: React.ReactNode;
    image?: string;
    angle?: 'left' | 'dual' | 'none';
    focalPointX?: string;
    focalPointY?: string;
    hasMobileImage?: boolean;
}
export declare const HeroTextImageMedia: {
    ({ children, image, angle, focalPointX, focalPointY, hasMobileImage, }: HeroTextImageMediaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
