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
  args: {},
  render: (args) => {
    return <FundingDetails {...args} />
  },
}
