import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';

type maxWidthKeys = keyof typeof maxWidthClasses;
declare const opacityValues: number[];
export interface WideImageProps {
    children?: React.ReactNode;
    scrollTo?: React.ReactNode;
    as?: 'section' | 'div';
    title: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    maxWidth?: maxWidthKeys;
    opacity?: (typeof opacityValues)[number];
    focalPointX?: string;
    focalPointY?: string;
    isType?: 'light' | 'dark' | 'image';
    hasWave?: boolean;
}
export declare const WideImageWrapper: {
    ({ children, scrollTo, as, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, hasWave, }: WideImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const WideImage: {
    ({ children, scrollTo, as, title, image, headerType, maxWidth, opacity, focalPointX, focalPointY, isType, hasWave, }: WideImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Signup: {
        ({ buttonText }: import('./WideImageSignup').WideImageSignupProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
