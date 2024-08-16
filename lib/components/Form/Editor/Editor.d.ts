import { FieldProps } from '../FormField/FormField';
export interface EditorProps extends FieldProps, React.HTMLAttributes<HTMLDivElement> {
    name: string;
    label: string;
    value: string;
    helper?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Editor: ({ ...props }: EditorProps) => import("react/jsx-runtime").JSX.Element;
