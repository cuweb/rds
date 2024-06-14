
export interface EditorProps {
    name: string;
    label: string;
    setEditorContent: (newValue: string | null) => void;
    helper?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    errorMessage?: string;
}
export interface OnChangePluginProps {
    onChange: (htmlString: string | null) => void;
    required: boolean;
    disabled: boolean;
}
export declare const Editor: ({ ...props }: EditorProps) => import("react/jsx-runtime").JSX.Element;
