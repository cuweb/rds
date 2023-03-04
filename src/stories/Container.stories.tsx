import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../layouts/Container/Container'

const meta: Meta<typeof Container> = {
  title: 'Layouts/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Primary: Story = {}

Primary.args = {
  children: 'Section HTML5 tag as container component',
  bgColor: 'white',
  hasProse: false,
}

export const GreyBackground: Story = {
  args: {
    children: 'Container component with grey background',
    bgColor: 'grey',
  },
}
