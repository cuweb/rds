export interface UploadProps {
    label?: string;
    name: string;
    type?: string;
    setPreview?: any;
    onReset?: any;
    onUpload?: any;
    onValidate?: any;
    condition?: () => boolean;
}
export declare const Upload: {
    ({ label, onReset, onUpload, onValidate, setPreview, condition, ...props }: any): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Upload.d.ts.map