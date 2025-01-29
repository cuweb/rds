import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface ModalProps {
    children?: React.ReactNode;
    maxWidth?: maxWidthKeys;
    content?: string;
    noProse?: boolean;
    ariaLabel: string;
    ariaDescription: string;
    isOpen: boolean;
    alignTop?: boolean;
    setIsOpen: (k: boolean) => void;
    hideCloseButton?: boolean;
    preventOutsideClick?: boolean;
    onCloseOutsideClick?: () => void;
}
export declare const Modal: ({ children, content, isOpen, maxWidth, noProse, alignTop, ariaLabel, ariaDescription, setIsOpen, hideCloseButton, preventOutsideClick, onCloseOutsideClick, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
