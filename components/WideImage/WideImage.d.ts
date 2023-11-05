import React from 'react';
export interface WideImageProps {
    children?: React.ReactNode;
    title?: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    maxWidth?: 'full' | '5xl' | '7xl' | 'max';
    opacity?: 40 | 50 | 60 | 70 | 80;
    focalPointX?: string;
    focalPointY?: string;
}
export declare const WideImage: ({ children, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, }: WideImageProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=WideImage.d.ts.map