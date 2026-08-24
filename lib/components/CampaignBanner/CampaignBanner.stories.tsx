import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CampaignBanner } from './CampaignBanner'

const meta: Meta<typeof CampaignBanner> = {
  title: 'Components/Campaign Banner',
  component: CampaignBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CampaignBanner>

export const Primary: Story = {
  args: {
    title: 'Fund the Future of Clean Energy Research',
    raised: 42500,
    goal: 100000,
    endDate: '2026-08-27',
    categories: [
      { name: 'Environment', link: 'https://example.com/environment' },
      { name: 'Science & Innovation', link: 'https://example.com/science' },
      { name: 'Student Experience' },
    ],
  },
  render: (args) => {
    return <CampaignBanner {...args} />
  },
}
