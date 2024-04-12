import React from 'react'
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

export const Default: Story = {
  render: () => <Filter filters={FilterData.filters} callback={() => undefined} />,
}

export const WithoutSorting: Story = {
  render: () => <Filter filters={FilterData.filters} callback={() => undefined} sortOptions={FilterData.sortOptions} />,
}
