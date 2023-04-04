import type { Meta, StoryObj } from '@storybook/react'
import { Body } from './Body'

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
