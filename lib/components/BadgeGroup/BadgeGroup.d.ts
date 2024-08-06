import { default as React } from '../../../node_modules/react';
import { gridGapClasses } from '../../utils/propClasses';

type gridGapKeys = keyof typeof gridGapClasses;
export interface BadgeGroupProps {
    children: React.ReactNode;
    gap?: gridGapKeys;
}
export declare const BadgeGroup: ({ children, gap }: BadgeGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
