import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet';
import { Ref } from '../../../../node_modules/react';
export interface RadioProps extends FieldSetComponentProps {
    options?: {
        label: string;
        value: string;
    }[];
    refs?: Ref<HTMLInputElement | HTMLSelectElement>;
}
export declare const Radio: import('../../../../node_modules/react').ForwardRefExoticComponent<RadioProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
