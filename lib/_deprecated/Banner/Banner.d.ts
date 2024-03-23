import React from '../../../node_modules/react';
export interface BannerProps {
    children?: React.ReactNode;
    title?: string;
    paragraph?: string;
    fontSize?: '5xl' | '6xl';
    maxWidth?: 'full' | '5xl' | '7xl';
    isType?: 'light-grey' | 'light-fade' | 'dark-wave' | 'red-wave' | 'image' | 'animated';
    align?: 'center' | 'left';
    hasOverlap?: boolean;
    image?: string;
    imageAlt?: string;
}
export interface BannerImgProps {
    image?: string;
    imageAlt?: string;
}
export declare const Banner: {
    ({ children, title, paragraph, maxWidth, isType, fontSize, align, hasOverlap, image, imageAlt, }: BannerProps & BannerImgProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
} & {
    ButtonGroup: {
        ({ children }: BannerProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};
