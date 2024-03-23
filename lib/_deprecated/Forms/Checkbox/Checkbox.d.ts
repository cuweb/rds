import { InputHTMLAttributes, ClassAttributes } from '../../../../node_modules/react';
export interface CheckboxProps {
    label?: string;
    caption?: string;
    name: string;
    options?: {
        name: string;
        label: string;
        id: number;
    }[];
    condition?: () => boolean;
}
export declare const Checkbox: {
    ({ label, options, condition, ...props }: CheckboxProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
