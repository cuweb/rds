export interface InputProps {
    label: string;
    hiddenLabel?: boolean;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    displayError?: boolean;
}
export declare const Input: ({ ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
