import { FieldComponentProps } from '../FormField/FormField';

export interface FileUploadProps extends FieldComponentProps {
    onChange?: (File: FileList | File[] | null) => void;
}
export declare const FileUpload: ({ ...props }: FileUploadProps) => import("react/jsx-runtime").JSX.Element;
