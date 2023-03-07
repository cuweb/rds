import type { Meta, StoryObj } from '@storybook/react'
import { CardLoader } from '../components/Loaders/CardLoader/CardLoader'

const meta: Meta<typeof CardLoader> = {
  title: 'Components/CardLoader',
  component: CardLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CardLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'CardLoader component',
}
