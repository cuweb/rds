import React from 'react';
export interface HeroTextImageContentProps {
    children?: React.ReactNode;
    title: string;
    paragraph?: string;
    headerSmall?: boolean;
    headerType?: 'h1' | 'h2';
    image?: string;
    imageAngle?: boolean;
    focalPointX?: string;
    focalPointY?: string;
}
export declare const HeroTextImageContent: {
    ({ children, title, paragraph, headerType, image, imageAngle, focalPointX, focalPointY, }: HeroTextImageContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=HeroTextImageContent.d.ts.map