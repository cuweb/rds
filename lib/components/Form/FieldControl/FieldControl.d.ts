import { FieldProps } from '../FormField/FormField';
import { FieldSetProps } from '../FormFieldSet/FormFieldSet';

export interface FieldControlProps extends FieldProps {
    control: 'text' | 'textarea' | 'select' | 'autosuggest' | 'datetime' | 'fileUpload' | 'placesAutoComplete';
    [key: string]: any;
}
export interface FieldControlSetProps extends FieldSetProps {
    control: 'checkbox' | 'radio';
    [key: string]: any;
}
export declare const FieldControl: ({ ...props }: FieldControlProps | FieldControlSetProps) => import("react/jsx-runtime").JSX.Element | null;
