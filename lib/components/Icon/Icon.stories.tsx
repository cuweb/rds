import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

Default.args = {
  icon: CheckCircleIcon,
}

export const Red: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}
Red.args = {
  icon: CheckCircleIcon,
  color: 'red',
}
