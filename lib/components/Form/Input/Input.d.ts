import { default as React } from '../../../../node_modules/react';
import { FieldComponentProps } from '../FormField/FormField';
export interface InputProps extends FieldComponentProps {
    hasPrefix?: React.ReactNode;
    hasSuffix?: React.ReactNode;
    disabled?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
