import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { ArticleData as contentData } from '../../data/ArticleData'

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
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <h2>H2 Heading</h2>
        <p>
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
          aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
          egestas fringilla sapien.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat.
          <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed
          turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
          <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
        </p>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Modal'

export const ContentProp: Story = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} content={contentData} setIsOpen={setModalOpen} />
    </>
  )
}

ContentProp.storyName = 'Content as Prop'
