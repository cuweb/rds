import React from 'react';
export interface ModalProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    noButton?: boolean;
    isOpen: boolean;
    setIsOpen: (k: boolean) => void;
    hasOverlay?: boolean;
}
export declare const Modal: ({ children, title, description, noButton, isOpen, setIsOpen, hasOverlay, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
