import { default as React } from '../../../node_modules/react';

export interface ModalProps {
    children?: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (k: boolean) => void;
    noOutsideClose?: boolean;
}
export declare const Modal: ({ children, isOpen, setIsOpen, noOutsideClose }: ModalProps) => import("react/jsx-runtime").JSX.Element;
