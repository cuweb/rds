import { default as React } from '../../../../node_modules/react';
interface FormLoaderWrapperProps {
    children: React.ReactNode;
}
export declare const FormLoaderWrapper: ({ children }: FormLoaderWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const FormLoader: (({ children }: FormLoaderWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    RowLoader: React.FC<import('./RowLoader').RowLoaderProps>;
};
export {};
