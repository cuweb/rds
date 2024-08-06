import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Forbidden403 } from './Forbidden403'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta<typeof Forbidden403> = {
  title: 'Components/Forbidden403',
  component: Forbidden403,
  tags: ['autodocs'],
  argTypes: {},
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
    return <Forbidden403 {...args} />
  },
}
