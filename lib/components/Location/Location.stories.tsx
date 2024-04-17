import type { Meta, StoryObj } from '@storybook/react'
import { Location } from './Location'
import { LoadScript } from '@react-google-maps/api'
import React from 'react'

const meta: Meta<typeof Location> = {
  title: 'Components/Location',
  component: Location,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  decorators: [
    (Story) => (
      <LoadScript googleMapsApiKey="apiKey">
        <Story />
      </LoadScript>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Location>

export const Default: Story = {}

Default.args = {
  lat: '45.3875812',
  lng: '-75.6982089',
  location: "Carleton University Raven's Nest",
}
