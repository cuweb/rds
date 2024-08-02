import { default as React } from '../../../node_modules/react';

export interface ModalProps {
    children?: React.ReactNode;
    maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    content?: string;
    noProse?: boolean;
    ariaLabel: string;
    ariaDescription: string;
    isOpen: boolean;
    alignTop?: boolean;
    setIsOpen: (k: boolean) => void;
}
export declare const Modal: ({ children, content, isOpen, setIsOpen, maxWidth, noProse, alignTop, ariaLabel, ariaDescription, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
