import { default as React } from '../../../node_modules/react';
import { gridColumnClasses, gridGapClasses, maxWidthClasses } from '../../utils/propClasses';

type maxWidthKeys = keyof typeof maxWidthClasses;
type gridColumnKeys = keyof typeof gridColumnClasses;
type gridGapKeys = keyof typeof gridGapClasses;
export interface ColumnProps {
    children: React.ReactNode;
    maxWidth?: maxWidthKeys;
    cols?: gridColumnKeys;
    gridGap?: gridGapKeys;
    reverse?: boolean;
}
export declare const ColumnWrapper: {
    ({ children, maxWidth, gridGap, cols, reverse }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Column: {
    ({ children, maxWidth, gridGap, cols, reverse }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children }: import('./ColumnContent').ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
