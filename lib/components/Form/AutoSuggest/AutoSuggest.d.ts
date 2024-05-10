export interface AutoSuggestProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    options?: {
        value: string;
        label: string;
    }[];
    disabled?: boolean;
}
export declare const AutoSuggest: ({ ...props }: AutoSuggestProps) => import("react/jsx-runtime").JSX.Element;
export default AutoSuggest;
