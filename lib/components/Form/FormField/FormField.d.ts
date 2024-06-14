/// <reference types="react" />
export interface FormFieldProps {
    children: React.ReactNode;
    label: string;
    hiddenLabel?: boolean;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    helperpostop?: boolean;
    required?: boolean;
    displayError?: boolean;
    disabled?: boolean;
}
export declare const FormField: ({ children, label, hiddenLabel, name, maxWidth, helper, helperpostop, required, displayError, }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormField;
