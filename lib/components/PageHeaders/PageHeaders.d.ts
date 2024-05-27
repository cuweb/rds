import { default as React } from '../../../node_modules/react';

export interface PageHeadersProps {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3';
    header: string;
    content?: string;
    size?: keyof typeof headerSize;
    isCenter?: boolean;
    pronoun?: string;
    noUnderline?: boolean;
}
declare const headerSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
};
export declare const PageHeadersWrapper: {
    ({ children, as, header, content, size, isCenter, noUnderline, pronoun, }: PageHeadersProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const PageHeaders: {
    ({ children, as, header, content, size, isCenter, noUnderline, pronoun, }: PageHeadersProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    People: {
        ({ jobTitle, ...restProps }: import('./PageHeadersPeople').PageHeadersPeopleProps & import('./PageHeadersPeople').PageHeadersSocialProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Event: {
        ({ children, startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, }: import('./PageHeadersEvent').PageHeadersEventProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
