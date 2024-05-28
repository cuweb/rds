import React, { useRef } from 'react'
import { Button } from '../Button/Button'
import { useEffect } from 'react'

export interface DialogProps {
  children?: React.ReactNode
  title?: string
  description?: string
  noButton?: boolean
  isOpen: boolean
  setIsOpen: (k: boolean) => void
  noOutsideClose?: boolean
}

export const Dialog = ({ title, description, noButton, isOpen, setIsOpen, noOutsideClose = false }: DialogProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (modalRef.current?.open && !isOpen) {
      modalRef.current?.close()
    } else if (!modalRef.current?.open && isOpen) {
      modalRef.current?.showModal()
    }
  }, [isOpen])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!noOutsideClose && event.target === modalRef.current) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <dialog ref={modalRef} className="cu-modal relative z-10 not-prose" onClick={handleClick}>
        <div className="relative sm:w-full sm:max-w-lg p-6 min-h-full">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            {!noButton && (
              <div className="grid gap-4 pt-3 sm:flex sm:w-auto sm:flex-row-reverse sm:text-sm">
                <Button
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  title="Close"
                  isSmall
                  color="grey"
                />
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  )
}
