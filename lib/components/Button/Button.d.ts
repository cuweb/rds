import { default as React } from '../../../node_modules/react';
export interface ButtonProp extends React.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
}
export interface ButtonTitleProps extends ButtonProp {
    title: string;
    icon?: React.ReactNode;
    ariaLabel?: string;
}
export interface ButtonNoTitleProps extends ButtonProp {
    title?: string;
    icon: React.ReactNode;
    ariaLabel: string;
}
export declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, ariaLabel, ...rest }: ButtonNoTitleProps | ButtonTitleProps) => import("react/jsx-runtime").JSX.Element;
