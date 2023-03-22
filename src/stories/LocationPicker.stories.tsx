import type { Meta, StoryObj } from '@storybook/react'
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

export const Default: Story = {
  render: () => (
    <Column maxWidth="5xl">
      <LocationPicker />
    </Column>
  ),
}
Default.storyName = 'Default LocationPicker'
