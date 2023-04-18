import React from 'react';
export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    align?: 'left' | 'right' | 'center' | 'none';
    isRound?: boolean;
    isCircle?: boolean;
    hasShadow?: boolean;
}
export declare const FigureWrapper: ({ children, caption, isRound, isCircle, hasShadow, size, align, }: FigureProps) => JSX.Element;
export declare const Figure: (({ children, caption, isRound, isCircle, hasShadow, size, align, }: FigureProps) => JSX.Element) & {
    Video: {
        ({ source }: import("./Figure.Video").FigureVideoProps): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Figure.d.ts.map