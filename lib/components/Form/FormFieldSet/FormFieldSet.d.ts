export interface FieldSetComponentProps {
    name: string;
    required?: boolean;
}
export interface FieldSetProps extends FieldSetComponentProps {
    label: string;
    hiddenLabel?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    helperpostop?: boolean;
    isInline?: boolean;
    displayError?: boolean;
}
export interface FormFieldSetProps extends FieldSetProps {
    children: React.ReactNode;
}
export declare const FormFieldSet: ({ ...props }: FormFieldSetProps) => import("react/jsx-runtime").JSX.Element;
