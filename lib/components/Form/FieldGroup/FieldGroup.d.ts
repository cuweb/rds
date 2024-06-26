export interface FieldGroupProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3';
    alignment?: 'top' | 'bottom' | 'center';
}
export declare const FieldGroup: ({ children, cols, alignment }: FieldGroupProps) => import("react/jsx-runtime").JSX.Element;
export default FieldGroup;
