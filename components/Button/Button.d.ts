import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    isType?: 'default' | 'ghost' | 'grey' | 'dark-grey' | 'white' | 'disabled';
    size?: 'sm' | 'base';
    hasShadow?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    isDisabled?: boolean;
    hasDropDown?: boolean;
    url?: string | undefined;
}
export declare const Button: ({ isType, size, title, hasShadow, isFull, isCenter, url, hasDropDown, ...rest }: ButtonProps) => JSX.Element;
//# sourceMappingURL=Button.d.ts.map