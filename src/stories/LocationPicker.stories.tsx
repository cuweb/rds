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
  const [position, setPosition] = useState([])

  const callback = useCallback(
    (position: any) => {
      setPosition(position)
    },
    [setPosition],
  )
  return (
    <>
      <LocationPicker callback={callback} /> <Location markers={position} />
    </>
  )
}
Default.storyName = 'Location Picker'
