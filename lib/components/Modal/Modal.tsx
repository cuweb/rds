import React, { useRef } from 'react'
import { useEffect } from 'react'

export interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (k: boolean) => void
  noOverlay?: boolean
  noOutsideClose?: boolean
}

export const Modal = ({ children, isOpen, setIsOpen, noOutsideClose = false }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (modalRef.current?.open && !isOpen) {
      modalRef.current?.close()
    } else if (!modalRef.current?.open && isOpen) {
      modalRef.current?.showModal()
    }
  }, [isOpen])

  const handleClick = (event) => {
    if (!noOutsideClose && event.target === modalRef.current) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <dialog ref={modalRef} className="cu-modal relative z-10 not-prose" onClick={handleClick}>
        <div className="relative sm:w-full sm:max-w-lg p-6 min-h-full">{children}</div>
      </dialog>
    </>
  )
}
