import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Quote } from './Quote'
import { Main } from '../../layouts/Main/Main'

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

export const Primary: Story = {
  args: {
    cite: 'John Doe',
    children: (
      <p>
        Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
    ),
    graphic: 'border',
    isCenter: false,
  },
  render: (args) => {
    return (
      <Main>
        <Quote {...args} />
      </Main>
    )
  },
}
