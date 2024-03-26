import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../Badge/Badge'
import { BadgeGroup } from './BadgeGroup'

const meta: Meta<typeof BadgeGroup> = {
  title: 'Components/BadgeGroup',
  component: BadgeGroup,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof BadgeGroup>

export const Primary: Story = {}

Primary.args = {
  children: (
    <>
      <Badge color="grey">Grey Badge</Badge>
      <Badge color="green">Green Badge</Badge>
      <Badge color="red">Red Badge</Badge>
      <Badge color="yellow">Yellow Badge</Badge>
      <Badge color="blue">Blue Badge</Badge>
      <Badge color="purple">Purple Badge</Badge>
    </>
  ),
}
