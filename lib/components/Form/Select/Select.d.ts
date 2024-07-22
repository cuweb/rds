import { FieldComponentProps } from '../FormField/FormField';

export interface SelectProps extends FieldComponentProps {
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Select: ({ ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
