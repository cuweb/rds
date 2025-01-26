import { default as React } from '../../../node_modules/react';
declare const opacityValues: number[];
export interface WideImageProps {
    children?: React.ReactNode;
    title: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    opacity?: (typeof opacityValues)[number];
    focalPointX?: number;
    focalPointY?: number;
    isType?: 'light' | 'dark' | 'image';
    hasWave?: boolean;
    hasScroll?: boolean;
}
export declare const WideImageWrapper: {
    ({ children, title, image, headerType, opacity, focalPointX, focalPointY, isType, hasScroll, hasWave, }: WideImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const WideImage: {
    ({ children, title, image, headerType, opacity, focalPointX, focalPointY, isType, hasScroll, hasWave, }: WideImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Signup: {
        ({ buttonText }: import('./WideImageSignup').WideImageSignupProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
