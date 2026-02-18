import type { Meta, StoryObj } from '@storybook/react-vite'
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
}

Default.args = {
  name: 'circle-check',
  size: 32,
  color: 'currentColor',
}

export const Red: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

Red.args = {
  name: 'circle-check',
  size: 32,
  color: 'red',
}

export const Grey: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

Grey.args = {
  name: 'circle-check',
  size: 32,
  color: 'grey',
}

export const White: Story = {
  render: (args) => <Icon {...args} aria-hidden={true} />,
}

White.args = {
  name: 'circle-check',
  size: 32,
  color: 'white',
}
