import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
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

export const Primary: Story = {}

Primary.args = {
  title: 'Alert title',
  type: 'success',
  content: 'Records have been updated.',
  textSize: 'sm',
}

export const TwoColumns: Story = {
  args: {
    ...Primary.args,
    textSize: 'lg',
  },
  render: (args) => {
    return (
      <Main>
        <Alert {...args} />
      </Main>
    )
  },
}
