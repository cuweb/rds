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
    onClose?: () => void;
}
/**
 * Modal component that renders a dialog element with various customizable options.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 * @param {string} content - The HTML content to be displayed inside the modal.
 * @param {boolean} isOpen - Determines whether the modal is open or closed.
 * @param {string} [maxWidth='4xl'] - The maximum width of the modal.
 * @param {boolean} [noProse=false] - If true, disables the default prose styling.
 * @param {boolean} [alignTop=false] - If true, aligns the modal to the top of the screen.
 * @param {string} ariaLabel - The aria-label attribute for accessibility.
 * @param {string} ariaDescription - The aria-describedby attribute for accessibility.
 * @param {Function} setIsOpen - Function to set the open state of the modal.
 * @param {boolean} [hideCloseButton=false] - If true, hides the close button.
 * @param {boolean} [preventOutsideClick=false] - If true, prevents closing the modal by clicking outside of it.
 * @param {Function} onClose - Callback function to be called when the modal is closed.
 *
 * @returns {JSX.Element} The rendered modal component.
 */
export declare const Modal: ({ children, content, isOpen, maxWidth, noProse, alignTop, ariaLabel, ariaDescription, setIsOpen, hideCloseButton, preventOutsideClick, onClose, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
