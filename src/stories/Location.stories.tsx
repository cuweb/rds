import type { Meta, StoryObj } from '@storybook/react'
import { Location } from '../components/Location/Location'

const meta: Meta<typeof Location> = {
  title: 'Components/Location',
  component: Location,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Location>

const address = {
  lat: '45.3850225',
  lng: '-75.6946679',
  location: "Carleton University Raven's Nest",
}

export const Default: Story = {
  render: () => <Location lat={address.lat} lng={address.lng} location={address.location} />,
}
Default.storyName = 'Default Location'
