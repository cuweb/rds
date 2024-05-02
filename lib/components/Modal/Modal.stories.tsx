import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
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
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
      >
        <Button
          title="Delete"
          isSmall
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setModalOpen(false)
          }}
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
          title="Delete"
          isSmall
          onClick={() => {
            alert(' delete are you sure you want to delete it')
            setModalOpen(false)
          }}
        />
      </Modal>
    </>
  )
}

export const WithChildren: Story = () => {
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        title="Printing Press"
        description={'This is an image of a printing press'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
        noButton
        hasOverlay
      >
        <img src="http://localhost:6006/sample-imgs/news-img.jpg" alt="A printing press"></img>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Modal'
NoButton.storyName = 'No Button on Modal'
WithChildren.storyName = 'Add Children to Modal'
