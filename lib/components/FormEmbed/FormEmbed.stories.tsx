import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { EmbedHubSpot } from './EmbedHubSpot'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof EmbedHubSpot> = {
  title: 'Components/FormEmbed',
  component: EmbedHubSpot,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmbedHubSpot>

export const HubSpot: Story = {
  render: () => (
    <Main>
      <EmbedHubSpot title="HubSpot Form" url="" />
    </Main>
  ),
}
