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
      />
    </>
  )
}

Default.storyName = 'Default Dialog'

export const ConfirmButton: Story = () => {
  const [DialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Dialog" onClick={() => setDialogOpen(true)} />
      <Dialog
        title="Dialog Title"
        description={'Description inside the dialog box'}
        isOpen={DialogOpen}
        setIsOpen={setDialogOpen}
      >
        <Button title="Confirm" isSmall />
      </Dialog>
    </>
  )
}

Default.storyName = 'Default Dialog'
ConfirmButton.storyName = 'With Confirm Button'
