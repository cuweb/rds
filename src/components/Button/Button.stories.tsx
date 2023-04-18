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
  hasShadow: false,
  isFull: false,
  isCenter: false,
  hasDropDown: false,
  onClick: () => {
    alert('You clicked the button')
  },
}

export const PrimaryGhost: Story = {
  args: {
    title: 'Primary Ghost Button',
    isType: 'outline',
  },
}

export const DarkGrey: Story = {
  args: {
    title: 'Dark Grey Button',
    color: 'dark-grey',
  },
}

export const DarkGreyGhost: Story = {
  args: {
    title: 'Dark Grey Ghost Button',
    isType: 'outline',
    color: 'dark-grey',
  },
}

export const LightGrey: Story = {
  args: {
    title: 'Light Grey Button',
    color: 'grey',
  },
}

export const GreyGhost: Story = {
  args: {
    title: 'Grey Ghost Button',
    isType: 'outline',
    color: 'grey',
  },
}

export const White: Story = {
  args: {
    title: 'White Button',
    color: 'white',
  },
}

export const WhiteGhost: Story = {
  args: {
    title: 'White Ghost Button',
    isType: 'outline',
    color: 'white',
  },
}

export const Disabled: Story = {
  args: {
    isType: 'disabled',
    disabled: true,
    title: 'Disabled Button',
  },
}

export const Center: Story = {
  args: {
    title: 'Centered Button',
    isCenter: true,
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
