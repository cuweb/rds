import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterBasic } from './FooterBasic'

const meta: Meta<typeof FooterBasic> = {
  title: 'Components/Footers/Basic',
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

export const Primary: Story = {}
Primary.args = {}
