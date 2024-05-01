export interface FileUploadProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
}
export declare const FileUpload: ({ ...props }: FileUploadProps) => import("react/jsx-runtime").JSX.Element;
