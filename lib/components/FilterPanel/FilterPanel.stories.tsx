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

export const Primary: Story = {
  render: () => (
    <Main>
      <FilterPanel />
    </Main>
  ),
}
