import type { Meta, StoryObj } from '@storybook/react'
import { Cookie } from './Cookie'

const meta: Meta<typeof Cookie> = {
  title: 'Components/Cookie',
  component: Cookie,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Cookie>

export const Default: Story = () => {
  return <Cookie />
}

Default.storyName = 'Default Cookie Banner'
