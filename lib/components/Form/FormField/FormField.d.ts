import { maxWidthClasses } from '../../../helpers/optionClasses';

type maxWidthKeys = keyof typeof maxWidthClasses;
export interface FieldComponentProps {
    name: string;
    required?: boolean;
}
export interface FieldProps extends FieldComponentProps {
    label: string;
    hiddenLabel?: boolean;
    maxWidth?: maxWidthKeys;
    helper?: string;
    helperpostop?: boolean;
    displayError?: boolean;
}
export interface FormFieldProps extends FieldProps {
    children: React.ReactNode;
}
export declare const FormField: ({ children, label, hiddenLabel, name, maxWidth, helper, helperpostop, required, displayError, }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormField;
