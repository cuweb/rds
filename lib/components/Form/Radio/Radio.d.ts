import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet';

export interface RadioProps extends FieldSetComponentProps {
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Radio: ({ ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
