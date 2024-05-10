export interface FormFieldProps {
    children: React.ReactNode;
    label: string;
    name: string;
    helper?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    isInline?: boolean;
    required?: boolean;
    displayError?: boolean;
}
export declare const FormFieldSet: ({ ...props }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
