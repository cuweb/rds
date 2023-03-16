import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '../components/Modal/Modal'
import { Button } from '../components/Button/Button'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = () => {
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
      >
        <Button
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setModalOpen(false)
          }}
          title="Delete"
          size="sm"
          hasShadow
        />
      </Modal>
    </>
  )
}

export const NoButton: Story = () => {
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
        noButton
        hasOverlay
      >
        <Button
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setModalOpen(false)
          }}
          title="Delete"
          size="sm"
          hasShadow
        />
      </Modal>
    </>
  )
}

Default.storyName = 'Default Modal'
NoButton.storyName = 'ModalNoButton'
