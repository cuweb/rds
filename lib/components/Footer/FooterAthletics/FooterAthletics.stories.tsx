import type { Meta, StoryObj } from '@storybook/react'
import { FooterAthletics } from './FooterAthletics'

const meta: Meta<typeof FooterAthletics> = {
  title: 'Components/Footers/Athletics',
  component: FooterAthletics,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
      layout: 'fullscreen',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterAthletics>

export const Primary: Story = {}
Primary.args = {}
