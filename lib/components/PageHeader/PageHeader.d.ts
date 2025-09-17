import { default as React } from '../../../node_modules/react';
import { headerSizeClasses } from '../../utils/propClasses';
type HeaderSize = keyof typeof headerSizeClasses;
export interface PageHeaderProps {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3';
    preHeader?: string;
    header: string;
    content?: string;
    metaData?: React.ReactNode;
    size?: HeaderSize;
    isLight?: boolean;
    isWhite?: boolean;
    isCenter?: boolean;
    pronoun?: string;
    noUnderline?: boolean;
}
export declare const PageHeaderWrapper: {
    ({ children, as, preHeader, header, content, size, isLight, isWhite, isCenter, noUnderline, pronoun, metaData, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const PageHeader: {
    ({ children, as, preHeader, header, content, size, isLight, isWhite, isCenter, noUnderline, pronoun, metaData, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Event: {
        ({ startDate, endDate }: import('./PageHeaderEvent').PageHeaderEventProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
