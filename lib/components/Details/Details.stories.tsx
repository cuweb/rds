import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Details } from './Details'
import { Main } from '../../layouts/Main/Main'
import { EventDataSingle as eventData } from '../../data/EventData'

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
    divider: false,
  },
  render: (args) => {
    return (
      <Main>
        <Details {...args}>
          <Details.Item>Item</Details.Item>
          <Details.Item>Item</Details.Item>
          <Details.Item>Item</Details.Item>
        </Details>
      </Main>
    )
  },
}
