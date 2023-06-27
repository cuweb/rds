import React from 'react';
export interface HeroTextImageMediaProps {
    children?: React.ReactNode;
    image?: string;
    imageWidth?: '25' | '33' | '40' | '50';
    angle?: 'left' | 'right' | 'full';
    focalPointX?: string;
    focalPointY?: string;
}
export declare const rdsImageWidth: {
    25: string;
    33: string;
    40: string;
    50: string;
};
export declare const HeroTextImageMedia: {
    ({ children, image, imageWidth, angle, focalPointX, focalPointY, }: HeroTextImageMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=HeroTextImageMedia.d.ts.map