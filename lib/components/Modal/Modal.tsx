import React, { useRef, useEffect } from 'react'
import { maxWidthClasses } from '../../utils/propClasses'
import { proseStyles } from '../../utils/globalClasses'
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
}

export const Modal = ({
  children,
  content,
  isOpen,
  maxWidth = '5xl',
  noProse = false,
  alignTop = false,
  ariaLabel,
  ariaDescription,
  setIsOpen,
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const useProse = noProse ? '' : proseStyles.base

  useEffect(() => {
    if (modalRef.current?.open && !isOpen) {
      modalRef.current?.close()
    } else if (!modalRef.current?.open && isOpen) {
      modalRef.current?.showModal()
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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === modalRef.current) {
      setIsOpen(false)
    }
  }

  const positionTop = alignTop ? 'mt-12' : ''

  return (
    <dialog
      ref={modalRef}
      className={`cu-dialog relative ${positionTop} p-6 md:p-10 z-10 w-11/12 ${maxWidthClasses[maxWidth]} shadow-md rounded-md`}
      onClick={handleClick}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescription}
    >
      <button
        className="absolute top-0 right-0 z-50 p-0.5 rounded-bl-md bg-cu-black-50 text-cu-black-500 hover:bg-cu-red hover:text-white"
        onClick={() => setIsOpen(false)}
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {content ? (
        <div className={useProse} dangerouslySetInnerHTML={{ __html: sanitizeContent(content) }} />
      ) : (
        <div className={useProse}>{children}</div>
      )}
    </dialog>
  )
}
