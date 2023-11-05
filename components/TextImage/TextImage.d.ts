import React from 'react';
export interface TextImageProps {
    children?: React.ReactNode;
    maxWidth?: '5xl' | '7xl' | 'max';
    hasBorder?: boolean;
    reverse?: boolean;
}
export declare const TextImageWrapper: ({ children, maxWidth, hasBorder, reverse }: TextImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const TextImage: (({ children, maxWidth, hasBorder, reverse }: TextImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, angle, focalPointX, focalPointY, hasMobileImage, }: import("./TextImageContent").TextImageContentProps & import("./TextImageContent").TextImageMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=TextImage.d.ts.map