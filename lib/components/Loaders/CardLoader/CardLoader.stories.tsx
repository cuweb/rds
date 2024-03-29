import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { CardEventLoader } from './CardEventLoader'
import { CardIconLoader } from './CardIconLoader'
import { CardNewsLoader } from './CardNewsLoader'
import { CardPageLoader } from './CardPageLoader'
import { CardPeopleLoader } from './CardPeopleLoader'
import { CardVideoLoader } from './CardVideoLoader'

const meta: Meta<typeof CardNewsLoader> = {
  title: 'Components/Load Screens/Card Loader',
  component: CardNewsLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CardNewsLoader>

export const News: Story = {
  name: 'News Card Loader',
  render: () => <CardNewsLoader />,
}

export const Event: Story = {
  name: 'Event Card Loader',
  render: () => <CardEventLoader />,
}

export const Icon: Story = {
  name: 'Icon Card Loader',
  render: () => <CardIconLoader />,
}

export const Page: Story = {
  name: 'Page Card Loader',
  render: () => <CardPageLoader />,
}

export const People: Story = {
  name: 'People Card Loader',
  render: () => <CardPeopleLoader />,
}

export const Video: Story = {
  name: 'Video Card Loader',
  render: () => <CardVideoLoader />,
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <Column maxWidth="5xl" cols="2" gridGap="10">
      <CardNewsLoader />
      <CardNewsLoader />
    </Column>
  ),
}
