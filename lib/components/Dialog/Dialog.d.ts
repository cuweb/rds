import { default as React } from '../../../node_modules/react';

export interface DialogProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    noButton?: boolean;
    isOpen: boolean;
    setIsOpen: (k: boolean) => void;
    noOutsideClose?: boolean;
}
export declare const Dialog: ({ title, description, noButton, isOpen, setIsOpen, noOutsideClose }: DialogProps) => import("react/jsx-runtime").JSX.Element;
