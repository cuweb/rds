import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import CircleCheckIcon from '../Icons/CircleCheckIcon'

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

const faIcon = <CircleCheckIcon className="w-6 h-6" />

export const Default: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    icon: faIcon,
  },
}

export const Red: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    icon: faIcon,
    color: 'red',
  },
}

export const Grey: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    icon: faIcon,
    color: 'grey',
  },
}

export const White: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    icon: faIcon,
    color: 'white',
  },
}
