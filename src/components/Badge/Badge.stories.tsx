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

export const Default: Story = {
  render: () => <Badge>Multi-Day</Badge>,
}

export const SingleItemPanel: Story = {
  render: () => (
    <>
      <Badge>Multi-Day</Badge>
      <Badge>Orientation</Badge>
      <Badge>Faculty</Badge>
    </>
  ),
}
