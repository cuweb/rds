/// <reference types="react" />
export interface FieldWrapperProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3';
}
export declare const FieldWrapper: ({ children, cols }: FieldWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default FieldWrapper;
