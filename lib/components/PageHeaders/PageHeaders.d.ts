import React from '../../../node_modules/react';
export interface PageHeadersProps {
    children?: React.ReactNode;
    header: string;
    as?: 'h1' | 'h2' | 'h3';
    size?: 'sm' | 'md' | 'lg';
    pronoun?: string;
}
export declare const PageHeadersWrapper: ({ children, header, as, size, pronoun }: PageHeadersProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const PageHeaders: (({ children, header, as, size, pronoun }: PageHeadersProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    People: {
        ({ jobTitle, ...restProps }: import("./PageHeadersPeople").PageHeadersPeopleProps & import("./PageHeadersPeople").PageHeadersSocialProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Event: {
        ({ startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, primaryButtonUrl, primaryButtonText, secondaryButtonUrl, secondaryButtonText, }: import("./PageHeadersEvent").PageHeadersEventProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};
