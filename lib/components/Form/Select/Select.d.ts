import { FieldComponentProps } from '../FormField/FormField';
import { Ref } from '../../../../node_modules/react';

export interface SelectProps extends FieldComponentProps {
    options?: {
        label: string;
        value: string;
    }[];
    refs?: Ref<HTMLInputElement | HTMLSelectElement>;
}
export declare const Select: ({ ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
