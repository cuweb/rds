import { FieldProps } from '../FormField/FormField';

interface Option {
    value: string;
    label: string;
}
export interface AutoSuggestProps extends FieldProps {
    disabled?: boolean;
    options?: Option[];
}
export declare const AutoSuggest: ({ ...props }: AutoSuggestProps) => import("react/jsx-runtime").JSX.Element;
export default AutoSuggest;
