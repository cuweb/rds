import type { Meta, StoryObj } from '@storybook/react'
import { Filter } from './Filter'
import { FilterData } from '../../data/FilterData'

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Filter>

export const Default: Story = () => {
  return <Filter filters={FilterData.filters} callback={() => undefined} sortOptions={FilterData.sortOptions} />
}

export const NoSorting: Story = () => {
  return <Filter filters={FilterData.filters} callback={() => undefined} />
}

Default.storyName = 'With Sorting'
NoSorting.storyName = 'Without Sorting'
