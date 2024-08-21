import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
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
  size: 'sm',
}

export const TwoColumns: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
  render: (args) => {
    return (
      <Section>
        <Alert {...args} />
      </Section>
    )
  },
}
