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

export const NewsCardLoader: Story = {
  render: () => <CardNewsLoader />,
}

export const EventCardLoader: Story = {
  render: () => <CardEventLoader />,
}

export const IconCardLoader: Story = {
  render: () => <CardIconLoader />,
}

export const PageCardLoader: Story = {
  render: () => <CardPageLoader />,
}

export const PeopleCardLoader: Story = {
  render: () => <CardPeopleLoader />,
}

export const VideoCardLoader: Story = {
  render: () => <CardVideoLoader />,
}

export const TwoColumns: Story = {
  render: () => (
    <Column maxWidth="5xl" cols="2" gridGap="10">
      <CardNewsLoader />
      <CardNewsLoader />
    </Column>
  ),
}
