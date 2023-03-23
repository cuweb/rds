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
  const [center,setCenter1] = useState({})

  const callback = useCallback(
    (position: any) => {
      setPosition(position)
    },
    [setPosition],
  )
  const callback1 = useCallback(
    (ce: any) => {
      setCenter1(ce)
    },
    [setCenter1],
  )
  console.log("cente",center)
  return (
    <>
      <LocationPicker callback={callback} callback1={callback1}/> <Location markers={position} center={center} />
    </>
  )
}
Default.storyName = 'Location Picker'
