import type { Meta, StoryObj } from '@storybook/react'
import { EventLoader } from './EventLoader'

const meta: Meta<typeof EventLoader> = {
  title: 'Components/Load Screens/Event Loader',
  component: EventLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof EventLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'EventLoader component',
}
