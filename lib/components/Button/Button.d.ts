import React from '../../../node_modules/react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    title?: string;
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    color?: 'red' | 'grey' | 'dark-grey' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    isDisabled?: boolean;
}
export declare const Button: ({ color, title, icon, type, isSmall, isFull, isCenter, isDisabled, ...rest }: ButtonProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
