import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    title?: string;
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    isType?: 'solid' | 'outline' | 'disabled';
    color?: 'red' | 'grey' | 'dark-grey' | 'white';
    isSmall?: boolean;
    hasShadow?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    hasDropDown?: boolean;
}
export declare const Button: ({ isType, color, title, icon, isSmall, hasShadow, isFull, isCenter, hasDropDown, ...rest }: ButtonProps) => JSX.Element;
//# sourceMappingURL=Button.d.ts.map