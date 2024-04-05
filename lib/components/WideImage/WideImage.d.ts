import React from '../../../node_modules/react';
declare const opacityValues: number[];
export interface WideImageProps {
    children?: React.ReactNode;
    title?: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    maxWidth?: 'full' | '5xl' | '7xl' | 'max';
    opacity?: (typeof opacityValues)[number];
    focalPointX?: string;
    focalPointY?: string;
    isType?: 'light' | 'dark' | 'image';
}
export declare const WideImageWrapper: ({ children, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, }: WideImageProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const WideImage: (({ children, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, }: WideImageProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Signup: {
        ({ buttonText }: import("./WideImageSignup").WideImageSignupProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};
export {};
