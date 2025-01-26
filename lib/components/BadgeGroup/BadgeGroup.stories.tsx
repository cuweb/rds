import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../Badge/Badge'
import { BadgeGroup } from './BadgeGroup'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof BadgeGroup> = {
  title: 'Components/Badge Group',
  component: BadgeGroup,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof BadgeGroup>

export const Primary: Story = {
  args: {
    gap: '2',
    isAbsolute: false,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  render: (args) => {
    return (
      <Main>
        <BadgeGroup {...args}>
          <Badge text="Grey Badge" color="grey" />
          <Badge text="Green Badge" color="green" />
          <Badge text="Red Badge" color="red" />
          <Badge text="Yellow Badge" color="yellow" />
          <Badge text="Blue Badge" color="blue" />
          <Badge text="Purple Badge" color="purple" />
        </BadgeGroup>
      </Main>
    )
  },
}
