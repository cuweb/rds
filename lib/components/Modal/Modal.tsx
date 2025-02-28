import React, { useRef, useEffect } from 'react'
import { maxWidthClasses } from '../../utils/propClasses'
import { sanitizeContent } from '../../helpers/functions'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface ModalProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  content?: string
  noProse?: boolean
  ariaLabel: string
  ariaDescription: string
  isOpen: boolean
  alignTop?: boolean
  setIsOpen: (k: boolean) => void
  hideCloseButton?: boolean
  preventOutsideClick?: boolean
  onClose?: () => void
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
export const Modal = ({
  children,
  content,
  isOpen,
  maxWidth = '4xl',
  noProse = false,
  alignTop = false,
  ariaLabel,
  ariaDescription,
  setIsOpen,
  hideCloseButton = false,
  preventOutsideClick = false,
  onClose,
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const useProse = noProse ? '' : 'cu-prose cu-prose-dark cu-prose-first-last'

  // If onClose is passed, call it here
  const initialRender = useRef(true)
  useEffect(() => {
    // Prevent initial render from calling onClose
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!isOpen && onClose && modalRef.current) {
      onClose()
    }
  }, [isOpen, onClose])

  // Add classes to the body to prevent scrolling and backdrop
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cu-dialog-open')
      document.body.classList.add('cu-no-body-scroll')
    } else {
      document.body.classList.remove('cu-dialog-open')
      document.body.classList.remove('cu-no-body-scroll')
    }
  }, [isOpen])

  // Prevent native Escape behavior
  useEffect(() => {
    const dialog = modalRef.current
    if (dialog) {
      const handleCancel = (event: Event) => {
        if (preventOutsideClick) {
          event.preventDefault()
        }
      }

      dialog.addEventListener('cancel', handleCancel)

      const handleEscapeKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && preventOutsideClick) {
          event.preventDefault()
        }
      }
      dialog.addEventListener('keydown', handleEscapeKeyDown)

      return () => {
        dialog.removeEventListener('cancel', handleCancel)
        dialog.removeEventListener('keydown', handleEscapeKeyDown)
      }
    }
  }, [preventOutsideClick])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !preventOutsideClick) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen, preventOutsideClick])

  const handleClickInModal = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === modalRef.current && !preventOutsideClick) {
      setIsOpen(false)
    }
  }

  //Add function to call when click outside modal to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        console.log('click outside')
        setIsOpen(false)
      }
    }

    if (isOpen && !preventOutsideClick) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose, preventOutsideClick])

  return (
    <dialog
      ref={modalRef}
      className={`cu-dialog ${isOpen ? `block` : `hidden`} absolute ${!alignTop ? `top-[50%] -translate-y-[50%]` : `top-20`} left-[50%] -translate-x-[50%] p-6 md:p-10 z-50 w-11/12 ${maxWidthClasses[maxWidth]} shadow-md rounded-md`}
      onClick={handleClickInModal}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescription}
    >
      {!hideCloseButton && (
        <button
          className="absolute top-0 right-0 z-50 p-1 rounded-bl bg-cu-black-200 text-cu-black-700 hover:bg-cu-red hover:text-white"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {content ? (
        <div className={useProse} dangerouslySetInnerHTML={{ __html: sanitizeContent(content) }} />
      ) : (
        <div className={useProse}>{children}</div>
      )}
    </dialog>
  )
}
