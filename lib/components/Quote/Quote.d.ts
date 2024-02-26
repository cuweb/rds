import React from 'react';
export interface QuoteProps {
    children?: React.ReactNode;
    cite?: string;
    graphic?: 'border' | 'quote';
    isCenter?: boolean;
}
export declare const Quote: ({ children, cite, graphic, isCenter }: QuoteProps) => import("react/jsx-runtime").JSX.Element;
