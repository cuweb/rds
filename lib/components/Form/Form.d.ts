export interface FormWrapperProps {
    children: React.ReactNode;
    formikProps: any;
}
export declare const FormWrapper: ({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const Form: (({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    FieldGroup: ({ children, cols, alignment }: import('./FieldGroup/FieldGroup').FieldGroupProps) => import("react/jsx-runtime").JSX.Element;
    FormField: ({ children, label, hiddenLabel, name, maxWidth, helper, helperpostop, required, displayError, }: import('./FormField/FormField').FormFieldProps) => import("react/jsx-runtime").JSX.Element;
    FieldControl: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('./FieldControl/FieldControl').FieldControlProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
    FieldArrayContainer: ({ children }: import('./FieldArrayContainer/FieldArrayContainer').FieldArrayContainerProps) => import("react/jsx-runtime").JSX.Element;
    Error: ({ ...props }: import('./Error/Error').ErrorProps) => import("react/jsx-runtime").JSX.Element;
};
