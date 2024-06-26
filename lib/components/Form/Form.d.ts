export interface FormWrapperProps {
    children: React.ReactNode;
    formikProps: any;
}
export declare const FormWrapper: ({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const Form: (({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    FieldGroup: ({ children, cols }: import('./FieldGroup/FieldGroup').FieldGroupProps) => import("react/jsx-runtime").JSX.Element;
    FieldControl: ({ ...props }: import('./FieldControl/FieldControl').FieldControlProps) => import("react/jsx-runtime").JSX.Element | null;
    FieldArrayContainer: ({ children }: import('./FieldArrayContainer/FieldArrayContainer').FieldArrayContainerProps) => import("react/jsx-runtime").JSX.Element;
    Editor: ({ ...props }: import('./Editor/Editor').EditorProps) => import("react/jsx-runtime").JSX.Element;
};
