import React from 'react';
export interface DropDownItemProps {
    title: string | React.ReactNode;
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    href?: string;
    onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}
export interface DropDownProps {
    children?: React.ReactNode;
    buttonText?: string;
    renderAs?: 'button' | 'div';
    menuAlign?: 'left' | 'right';
    listItems: DropDownItemProps[];
}
export declare const DropDown: ({ children, buttonText, renderAs, listItems, menuAlign }: DropDownProps) => import("react/jsx-runtime").JSX.Element;
