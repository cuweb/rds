export interface ImageUploadProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
}
export declare const ImageUpload: ({ ...props }: ImageUploadProps) => import("react/jsx-runtime").JSX.Element;
