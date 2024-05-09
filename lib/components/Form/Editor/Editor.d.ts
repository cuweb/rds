
export interface EditorProps {
    name: string;
    label: string;
    setEditorContent: any;
    helper?: string;
    value?: string;
    placeholder?: string;
    disable?: boolean;
    required?: boolean;
    errorMessage?: string;
}
export declare const Editor: ({ ...props }: EditorProps) => import("react/jsx-runtime").JSX.Element;
