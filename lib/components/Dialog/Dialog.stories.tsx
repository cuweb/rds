import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import { Button } from '../Button/Button'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = () => {
  const [DialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Dialog" onClick={() => setDialogOpen(true)} />

      <Dialog
        title="Dialog Title"
        description={'Description inside the dialog box'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
      ></Dialog>
    </>
  )
}

export const NoButton: Story = () => {
  const [DialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Dialog" onClick={() => setDialogOpen(true)} />

      <Dialog
        title="Dialog Title"
        description={'Description inside the dialog box'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
        noButton
      ></Dialog>
    </>
  )
}

export const NoOutsideClose: Story = () => {
  const [DialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Dialog" onClick={() => setDialogOpen(true)} />

      <Dialog
        title="Dialog Title"
        description={'Description inside the dialog box'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
        noOutsideClose
      ></Dialog>
    </>
  )
}

Default.storyName = 'Default Dialog'
NoButton.storyName = 'No Button on Dialog'
NoOutsideClose.storyName = 'No Outside Click Closing of Dialog'
