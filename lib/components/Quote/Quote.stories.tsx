import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Quote } from './Quote'

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Quote>

export const Default: Story = {}
Default.args = {
  cite: 'John Doe',
  children: (
    <p>
      Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit
      ducimus.
    </p>
  ),
}

export const QuoteMark: Story = {
  render: (args) => <Quote {...args} />,
}
QuoteMark.args = {
  ...Default.args,
  graphic: 'quote',
}
