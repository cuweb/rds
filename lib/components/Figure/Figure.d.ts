import React from 'react';
export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
    align?: 'left' | 'right' | 'center' | 'none';
    hasShadow?: boolean;
}
export declare const FigureWrapper: ({ children, caption, hasShadow, size, align }: FigureProps) => import("react/jsx-runtime").JSX.Element;
export declare const Figure: (({ children, caption, hasShadow, size, align }: FigureProps) => import("react/jsx-runtime").JSX.Element) & {
    Video: {
        ({ source }: import("./Figure.Video").FigureVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
