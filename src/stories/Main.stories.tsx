import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { Main } from '../layouts/Main/Main'

const meta: Meta<typeof Main> = {
  title: 'Layouts/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Main>

export const Primary: Story = {}

Primary.args = {
  children: 'Main HTML5 tag component',
}
