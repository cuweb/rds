import { FieldSetProps } from '../FormFieldSet/FormFieldSet';

export interface CheckboxProps extends FieldSetProps {
    checkBoxRight?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Checkbox: ({ ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
