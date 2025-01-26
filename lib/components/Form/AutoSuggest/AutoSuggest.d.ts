import { FieldComponentProps } from '../FormField/FormField';
interface Option {
    value: string;
    label: string;
    [key: string]: string | number | boolean;
}
export interface AutoSuggestProps extends FieldComponentProps {
    disabled?: boolean;
    options?: Option[];
    onChange?: (option: string | null | undefined) => void;
}
export declare const AutoSuggest: ({ ...props }: AutoSuggestProps) => import("react/jsx-runtime").JSX.Element;
export {};
