import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../components/Heading/Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Primary: Story = {}

Primary.args = {
  text: 'Heading Component',
}
