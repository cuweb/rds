import { default as React } from '../../../node_modules/react';
export interface DialogProps {
    children?: React.ReactNode;
    title: string;
    description?: string;
    isOpen: boolean;
    setIsOpen: (k: boolean) => void;
}
export declare const Dialog: ({ children, title, description, isOpen, setIsOpen }: DialogProps) => import("react/jsx-runtime").JSX.Element;
