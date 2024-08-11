import { default as React } from '../../../node_modules/react';
import { gridGapClasses } from '../../utils/propClasses';

type gridGapKeys = keyof typeof gridGapClasses;
export interface BadgeGroupProps {
    children: React.ReactNode;
    gap?: gridGapKeys;
    isAbsolute?: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export declare const BadgeGroup: ({ children, gap, isAbsolute, top, right, bottom, left, }: BadgeGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
