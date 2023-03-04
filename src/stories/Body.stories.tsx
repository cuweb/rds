import type { Meta, StoryObj } from '@storybook/react'
import { Body } from '../layouts/Body/Body'

const meta: Meta<typeof Body> = {
  title: 'Layouts/Body',
  component: Body,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Body>

export const Primary: Story = {}

Primary.args = {
  children: 'Body component',
}

export const UseTailwind: Story = {
  args: {
    children: 'Body component with tailwind classes',
    className: 'bg-white p-5',
  },
}
