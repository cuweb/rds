import { PropsWithChildren } from 'react';
export interface UploadProps {
    label?: string;
    name: string;
    type?: string;
    onUpload: (x: File) => Promise<string>;
    onValidate: (x: HTMLImageElement) => boolean;
    onReset: (x: string) => string;
    setPreview: (x: string | ArrayBuffer | null | undefined) => void;
    required?: boolean | undefined;
    condition?: () => boolean;
}
export declare const Upload: {
    ({ label, onReset, onUpload, onValidate, setPreview, condition, ...props }: PropsWithChildren<UploadProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface UploadFieldProps {
    label?: string;
}
//# sourceMappingURL=Upload.d.ts.map