import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StackedList } from '../../../layouts/StackedList/StackedList'
import { ListingEventLoader } from './ListingEventLoader'
import { ListingNewsLoader } from './ListingNewsLoader'
import { ListingIconLoader } from './ListingIconLoader'
import { ListingPeopleLoader } from './ListingPeopleLoader'
import { ListingPageLoader } from './ListingPageLoader'

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
    <StackedList cols="1">
      <ListingPageLoader />
    </StackedList>
  ),
}

export const Event: Story = {
  name: 'Event Listing Loader',
  render: () => (
    <StackedList cols="1">
      <ListingEventLoader />
    </StackedList>
  ),
}

export const Icon: Story = {
  name: 'Icon Listing Loader',
  render: () => (
    <StackedList cols="1">
      <ListingIconLoader />
    </StackedList>
  ),
}

export const News: Story = {
  name: 'News Listing Loader',
  render: () => (
    <StackedList cols="1">
      <ListingNewsLoader />
    </StackedList>
  ),
}

export const Page: Story = {
  name: 'Page Listing Loader',
  render: () => (
    <StackedList cols="1">
      <ListingPageLoader />
    </StackedList>
  ),
}

export const People: Story = {
  name: 'People Listing Loader',
  render: () => (
    <StackedList cols="1">
      <ListingPeopleLoader />
    </StackedList>
  ),
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <StackedList cols="2">
      <ListingNewsLoader />
      <ListingNewsLoader />
    </StackedList>
  ),
}
