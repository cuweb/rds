import { FieldProps } from '../FormField/FormField';

export interface SelectProps extends FieldProps {
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Select: ({ ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
