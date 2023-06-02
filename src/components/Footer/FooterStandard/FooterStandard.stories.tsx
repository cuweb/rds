import type { Meta, StoryObj } from '@storybook/react'
import { FooterStandard } from './FooterStandard'

const meta: Meta<typeof FooterStandard> = {
  title: 'Components/Footers/Standard',
  component: FooterStandard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterStandard>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  children: 'Footers/Standard',
}
