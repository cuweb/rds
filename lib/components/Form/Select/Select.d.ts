export interface InputProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
}
export declare const Select: ({ ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
