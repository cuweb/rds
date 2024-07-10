import { FieldSetProps } from '../FormFieldSet/FormFieldSet';

export interface RadioProps extends FieldSetProps {
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Radio: ({ ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
