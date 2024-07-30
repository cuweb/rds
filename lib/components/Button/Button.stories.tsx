import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

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
  isFull: false,
  onClick: () => {
    alert('You clicked the button')
  },
}

export const LightGrey: Story = {
  args: {
    title: 'Light Grey Button',
    color: 'grey',
  },
}

export const DarkGrey: Story = {
  args: {
    title: 'Dark Grey Button',
    color: 'dark-grey',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    title: 'Disabled Button',
  },
}

export const FullWidth: Story = {
  args: {
    title: 'Full Width Button',
    isFull: true,
  },
}

export const HasIcon: Story = {
  args: {
    title: 'Icon Button',
    icon: ArrowDownCircleIcon,
  },
}

export const SmallButton: Story = {
  args: {
    title: 'Small Button',
    isSmall: true,
  },
}

export const SmallButtonWithIcon: Story = {
  args: {
    title: 'Small Button w/Icon',
    isSmall: true,
    icon: ArrowDownCircleIcon,
  },
}

export const ButtonWithAriaLabel: Story = {
  args: {
    title: 'Button with Aria Label',
    isSmall: true,
    icon: ArrowDownCircleIcon,
    ariaLabel: 'label',
  },
}

export const ButtonWithNoAriaLabel: Story = {
  args: {
    title: 'Button with No Aria Label',
    isSmall: true,
    icon: ArrowDownCircleIcon,
  },
}

export const ButtonWithNoAriaLabelNoTitle: Story = {
  args: {
    isSmall: true,
    icon: ArrowDownCircleIcon,
  },
}
