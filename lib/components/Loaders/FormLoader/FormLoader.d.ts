import { default as React } from '../../../../node_modules/react';
interface FormLoaderWrapperProps {
    children: React.ReactNode;
    noMargin?: boolean;
}
export declare const FormLoaderWrapper: ({ children, noMargin }: FormLoaderWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const FormLoader: (({ children, noMargin }: FormLoaderWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    RowLoader: React.FC<import('./RowLoader').RowLoaderProps>;
};
export {};
