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
}

const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost'
const setPath = isLocal ? './assets/font-awesome/' : 'https://cuweb.github.io/rds/assets/font-awesome/'

Default.args = {
  name: 'circle-check',
  size: 32,
  color: 'currentColor',
  iconPath: setPath,
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
