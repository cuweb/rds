import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet';
import { Ref } from '../../../../node_modules/react';
export interface CheckboxProps extends FieldSetComponentProps {
    checkBoxRight?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
    refs?: Ref<HTMLInputElement | HTMLSelectElement>;
}
export declare const Checkbox: import('../../../../node_modules/react').ForwardRefExoticComponent<CheckboxProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
