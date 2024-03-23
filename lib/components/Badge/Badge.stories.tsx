import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

// export const Default: Story = {
//   render: () => <Badge>Multi-Day</Badge>,
// }

export const Default: Story = {
  args: {
    children: 'Badge Example',
    color: 'grey',
    noWordBreak: false,
  },
}

export const MultiColors: Story = {
  render: () => (
    <>
      <Badge color="green">Green Badge</Badge>
      <Badge color="red">Red Badge</Badge>
      <Badge color="yellow">Yellow Badge</Badge>
      <Badge color="blue">Blue Badge</Badge>
      <Badge color="purple">Purple Badge</Badge>
      <Badge color="grey">Grey Badge</Badge>
    </>
  ),
}
