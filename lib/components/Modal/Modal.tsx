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
  onCloseOutsideClick?: () => void
}

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
  onCloseOutsideClick,
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const useProse = noProse ? '' : 'cu-prose cu-prose-dark cu-prose-first-last'

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen && !modalRef.current.open) {
        modalRef.current.showModal()
      } else if (!isOpen && modalRef.current.open) {
        modalRef.current.close()
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cu-no-body-scroll')
    } else {
      document.body.classList.remove('cu-no-body-scroll')
    }
    return () => {
      document.body.classList.remove('cu-no-body-scroll')
    }
  }, [isOpen])

  // Prevent native Escape behavior
  useEffect(() => {
    const dialog = modalRef.current
    if (dialog) {
      const handleCancel = (event: Event) => {
        if (preventOutsideClick) {
          event.preventDefault() // Prevent native close on Escape
        }
      }
      dialog.addEventListener('cancel', handleCancel)
      return () => {
        dialog.removeEventListener('cancel', handleCancel)
      }
    }
  }, [preventOutsideClick])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !preventOutsideClick) {
        setIsOpen(false)
        if (onCloseOutsideClick) {
          onCloseOutsideClick()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen, preventOutsideClick, onCloseOutsideClick])

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === modalRef.current && !preventOutsideClick) {
      setIsOpen(false)
      if (onCloseOutsideClick) {
        onCloseOutsideClick()
      }
    }
  }

  const positionTop = alignTop ? 'mt-12' : ''

  return (
    <dialog
      ref={modalRef}
      className={`cu-dialog relative ${positionTop} p-6 md:p-10 z-10 w-11/12 ${maxWidthClasses[maxWidth]} shadow-md rounded-md`}
      onClick={handleClickOutside}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescription}
    >
      {!hideCloseButton && (
        <button
          className="absolute top-0 right-0 z-50 p-1 rounded-bl bg-cu-black-200 text-cu-black-700 hover:bg-cu-red hover:text-white"
          onClick={() => setIsOpen(false)}
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
