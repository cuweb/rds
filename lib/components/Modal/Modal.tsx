import React, { useRef, useEffect } from 'react'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { proseStyles } from '../../utils/globalClasses'
import { sanitizeContent } from '../../helpers/functions'

export interface ModalProps {
  children?: React.ReactNode
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  content?: string
  noProse?: boolean
  isOpen: boolean
  setIsOpen: (k: boolean) => void
}

export const Modal = ({ children, content, isOpen, setIsOpen, maxWidth = '5xl', noProse = false }: ModalProps) => {
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

  return (
    <dialog
      ref={modalRef}
      className={`cu-dialog ${useProse} md:px-8 md:py-6 px-12 py-10 z-10 w-11/12 ${rdsMaxWidth[maxWidth]} shadow-md rounded-md p-3.5`}
      onClick={handleClick}
    >
      <button
        className="absolute top-2 right-2 p-1 rounded-md bg-cu-black-100 text-cu-black-900 hover:bg-cu-red hover:text-white"
        onClick={() => setIsOpen(false)}
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
