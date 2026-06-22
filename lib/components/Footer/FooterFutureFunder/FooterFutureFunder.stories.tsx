import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterFutureFunder } from './FooterFutureFunder'

const meta: Meta<typeof FooterFutureFunder> = {
  title: 'Components/Footers/FutureFunder',
  component: FooterFutureFunder,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
      layout: 'fullscreen',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterFutureFunder>

export const Primary: Story = {}
Primary.args = {}
