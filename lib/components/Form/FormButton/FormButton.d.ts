import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    color?: 'red' | 'grey' | 'dark-grey';
    isOutline?: boolean;
    isType?: boolean;
}
export declare const FormButton: ({ title, color, type, disabled, isOutline, ...rest }: FormButtonProps) => import("react/jsx-runtime").JSX.Element;
