import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface MarketplaceItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    image?: string;
    alt?: string;
    cost?: string;
    condition?: string;
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
export declare const MarketplaceItem: {
    ({ as: Component, children, link }: ItemBaseProps & MarketplaceItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: MarketplaceItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & MarketplaceItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Image: {
        ({ image, alt }: MarketplaceItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Details: {
        ({ cost, condition }: MarketplaceItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Category: {
        ({ category }: MarketplaceItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=MarketplaceItem.d.ts.map