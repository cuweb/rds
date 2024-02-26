import React from 'react';
export interface HeroTextImageContentProps {
    children?: React.ReactNode;
    title: string;
    paragraph?: string;
    headerType?: 'h1' | 'h2';
    isCenter?: boolean;
    hasMediaCol?: boolean;
}
export declare const HeroTextImageContent: {
    ({ children, title, paragraph, headerType, isCenter, hasMediaCol, }: HeroTextImageContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
