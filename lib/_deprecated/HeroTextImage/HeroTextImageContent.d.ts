import React from '../../../node_modules/react';
export interface HeroTextImageContentProps {
    children?: React.ReactNode;
    title: string;
    paragraph?: string;
    headerType?: 'h1' | 'h2';
    isCenter?: boolean;
    hasMediaCol?: boolean;
}
export declare const HeroTextImageContent: {
    ({ children, title, paragraph, headerType, isCenter, hasMediaCol, }: HeroTextImageContentProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
