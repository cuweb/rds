import type { Meta, StoryObj } from '@storybook/react'
import { ButtonLoader } from './ButtonLoader'

const meta: Meta<typeof ButtonLoader> = {
  title: 'Components/Load Screens/Button Loader',
  component: ButtonLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonLoader>

export const Default: Story = {
  render: (args) => <ButtonLoader number={2} {...args} />,
}
