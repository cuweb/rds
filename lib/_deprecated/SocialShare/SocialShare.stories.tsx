import type { Meta, StoryObj } from '@storybook/react'
import { SocialShare } from './SocialShare'

const meta: Meta<typeof SocialShare> = {
  title: 'Components/SocialShare',
  component: SocialShare,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof SocialShare>

export const Default: Story = {}

Default.args = {
  title: 'CarletonLink',
  link: 'https://carleton.ca/',
}
