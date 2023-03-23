import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { LocationPicker } from '../components/LocationPicker/LocationPicker'
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
    const [, setPosition] = useState([])
  
    const callback = useCallback(
      (position: any) => {
        setPosition(position)
      },
      [setPosition],
    )
    return <LocationPicker callback={callback} />
  }
Default.storyName = 'Default LocationPicker'
