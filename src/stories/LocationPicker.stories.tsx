import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { LocationPicker } from '../components/LocationPicker/LocationPicker'
import { Location } from '../components/Location/Location'
import { Column } from '../layouts/Column/Column'

const meta: Meta<typeof LocationPicker> = {
  title: 'Components/Location Picker',
  component: LocationPicker,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof LocationPicker>

export const Default: Story = () => {
  interface PositionInterface {
    name: string
    id: string
    position: object
  }
  interface CenterInterface {
    lat: number
    lng: number
  }
  const [position, setPosition] = useState<{ name: string; id: string; position: object }[]>([])

  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 45.3850225,
    lng: -75.6946679,
  })

  const posCallback = useCallback((pos: PositionInterface[]) => setPosition(pos), [setPosition])

  const centerCallback = useCallback(
    (center: CenterInterface) => {
      if (center.lat && center.lng) setCenter(center)
    },
    [setCenter],
  )

  return (
    <Column maxWidth="5xl">
      <LocationPicker posCallback={posCallback} centerCallback={centerCallback} />{' '}
      <Location markers={position} center={center} />
    </Column>
  )
}
Default.storyName = 'Location Picker'
