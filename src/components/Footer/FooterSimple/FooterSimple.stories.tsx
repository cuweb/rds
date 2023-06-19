import type { Meta, StoryObj } from '@storybook/react'
import { FooterSimple } from './FooterSimple'

const meta: Meta<typeof FooterSimple> = {
  title: 'Components/Footers/Simple',
  component: FooterSimple,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterSimple>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  children: 'Footers/Simple',
}
