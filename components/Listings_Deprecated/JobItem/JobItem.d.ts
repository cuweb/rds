import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface JobItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    department?: string;
    dateData?: string;
    date?: string;
}
export interface ItemBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface BaseItemProps {
    as?: BaseItemTypeProps;
}
export interface TitleProps {
    as?: TitleTypeProps;
}
export declare const JobItem: {
    ({ as: Component, children, link }: ItemBaseProps & JobItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: JobItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & JobItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Details: {
        ({ dateData, date }: JobItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=JobItem.d.ts.map