/// <reference types="react" />
export interface FieldGroupProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3';
}
export declare const FieldGroup: ({ children, cols }: FieldGroupProps) => import("react/jsx-runtime").JSX.Element;
export default FieldGroup;
