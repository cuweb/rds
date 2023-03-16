import type { Meta, StoryObj } from '@storybook/react'
import { Filter } from '../components/Filter/Filter'
import { useCallback, useState } from 'react'
import data from '../components/Filter/FilterData.json'

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
  const [, setFilterItem] = useState([])
  const callbackfilter = useCallback(
    (filterSelected: any) => {
      setFilterItem(filterSelected)
    },
    [setFilterItem],
  )

  return <Filter filters={data.filters} callback={callbackfilter} sortOptions={data.sortOptions} />
}

export const NoSorting: Story = () => {
  const [, setFilterItem] = useState([])
  const callbackfilter = useCallback(
    (filterSelected: any) => {
      setFilterItem(filterSelected)
    },
    [setFilterItem],
  )
  return <Filter filters={data.filters} callback={callbackfilter} />
}

Default.storyName = 'With Sorting'
NoSorting.storyName = 'Without Sorting'
