import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface FileItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    filesize?: string;
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
export declare const FileItem: {
    ({ as: Component, children, link }: ItemBaseProps & FileItemProps): JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: FileItemProps): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & FileItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Details: {
        ({ filesize, date }: FileItemProps): JSX.Element;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=FileItem.d.ts.map