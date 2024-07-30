import { default as React } from '../../../node_modules/react';

export interface ButtonTitleProps extends React.ComponentPropsWithoutRef<'button'> {
    title: string;
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    color?: 'red' | 'grey' | 'dark-grey' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    ariaLabel?: string;
}
export interface ButtonNoTitleProps extends React.ComponentPropsWithoutRef<'button'> {
    title?: string;
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    color?: 'red' | 'grey' | 'dark-grey' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    ariaLabel?: string;
}
export declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, ariaLabel, ...rest }: ButtonNoTitleProps | ButtonTitleProps) => import("react/jsx-runtime").JSX.Element;
