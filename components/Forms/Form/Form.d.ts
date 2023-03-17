import type { FormikHelpers, FormikValues } from 'formik';
export interface FormProps {
    children?: React.ReactNode;
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void;
    initialValues?: FormikValues;
    schema: {
        [field: string]: {
            value?: unknown;
            validation: unknown;
            label?: string;
        };
    };
}
export interface SubmitProps {
    title?: string;
}
export declare const Form: {
    ({ children, onSubmit, schema, initialValues, }: FormProps): JSX.Element;
    displayName: string;
} & {
    Input: {
        ({ label, ...props }: import("../Input/Input").InputProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Select: ({ label, options, ...props }: import("../Select/Select").SelectProps & import("react").SelectHTMLAttributes<HTMLSelectElement> & import("react").ClassAttributes<HTMLSelectElement>) => JSX.Element;
    Checkbox: {
        ({ label, options, ...props }: import("../Checkbox/Checkbox").CheckboxProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Radio: {
        ({ label, options, ...props }: import("../Radio/Radio").RadioProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Submit: {
        ({ title }: SubmitProps): JSX.Element;
        displayName: string;
    };
    WYSIWYG: {
        ({ label, editor, placeholder, ...props }: import("../WYSIWYG/WYSIWYG").WYSIWYGProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Form.d.ts.map