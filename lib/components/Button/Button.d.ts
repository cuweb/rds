import { default as React } from '../../../node_modules/react';

export interface ButtonProp extends React.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    title?: string;
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    ariaLabel?: string;
}
export declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, ariaLabel, ...rest }: ButtonProp) => import("react/jsx-runtime").JSX.Element;
