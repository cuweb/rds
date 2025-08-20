import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

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

  isFull: false,
  isDisabled: false,
  onClick: () => {
    alert('You clicked the button')
  },
}

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    color: 'dark-grey',
    icon: 'circle-down',
  },
}

export const SmallWithIcon: Story = {
  args: {
    ...Primary.args,
    color: 'dark-grey',
    icon: 'circle-down',
    isSmall: true,
  },
}
