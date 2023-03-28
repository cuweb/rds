import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button/Button'
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
  isType: 'default',
  size: 'base',
  url: '',
  hasShadow: false,
  isFull: false,
  isCenter: false,
  hasDropDown: false,
  onClick: () => {
    alert('You clicked the button')
  },
}

export const DarkGrey: Story = {
  args: {
    title: 'Dark Grey Button',
    isType: 'dark-grey',
  },
}

export const LightGrey: Story = {
  args: {
    title: 'Light Grey Button',
    isType: 'grey',
  },
}

export const White: Story = {
  args: {
    title: 'White Button',
    isType: 'white',
  },
}

export const Ghost: Story = {
  args: {
    title: 'Ghost Button',
    isType: 'ghost',
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
