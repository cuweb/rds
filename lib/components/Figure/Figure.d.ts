import { default as React } from '../../../node_modules/react';
import { figureSizeClasses, figureAlignClasses, borderRadiusClasses } from '../../utils/propClasses';
type figureSizeKeys = keyof typeof figureSizeClasses;
type figureAlignKeys = keyof typeof figureAlignClasses;
type borderRadiusKeys = keyof typeof borderRadiusClasses;
export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: figureSizeKeys;
    align?: figureAlignKeys;
    rounded?: borderRadiusKeys;
    noMobile?: boolean;
}
export declare const Figure: ({ children, caption, size, align, rounded }: FigureProps) => import("react/jsx-runtime").JSX.Element;
export {};
