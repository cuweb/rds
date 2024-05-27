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

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <p>Poopy bacon</p>
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

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen} hasOverlay>
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

Default.storyName = 'Default Modal'
NoButton.storyName = 'No Button on Modal'
