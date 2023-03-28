import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    title?: string;
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    isType?: 'default' | 'ghost' | 'grey' | 'dark-grey' | 'white' | 'disabled';
    size?: 'sm' | 'base';
    hasShadow?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    disabled?: boolean;
    hasDropDown?: boolean;
    url?: string | undefined;
}
export declare const Button: ({ isType, size, title, icon, hasShadow, isFull, isCenter, url, hasDropDown, ...rest }: ButtonProps) => JSX.Element;
//# sourceMappingURL=Button.d.ts.map