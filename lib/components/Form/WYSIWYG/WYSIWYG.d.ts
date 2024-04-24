
export interface WYSIWYGProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    displayError?: boolean;
}
export declare const WYSIWYG: ({ ...props }: WYSIWYGProps) => import("react/jsx-runtime").JSX.Element;
