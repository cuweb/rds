import React from 'react';
export interface ContainerProps {
    children?: React.ReactNode;
    isGrey?: boolean;
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
}
export declare const Container: ({ children, isGrey, maxWidth }: ContainerProps) => import("react/jsx-runtime").JSX.Element;
