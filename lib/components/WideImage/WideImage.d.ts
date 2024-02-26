import React from 'react';
export declare const styles: {
    baseBg: string;
    lightBg: string;
    darkBg: string;
    imageBg: string;
    overlay: string;
    content: string;
    headerOne: string;
    headerTwo: string;
};
export interface WideImageProps {
    children?: React.ReactNode;
    title?: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    maxWidth?: 'full' | '5xl' | '7xl' | 'max';
    opacity?: 40 | 50 | 60 | 70 | 80;
    focalPointX?: string;
    focalPointY?: string;
    isType?: 'light' | 'dark' | 'image';
}
export declare const WideImageWrapper: ({ children, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, }: WideImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const WideImage: (({ children, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, }: WideImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Signup: {
        ({ buttonText }: import("./WideImageSignup").WideImageSignupProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
