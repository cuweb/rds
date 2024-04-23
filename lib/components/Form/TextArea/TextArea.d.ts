export interface TextAreaProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
}
export declare const TextArea: ({ ...props }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
