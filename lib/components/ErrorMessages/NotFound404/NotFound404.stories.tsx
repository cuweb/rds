import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotFound404 } from './NotFound404'

const meta: Meta<typeof NotFound404> = {
  title: 'Components/ErrorMessages/NotFound404',
  component: NotFound404,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof NotFound404>

export const Primary: Story = {
  render: () => {
    return <NotFound404 />
  },
}
