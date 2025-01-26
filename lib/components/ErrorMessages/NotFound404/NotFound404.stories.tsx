import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotFound404 } from './NotFound404'
import { Main } from '../../../layouts/Main/Main'

const meta: Meta<typeof NotFound404> = {
  title: 'Components/Error Messages/NotFound404',
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
  args: {
    isCenter: false,
  },
  render: (args) => {
    return (
      <Main>
        <NotFound404 {...args} />
      </Main>
    )
  },
}
