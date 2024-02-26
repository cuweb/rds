/// <reference types="react" />
import type { FormikHelpers, FormikProps, FormikValues } from 'formik';
export interface FormProps {
    children?: ((props: FormikProps<FormikValues>) => React.ReactNode) | React.ReactNode;
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
    disabled?: boolean;
}
export declare const Form: {
    ({ children, onSubmit, schema, initialValues, }: FormProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Input: {
        ({ label, condition, ...props }: import("../Input/Input").InputProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Select: ({ label, options, condition, ...props }: import("../Select/Select").SelectProps & import("react").SelectHTMLAttributes<HTMLSelectElement> & import("react").ClassAttributes<HTMLSelectElement>) => import("react/jsx-runtime").JSX.Element;
    Checkbox: {
        ({ label, options, condition, ...props }: import("../Checkbox/Checkbox").CheckboxProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Radio: {
        ({ label, options, condition, ...props }: import("../Radio/Radio").RadioProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Upload: {
        ({ label, onReset, onUpload, onValidate, setPreview, condition, ...props }: import("react").PropsWithChildren<import("../Upload/Upload").UploadProps>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Submit: {
        ({ title, disabled }: SubmitProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    WYSIWYG: {
        ({ label, editor, placeholder, ...props }: import("../WYSIWYG/WYSIWYG").WYSIWYGProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateTimePicker: ({ startDate, endDate, label, condition, ...props }: import("../DateTimePicker/DateTimePicker").PickerProps & import("formik").FieldHookConfig<string>) => import("react/jsx-runtime").JSX.Element;
};
