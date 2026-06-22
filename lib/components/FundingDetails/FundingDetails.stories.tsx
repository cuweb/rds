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
    endDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  },
  render: (args) => {
    return <FundingDetails {...args} />
  },
}
