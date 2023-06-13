import React from 'react';
export interface HeroBannerProps {
    children?: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasBorder?: boolean;
}
export declare const HeroBannerWrapper: ({ children, hasBorder, maxWidth }: HeroBannerProps) => import("react/jsx-runtime").JSX.Element;
export declare const HeroBanner: (({ children, hasBorder, maxWidth }: HeroBannerProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, paragraph, image, imageAngle, headerSmall, }: import("./HeroBannerContent").HeroBannerContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=HeroBanner.d.ts.map