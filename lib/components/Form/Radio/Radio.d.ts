export interface RadioProps {
    label: string;
    name: string;
    helper?: string;
    isInline?: boolean;
    required?: boolean;
    options?: {
        key: string;
        value: string;
    }[];
}
export declare const Radio: ({ ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
