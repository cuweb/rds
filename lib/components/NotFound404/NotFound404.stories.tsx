import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotFound404 } from './NotFound404'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta<typeof NotFound404> = {
  title: 'Components/NotFound404',
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
    children: (
      <>
        <ButtonGroup align="center">
          <a href="/" className="cu-button cu-button--red">
            Return Home
          </a>
        </ButtonGroup>
      </>
    ),
  },
  render: (args) => {
    return <NotFound404 {...args} />
  },
}
