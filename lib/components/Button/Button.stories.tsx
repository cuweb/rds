import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Icon } from '../Icon/Icon'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}

Primary.args = {
  title: 'Primary Red',
  color: 'red',
  type: 'button',
  isSmall: false,
  isFull: false,
  isDisabled: false,
  onClick: () => {
    alert('You clicked the button')
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Download',
    icon: <Icon name="circle-down" className="w-5 h-5" />,
    color: 'dark-grey',
    ariaLabel: 'Download file',
  },
}
