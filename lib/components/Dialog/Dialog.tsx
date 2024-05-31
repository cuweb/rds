import React, { useRef } from 'react'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { useEffect } from 'react'

export interface DialogProps {
  children?: React.ReactNode
  title: string
  description?: string
  isOpen: boolean
  setIsOpen: (k: boolean) => void
}

export const Dialog = ({ children, title, description, isOpen, setIsOpen }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialogRef.current?.open && !isOpen) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && isOpen) {
      dialogRef.current?.showModal()
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

  // Prevent the dialog from closing when the user presses the Esc key or clicks outside the dialog
  useEffect(() => {
    const dialog = dialogRef.current

    const preventClose = (event: Event) => {
      event.preventDefault()
    }

    dialog?.addEventListener('cancel', preventClose)
    dialog?.addEventListener('close', preventClose)

    return () => {
      dialog?.removeEventListener('cancel', preventClose)
      dialog?.removeEventListener('close', preventClose)
    }
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === dialogRef.current) {
      setIsOpen(true)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="cu-dialog z-10 not-prose w-11/12 md:w-full md:min-w-96 md:max-w-md shadow-md rounded-md p-3.5"
      onClick={handleClick}
      aria-labelledby={title}
      aria-describedby={description}
    >
      <div className="p-3">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">{title}</h3>
        {description && <p className="text-sm text-gray-500 mb-3">{description}</p>}
      </div>
      <ButtonGroup align="right" gap={3}>
        {children}
        <Button
          onClick={() => {
            setIsOpen(false)
          }}
          title="Close"
          isSmall
          color="grey"
        />
      </ButtonGroup>
    </dialog>
  )
}
