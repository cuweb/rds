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
      <Button title="Click to Open Modal" onClick={() => setDialogOpen(true)} />

      <Dialog
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
      >
        <Button
          title="Delete"
          isSmall
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setDialogOpen(false)
          }}
        />
      </Dialog>
    </>
  )
}

export const NoButton: Story = () => {
  const [DialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setDialogOpen(true)} />

      <Dialog
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
        noButton
        hasOverlay
      >
        <Button
          title="Delete"
          isSmall
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setDialogOpen(false)
          }}
        />
      </Dialog>
    </>
  )
}

Default.storyName = 'Default Modal'
NoButton.storyName = 'No Button on Modal'
