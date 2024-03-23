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
    ({ children, onSubmit, schema, initialValues, }: FormProps): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
} & {
    Input: {
        ({ label, condition, ...props }: import("../Input/Input").InputProps & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Select: ({ label, options, condition, ...props }: import("../Select/Select").SelectProps & import('../../../../node_modules/react').SelectHTMLAttributes<HTMLSelectElement> & import('../../../../node_modules/react').ClassAttributes<HTMLSelectElement>) => import('../../../../node_modules/react/jsx-runtime').JSX.Element;
    Checkbox: {
        ({ label, options, condition, ...props }: import("../Checkbox/Checkbox").CheckboxProps & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Radio: {
        ({ label, options, condition, ...props }: import("../Radio/Radio").RadioProps & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Upload: {
        ({ label, onReset, onUpload, onValidate, setPreview, condition, ...props }: import('../../../../node_modules/react').PropsWithChildren<import("../Upload/Upload").UploadProps>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Submit: {
        ({ title, disabled }: SubmitProps): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    WYSIWYG: {
        ({ label, editor, placeholder, ...props }: import("../WYSIWYG/WYSIWYG").WYSIWYGProps & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    DateTimePicker: ({ startDate, endDate, label, condition, ...props }: import("../DateTimePicker/DateTimePicker").PickerProps & import("formik").FieldHookConfig<string>) => import('../../../../node_modules/react/jsx-runtime').JSX.Element;
};
