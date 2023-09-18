import type { Meta, StoryObj } from '@storybook/react'
import { ListingLoader } from './ListingLoader'
import { StackedList } from '../../../layouts/StackedList/StackedList'

const meta: Meta<typeof ListingLoader> = {
  title: 'Components/Load Screens/Listing Loader',
  component: ListingLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ListingLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'ListingLoader component',
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <StackedList cols="2">
      <ListingLoader />
      <ListingLoader />
    </StackedList>
  ),
}
