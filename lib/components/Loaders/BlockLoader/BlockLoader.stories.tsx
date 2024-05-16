import type { Meta, StoryObj } from '@storybook/react'
import { BlockLoader } from './BlockLoader'

const meta: Meta<typeof BlockLoader> = {
  title: 'Components/Load Screens/Block Loader',
  component: BlockLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof BlockLoader>

export const Default: Story = {}
