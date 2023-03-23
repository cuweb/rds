import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { LocationPicker } from '../components/LocationPicker/LocationPicker'
import { Location } from '../components/Location/Location'
import { Column } from '../layouts/Column/Column'

const meta: Meta<typeof LocationPicker> = {
  title: 'Components/LocationPicker',
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
  console.log('pso', position)
  return (
    <Column maxWidth="5xl">
      <LocationPicker callback={callback} /> <Location markers={position} />
    </Column>
  )
}
Default.storyName = 'Default LocationPicker'
