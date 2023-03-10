import type { Meta, StoryObj } from '@storybook/react'
import { FooterBasic } from '../components/Footer/FooterBasic/FooterBasic'

const meta: Meta<typeof FooterBasic> = {
  title: 'Footers/Basic',
  component: FooterBasic,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterBasic>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  children: 'Footers/Basic',
}
