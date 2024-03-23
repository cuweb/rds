import React from '../../../node_modules/react';
export interface QuoteProps {
    children?: React.ReactNode;
    cite?: string;
    graphic?: 'border' | 'quote';
    isCenter?: boolean;
}
export declare const Quote: ({ children, cite, graphic, isCenter }: QuoteProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
