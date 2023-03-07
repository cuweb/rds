import type { Meta, StoryObj } from '@storybook/react'
import { TopNav } from '../components/TopNav/TopNav'

const meta: Meta<typeof TopNav> = {
  title: 'Headers/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof TopNav>

export const Primary: Story = {}

Primary.args = {
  children: 'TopNav component',
}
