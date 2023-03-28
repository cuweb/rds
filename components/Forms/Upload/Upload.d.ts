export interface UploadProps {
    label?: string;
    name: string;
    type?: string;
    setPreview?: any;
    onReset?: any;
    onUpload?: any;
    condition?: () => boolean;
}
export declare const Upload: {
    ({ label, onReset, onUpload, setPreview, condition, ...props }: any): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Upload.d.ts.map