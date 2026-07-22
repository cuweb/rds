import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FundingDetails } from './FundingDetails'

const meta: Meta<typeof FundingDetails> = {
  title: 'Components/Funding Details',
  component: FundingDetails,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof FundingDetails>

export const Primary: Story = {
  args: {
    title: 'Fund the Future of Clean Energy Research',
    raised: 42500,
    goal: 100000,
    endDate: '2026-08-27',
    imageUrl: 'https://picsum.photos/seed/funding/800/600',
    imageAlt: 'Funding campaign image',
    categories: [
      { name: 'Environment', link: 'https://example.com/environment' },
      { name: 'Science & Innovation', link: 'https://example.com/science' },
      { name: 'Student Experience' },
    ],
  },
  render: (args) => {
    return <FundingDetails {...args} />
  },
}
