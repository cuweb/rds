import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StackedList } from '../../../layouts/StackedList/StackedList'
import { ListingEventLoader } from './ListingEventLoader'
import { ListingNewsLoader } from './ListingNewsLoader'
import { ListingIconLoader } from './ListingIconLoader'
import { ListingPeopleLoader } from './ListingPeopleLoader'

const meta: Meta<typeof ListingNewsLoader> = {
  title: 'Components/Load Screens/Listing Loader',
  component: ListingNewsLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ListingNewsLoader>

export const Default: Story = {
  render: () => (
    <StackedList cols="1" hasShadow>
      <ListingNewsLoader />
    </StackedList>
  ),
}

export const Event: Story = {
  name: 'Event Listing',
  render: () => (
    <StackedList cols="2" hasShadow>
      <ListingEventLoader />
      <ListingEventLoader />
    </StackedList>
  ),
}

export const Icon: Story = {
  name: 'Icon Listing',
  render: () => (
    <StackedList cols="2" hasShadow>
      <ListingIconLoader />
      <ListingIconLoader />
    </StackedList>
  ),
}

export const News: Story = {
  name: 'News Listing',
  render: () => (
    <StackedList cols="2" hasShadow>
      <ListingNewsLoader />
      <ListingNewsLoader />
    </StackedList>
  ),
}

export const People: Story = {
  name: 'People Listing',
  render: () => (
    <StackedList cols="2" hasShadow>
      <ListingPeopleLoader />
      <ListingPeopleLoader />
    </StackedList>
  ),
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <StackedList cols="2" hasShadow>
      <ListingNewsLoader />
      <ListingNewsLoader />
    </StackedList>
  ),
}
