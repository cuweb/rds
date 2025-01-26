import { default as React } from '../../../node_modules/react';
import { gridColumnClasses } from '../../utils/propClasses';
type gridColumnKeys = keyof typeof gridColumnClasses;
export interface ColumnProps {
    children: React.ReactNode;
    cols?: gridColumnKeys;
}
export declare const ColumnWrapper: {
    ({ children, cols }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Column: {
    ({ children, cols }: ColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children }: import('./ColumnContent').ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
