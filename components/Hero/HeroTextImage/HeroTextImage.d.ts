import React from 'react';
export interface HeroTextImageProps {
    children?: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasBorder?: boolean;
}
export declare const HeroTextImageWrapper: ({ children, hasBorder, maxWidth }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const HeroTextImage: (({ children, hasBorder, maxWidth }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, paragraph, headerType, image, imageAngle, focalPointX, focalPointY, }: import("./HeroTextImageContent").HeroTextImageContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=HeroTextImage.d.ts.map