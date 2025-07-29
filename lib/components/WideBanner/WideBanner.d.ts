import { default as React } from '../../../node_modules/react';
declare const opacityValues: number[];
export interface WideBannerProps {
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
export declare const WideBanner: ({ children, title, image, headerType, opacity, focalPointX, focalPointY, isType, hasScroll, hasWave, }: WideBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};
