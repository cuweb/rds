import { FieldComponentProps } from '../FormField/FormField';
export interface InputProps extends FieldComponentProps {
    hasPrefix?: React.ReactNode;
    hasSuffix?: React.ReactNode;
    disabled?: boolean;
}
export declare const Input: ({ ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
