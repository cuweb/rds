import type { Meta, StoryObj } from '@storybook/react-vite'
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

export const Default: Story = {}
Default.args = {
  number: 1,
}

export const Multiple: Story = {}
Multiple.args = {
  number: 2,
}

export const Large: Story = {}
Multiple.args = {
  number: 2,
  isSmall: false,
}
