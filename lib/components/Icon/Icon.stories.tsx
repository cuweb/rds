import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { ReactComponent as CheckCircleIcon } from '../../assets/font-awesome/circle-check.svg'

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

export const Grey: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

Grey.args = {
  icon: CheckCircleIcon,
  color: 'grey',
}

export const White: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

White.args = {
  icon: CheckCircleIcon,
  color: 'white',
}
