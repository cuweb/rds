import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Forbidden403 } from './Forbidden403'
import { Main } from '../../../layouts/Main/Main'

const meta: Meta<typeof Forbidden403> = {
  title: 'Components/Error Messages/403 Forbidden',
  component: Forbidden403,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Forbidden403>

export const Primary: Story = {
  args: {
    isCenter: false,
  },
  render: (args) => {
    return (
      <Main>
        <Forbidden403 {...args} />
      </Main>
    )
  },
}
