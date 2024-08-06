import { default as React } from '../../../node_modules/react';

export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
    align?: 'left' | 'right' | 'center' | 'none';
    isRound?: boolean;
    noMobile?: boolean;
}
export declare const FigureWrapper: {
    ({ children, caption, isRound, noMobile, size, align }: FigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Figure: {
    ({ children, caption, isRound, noMobile, size, align }: FigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Video: {
        ({ source }: import('./Figure.Video').FigureVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
