import type { FieldHookConfig } from 'formik';
export interface PickerProps {
    label?: string;
    condition?: () => boolean;
}
export declare const DateTimePicker: ({ label, condition, ...props }: PickerProps & FieldHookConfig<string>) => JSX.Element;
//# sourceMappingURL=DateTimePicker.d.ts.map