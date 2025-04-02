import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Details } from './Details'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof Details> = {
  title: 'Components/Details',
  component: Details,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Details>

export const Primary: Story = {
  args: {
    as: 'ul',
    hasDividers: false,
  },
  render: (args) => {
    return (
      <Main>
        <Details {...args}>
          <Details.Item isBold>Hybrid Event</Details.Item>
          <Details.Item>Raven's Nest, 1125 Colonel By Drive</Details.Item>
          <Details.Item>
            <a href="/">Teams meeting link</a>
          </Details.Item>
          <Details.Item>
            <strong>Cost:</strong> $20 per adult, $15 for youth/senior
          </Details.Item>
        </Details>
      </Main>
    )
  },
}
