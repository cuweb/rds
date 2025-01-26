import { maxWidthClasses } from '../../../helpers/optionClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface FieldSetComponentProps {
    name: string;
    required?: boolean;
    innerRef?: React.Ref<HTMLInputElement>;
}
export interface FieldSetProps extends FieldSetComponentProps {
    label: string;
    hiddenLabel?: boolean;
    maxWidth?: maxWidthKeys;
    helper?: string;
    helperpostop?: boolean;
    isInline?: boolean;
    displayError?: boolean;
    isLoading?: boolean;
    isError?: string;
}
export interface FormFieldSetProps extends FieldSetProps {
    children: React.ReactNode;
}
export declare const FormFieldSet: ({ ...props }: FormFieldSetProps) => import("react/jsx-runtime").JSX.Element;
export {};
