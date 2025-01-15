import { FieldComponentProps } from '../FormField/FormField';
import { Ref } from '../../../../node_modules/react';
export interface SelectOptions {
    label: string;
    value: string;
}
export interface SelectProps extends FieldComponentProps {
    options?: SelectOptions[];
    refs?: Ref<HTMLInputElement | HTMLSelectElement>;
}
export declare const Select: import('../../../../node_modules/react').ForwardRefExoticComponent<SelectProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
