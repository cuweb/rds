
export interface WYSIWYGUploadProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
}
export declare const WYSIWYG: ({ ...props }: WYSIWYGUploadProps) => import("react/jsx-runtime").JSX.Element;
