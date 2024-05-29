import React, { useRef, useEffect } from 'react'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { proseStyles } from '../../utils/globalClasses'

export interface ModalProps {
  children?: React.ReactNode
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  content?: string
  noProse?: boolean
  isOpen: boolean
  setIsOpen: (k: boolean) => void
}

export const Modal = ({ children, content, isOpen, setIsOpen, maxWidth = '3xl', noProse = false }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const useProse = noProse ? '' : proseStyles.base

  useEffect(() => {
    if (modalRef.current?.open && !isOpen) {
      modalRef.current?.close()
    } else if (!modalRef.current?.open && isOpen) {
      modalRef.current?.showModal()
    }
  }, [isOpen])

  // Add no scroll class to prevent background scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cu-no-body-scroll')
    } else {
      document.body.classList.remove('cu-no-body-scroll')
    }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('cu-no-body-scroll')
    }
  }, [isOpen])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === modalRef.current) {
      setIsOpen(false)
    }
  }

  return (
    <dialog
      ref={modalRef}
      className={`cu-dialog md:px-8 md:py-6 px-12 py-10 z-10 w-11/12 ${rdsMaxWidth[maxWidth]} shadow-md rounded-md p-3.5`}
      onClick={handleClick}
    >
      <div
        className={`cu-dialog-content ${useProse}`}
        dangerouslySetInnerHTML={content ? { __html: content } : undefined}
      >
        {!content && children}
      </div>
    </dialog>
  )
}
