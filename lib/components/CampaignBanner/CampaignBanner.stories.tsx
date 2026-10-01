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
    title: 'The Music Award for Indigenous, Black and Racialized Students',
    content: (
      <>
        <p>
          The Music Award for Indigenous, Black and Racialized Students is awarded annually to a student who is entering
          or continuing in the undergraduate Music program.
        </p>
      </>
    ),
    raised: 1349,
    goal: 5000,
    endDate: '2026-08-27',
    categories: [
      { name: 'Arts', link: 'https://example.com/environment' },
      { name: 'Arts & Social Sciences', link: 'https://example.com/science' },
      { name: 'Student Experience', link: 'https://example.com/student-experience' },
      { name: 'Scholarships', link: 'https://example.com/student-experience' },
      { name: 'Giving Day', link: 'https://example.com/student-experience' },
      { name: 'Healthcare', link: 'https://example.com/student-experience' },
    ],
  },
  render: (args) => {
    return <CampaignBanner {...args} />
  },
}
