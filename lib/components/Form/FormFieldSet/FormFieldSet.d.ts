export interface FieldSetProps {
    label: string;
    hiddenLabel?: boolean;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    helperpostop?: boolean;
    required?: boolean;
    isInline?: boolean;
    displayError?: boolean;
}
export interface FormFieldSetProps extends FieldSetProps {
    children: React.ReactNode;
}
export declare const FormFieldSet: ({ ...props }: FormFieldSetProps) => import("react/jsx-runtime").JSX.Element;
