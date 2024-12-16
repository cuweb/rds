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

export const Primary: Story = {
  args: {
    title: 'Click to Open Dialog',
    description: 'Description inside the dialog box',
  },
  render: (args) => {
    const [DialogOpen, setDialogOpen] = useState(false)

    return (
      <>
        <Button id="modalButton" title="Click to Open Dialog" onClick={() => setDialogOpen(true)} />
        <Dialog {...args} isOpen={DialogOpen} setIsOpen={setDialogOpen} />
      </>
    )
  },
}

export const ConfirmButton: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    const [DialogOpen, setDialogOpen] = useState(false)

    return (
      <>
        <Button id="modalButton" title="Click to Open Dialog" onClick={() => setDialogOpen(true)} />
        <Dialog {...args} isOpen={DialogOpen} setIsOpen={setDialogOpen}>
          <Button title="Confirm" isSmall />
        </Dialog>
      </>
    )
  },
}
