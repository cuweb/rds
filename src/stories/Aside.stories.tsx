import type { Meta, StoryObj } from '@storybook/react'
import { Aside } from '../layouts/Aside/Aside'

const meta: Meta<typeof Aside> = {
  title: 'Layouts/Aside',
  component: Aside,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Aside>

export const Primary: Story = {}

Primary.args = {
  children: 'Aside HTML5 tag as component',
  isSticky: false,
}
