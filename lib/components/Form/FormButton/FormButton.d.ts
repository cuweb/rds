import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    color?: 'red' | 'grey' | 'dark-grey';
}
export declare const FormButton: ({ title, color, type, disabled, ...rest }: FormButtonProps) => import("react/jsx-runtime").JSX.Element;
