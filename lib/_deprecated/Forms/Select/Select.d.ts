import { SelectHTMLAttributes, ClassAttributes } from '../../../../node_modules/react';
export interface SelectProps {
    label?: string;
    name: string;
    options?: {
        label: string;
        value: string;
    }[];
    condition?: () => boolean;
}
export declare const Select: ({ label, options, condition, ...props }: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>) => import('../../../../node_modules/react/jsx-runtime').JSX.Element;
