import type { FieldHookConfig } from 'formik';
export interface PickerProps {
    label?: string;
    condition?: () => boolean;
    startDate?: string;
    endDate?: string;
}
export declare const DateTimePicker: ({ startDate, endDate, label, condition, ...props }: PickerProps & FieldHookConfig<string>) => import('../../../../node_modules/react/jsx-runtime').JSX.Element;
