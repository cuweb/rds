import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Filter } from './Filter'
import { FilterData } from '../../data/FilterData'
import { Main } from '../../layouts/Main/Main'

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

export const Primary: Story = {
  args: {
    callback: () => undefined,
    filters: FilterData.filters,
    sortOptions: FilterData.sortOptions,
  },
  render: (args) => (
    <Main maxWidth="5xl">
      <Filter {...args} />
    </Main>
  ),
}
