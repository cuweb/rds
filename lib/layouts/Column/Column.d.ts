import { default as React } from '../../../node_modules/react';
import { gridColumnClasses } from '../../utils/propClasses';
type gridColumnKeys = keyof typeof gridColumnClasses;
export interface ColumnProps {
    children: React.ReactNode;
    cols?: gridColumnKeys;
    reverse?: boolean;
}
export declare const ColumnWrapper: {
    ({ children, cols, reverse }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Column: {
    ({ children, cols, reverse }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, reverse }: import('./ColumnContent').ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
