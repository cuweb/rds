import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

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
  args: {
    name: 'circle-check', // must match your SVG filename in font-awesome folder
  },
}

export const Red: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    name: 'circle-check',
    color: 'red',
  },
}

export const Grey: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    name: 'circle-check',
    color: 'grey',
  },
}

export const White: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
  args: {
    name: 'circle-check',
    color: 'white',
  },
}
