import { default as React } from '../../../node_modules/react';
import { headerSizeClasses } from '../../utils/propClasses';
type headerSizeKeys = keyof typeof headerSizeClasses;
export interface PageHeaderProps {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3';
    header: string;
    content?: string;
    size?: headerSizeKeys;
    isWhite?: boolean;
    isCenter?: boolean;
    pronoun?: string;
    noUnderline?: boolean;
}
export declare const PageHeaderWrapper: {
    ({ children, as, header, content, size, isWhite, isCenter, noUnderline, pronoun, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const PageHeader: {
    ({ children, as, header, content, size, isWhite, isCenter, noUnderline, pronoun, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Event: {
        ({ startDate, endDate }: import('./PageHeaderEvent').PageHeaderEventProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
