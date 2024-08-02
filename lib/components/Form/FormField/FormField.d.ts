export interface FieldComponentProps {
    name: string;
    required?: boolean;
}
export interface FieldProps extends FieldComponentProps {
    label: string;
    hiddenLabel?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    helperpostop?: boolean;
    displayError?: boolean;
}
export interface FormFieldProps extends FieldProps {
    children: React.ReactNode;
}
export declare const FormField: ({ children, label, hiddenLabel, name, maxWidth, helper, helperpostop, required, displayError, }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormField;
