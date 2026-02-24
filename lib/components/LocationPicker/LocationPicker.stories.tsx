import type { Meta, StoryObj } from '@storybook/react-vite'
import { useCallback, useState } from 'react'
import { LocationPicker } from './LocationPicker'
import React from 'react'
import { LoadScript } from '@react-google-maps/api'
import { Location } from '../Location/Location'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof LocationPicker> = {
  title: 'Components/Location Picker',
  component: LocationPicker,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  decorators: [
    (Story) => (
      <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <Story />
      </LoadScript>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LocationPicker>

export const Default: Story = () => {
  interface SingleMarkerInterface {
    coordinates: { lat: number; lng: number }
    address: string
  }
  const [coordinates, setCoordinates] = useState<SingleMarkerInterface>({
    coordinates: {
      lat: 45.3850225,
      lng: -75.6946679,
    },
    address: "Carleton University Raven's Nest",
  })
  const markerCallback = useCallback(
    (coordinates: SingleMarkerInterface) => {
      setCoordinates(coordinates)
    },
    [setCoordinates],
  )

  return (
    <Main>
      <LocationPicker address={coordinates.address} markerCallback={markerCallback} />
      <Location
        lat={coordinates?.coordinates?.lat?.toString()}
        lng={coordinates?.coordinates?.lng?.toString()}
        location={coordinates?.address}
      />
    </Main>
  )
}

Default.storyName = 'Single Marker'

export const EventAddress: Story = () => {
  interface SingleMarkerInterface {
    coordinates: { lat: number; lng: number }
    address: string
  }
  const [coordinates, setCoordinates] = useState<SingleMarkerInterface>({
    coordinates: {
      lat: 40.712776,
      lng: -74.005974,
    },
    address: 'New York City, NY',
  })
  const markerCallback = useCallback(
    (coordinates: SingleMarkerInterface) => {
      setCoordinates(coordinates)
    },
    [setCoordinates],
  )
  return (
    <Main>
      <LocationPicker address="New York City, NY" markerCallback={markerCallback} />
      <Location
        lat={coordinates?.coordinates?.lat?.toString()}
        lng={coordinates?.coordinates?.lng?.toString()}
        location={coordinates?.address}
      />
    </Main>
  )
}

EventAddress.storyName = 'Location Address'
