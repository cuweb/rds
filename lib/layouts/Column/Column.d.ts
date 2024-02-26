import React from 'react';
export interface ColumnProps {
    children: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    gridGap?: '0' | '5' | '10';
    cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
}
export declare const ColumnWrapper: ({ children, maxWidth, gridGap, cols }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Column: (({ children, maxWidth, gridGap, cols }: ColumnProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children }: import("./ColumnContent").ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
