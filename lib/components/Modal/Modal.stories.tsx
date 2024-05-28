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
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
          <Button
            title="Close"
            isSmall
            onClick={() => {
              setModalOpen(false)
            }}
          />
        </div>
      </Modal>
    </>
  )
}

export const NoButton: Story = () => {
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
        </div>
      </Modal>
    </>
  )
}

export const NoOutsideClose: Story = () => {
  const [ModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen} noOutsideClose>
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
          <Button
            title="Close"
            isSmall
            onClick={() => {
              setModalOpen(false)
            }}
          />
        </div>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Modal'
NoButton.storyName = 'No Button on Modal'
NoOutsideClose.storyName = 'No Outside Closing of Modal'
