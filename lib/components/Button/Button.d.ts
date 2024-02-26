import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    title?: string;
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    isType?: 'solid' | 'outline' | 'disabled';
    color?: 'red' | 'grey' | 'dark-grey' | 'white';
    isSmall?: boolean;
    noBreak?: boolean;
    hasShadow?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    hasDropDown?: boolean;
}
export declare const Button: ({ isType, color, title, icon, isSmall, noBreak, hasShadow, isFull, isCenter, hasDropDown, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
