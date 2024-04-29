export interface CheckboxProps {
    label: string;
    name: string;
    helper?: string;
    isInline?: boolean;
    required?: boolean;
    checkBoxRight?: boolean;
    options?: {
        key: string;
        value: string;
    }[];
}
export declare const Checkbox: ({ ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
