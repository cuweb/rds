import React from 'react';
export interface HeroTextImageProps {
    children?: React.ReactNode;
    title: string;
    image?: string;
    hasBorder?: boolean;
    headerSmall?: boolean;
    imageAngle?: boolean;
    imageTall?: boolean;
}
export declare const rdsMaxWidth: {
    '5xl': string;
    '7xl': string;
    max: string;
};
export declare const HeroTextImageWrapper: ({ children, title, image, hasBorder, headerSmall, imageAngle, imageTall, }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const HeroTextImage: (({ children, title, image, hasBorder, headerSmall, imageAngle, imageTall, }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children }: import("./HeroTextImageContent").HeroTextImageContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=HeroTextImage.d.ts.map