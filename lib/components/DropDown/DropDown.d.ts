import React from '../../../node_modules/react';
export interface DropDownItemProps {
    title: string | React.ReactNode;
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    href?: string;
    onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}
export interface DropDownProps {
    children?: React.ReactNode;
    buttonText?: string;
    menuAlign?: 'left' | 'right';
    listItems: DropDownItemProps[];
}
export declare const DropDown: ({ children, buttonText, menuAlign, listItems }: DropDownProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
