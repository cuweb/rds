import React from 'react';
export interface PageHeadersProps {
    children?: React.ReactNode;
    header: string;
    as?: 'h1' | 'h2' | 'h3';
    size?: 'sm' | 'md' | 'lg';
    pronoun?: string;
}
export declare const PageHeadersWrapper: ({ children, header, as, size, pronoun }: PageHeadersProps) => import("react/jsx-runtime").JSX.Element;
export declare const PageHeaders: (({ children, header, as, size, pronoun }: PageHeadersProps) => import("react/jsx-runtime").JSX.Element) & {
    People: {
        ({ jobTitle, ...restProps }: import("./PageHeadersPeople").PageHeadersPeopleProps & import("./PageHeadersPeople").PageHeadersSocialProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Event: {
        ({ startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, primaryButtonUrl, primaryButtonText, secondaryButtonUrl, secondaryButtonText, }: import("./PageHeadersEvent").PageHeadersEventProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
