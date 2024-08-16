import { default as React } from '../../../node_modules/react';
import { figureSizeClasses, figureAlignClasses } from '../../utils/propClasses';
type figureSizeKeys = keyof typeof figureSizeClasses;
type figureAlignKeys = keyof typeof figureAlignClasses;
export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: figureSizeKeys;
    align?: figureAlignKeys;
    noMobile?: boolean;
}
export declare const FigureWrapper: {
    ({ children, caption, noMobile, size, align }: FigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Figure: {
    ({ children, caption, noMobile, size, align }: FigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Video: {
        ({ source }: import('./Figure.Video').FigureVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
