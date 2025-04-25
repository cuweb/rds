import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterPanel } from './FilterPanel'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterPanel>

const sortOptions = [
  { label: 'Newest to oldest', value: 'newest', selected: true },
  { label: 'Oldest to newest', value: 'oldest' },
  { label: 'Most popular', value: 'popular' },
]

const filterOptions = [
  {
    id: 'audience',
    name: 'Audience',
    options: [
      { value: 'staff', label: 'Staff', checked: false },
      {
        value: 'student',
        label: 'Student',
        checked: false,
      },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    options: [
      { value: 'general', label: 'General', checked: false },
      {
        value: 'online/virtual',
        label: 'Online/Virtual',
        checked: true,
      },
      { value: 'finances', label: 'Finances', checked: false },
      {
        value: 'healthyworkplace',
        label: 'Healthy Workplace',
        checked: false,
      },
    ],
  },
]

export const Primary: Story = {
  render: () => (
    <Main>
      <FilterPanel>
        <FilterPanel.Top sortOptions={sortOptions} filterOptions={filterOptions} />
        <FilterPanel.Bottom />
      </FilterPanel>
    </Main>
  ),
}
