import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface FeedItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    date?: string;
    excerpt?: string;
    category?: string;
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
export declare const FeedItem: {
    ({ as: Component, children, link }: ItemBaseProps & FeedItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: FeedItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & FeedItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Date: {
        ({ date }: FeedItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ excerpt }: FeedItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Category: {
        ({ category }: FeedItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=FeedItem.d.ts.map