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
    ({ children, onSubmit, schema, initialValues, }: FormProps): JSX.Element;
    displayName: string;
} & {
    Input: {
        ({ label, condition, ...props }: import("../Input/Input").InputProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Select: ({ label, options, condition, ...props }: import("../Select/Select").SelectProps & import("react").SelectHTMLAttributes<HTMLSelectElement> & import("react").ClassAttributes<HTMLSelectElement>) => JSX.Element;
    Checkbox: {
        ({ label, options, condition, ...props }: import("../Checkbox/Checkbox").CheckboxProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Radio: {
        ({ label, options, condition, ...props }: import("../Radio/Radio").RadioProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    Upload: {
        ({ label, onReset, onUpload, setPreview, condition, ...props }: any): JSX.Element;
        displayName: string;
    };
    Submit: {
        ({ title, disabled }: SubmitProps): JSX.Element;
        displayName: string;
    };
    WYSIWYG: {
        ({ label, editor, placeholder, ...props }: import("../WYSIWYG/WYSIWYG").WYSIWYGProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").ClassAttributes<HTMLInputElement>): JSX.Element;
        displayName: string;
    };
    DateTimePicker: ({ label, condition, ...props }: import("../DateTimePicker/DateTimePicker").PickerProps & import("formik").FieldHookConfig<string>) => JSX.Element;
    PlacesAutoComplete: ({ condition, eventAddress, eventLatitude, eventLongitude, ...props }: import("../PlacesAutoComplete/PlacesAutoComplete").PlacesAutoCompleteProps & import("formik").FieldHookConfig<object>) => JSX.Element;
};
//# sourceMappingURL=Form.d.ts.map