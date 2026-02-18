import React from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../layouts/Main/Main'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Primary: Story = {
  args: {
    title: 'Alert title',
    type: 'success',
    content: 'Records have been updated.',
    size: 'sm',
  },
  render: (args) => {
    return (
      <Main>
        <Alert {...args} />
      </Main>
    )
  },
}
