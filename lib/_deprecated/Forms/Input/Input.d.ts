import { InputHTMLAttributes, ClassAttributes } from 'react';
export interface InputProps {
    label?: string;
    name: string;
    type?: string;
    condition?: () => boolean;
}
export declare const Input: {
    ({ label, condition, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
