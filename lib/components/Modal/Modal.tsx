import React, { useRef } from 'react'
import { useEffect } from 'react'

export interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (k: boolean) => void
  noOverlay?: boolean
}

export const Modal = ({ children, isOpen, noOverlay = false }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (modalRef.current?.open && !isOpen) {
      modalRef.current?.close()
    } else if (!modalRef.current?.open && isOpen) {
      modalRef.current?.showModal()
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0 ${noOverlay ? '' : 'bg-cu-black/30'}`}
      >
        <dialog ref={modalRef} className="cu-modal relative z-10 cu-modal not-prose">
          <div className="relative sm:my-8 sm:w-full sm:max-w-lg">{children}</div>
        </dialog>
      </div>
    </>
  )
}
