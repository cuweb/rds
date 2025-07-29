import { default as React } from '../../../node_modules/react';
import { justifyContentClasses, bgOpacityClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
type bgOpacityKeys = keyof typeof bgOpacityClasses;
export interface WideBannerProps {
    children?: React.ReactNode;
    title: string;
    headerType?: 'h1' | 'h2';
    justify?: justifyContentKeys;
    opacity?: bgOpacityKeys;
    image?: string;
    imageAlt?: string;
}
export declare const WideBanner: ({ children, title, headerType, opacity, justify, image, imageAlt, }: WideBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};
