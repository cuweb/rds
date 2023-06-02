import type { Meta, StoryObj } from '@storybook/react'
import { TopNavLoader } from './TopNavLoader'

const meta: Meta<typeof TopNavLoader> = {
  title: 'Components/Load Screens/TopNav Loader',
  component: TopNavLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof TopNavLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'TopNavLoader component',
}
