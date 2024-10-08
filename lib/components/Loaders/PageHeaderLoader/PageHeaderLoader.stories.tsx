import type { Meta, StoryObj } from '@storybook/react'
import { PageHeaderLoader } from './PageHeaderLoader'
import { PageHeaderEventLoader } from './PageHeaderEventLoader'

import React from 'react'
import { PageHeaderPeopleLoader } from './PageHeaderPeopleLoader'

const meta: Meta<typeof PageHeaderLoader> = {
  title: 'Components/Load Screens/PageHeader Loader',
  component: PageHeaderLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeaderLoader>

export const Default: Story = {}
Default.args = {}

export const WithContent: Story = {}
WithContent.args = {
  content: 'small',
}

export const WithLargeContent: Story = {}
WithLargeContent.args = {
  content: 'large',
}

export const EventPageHeader: Story = {
  render: () => <PageHeaderEventLoader />,
}

export const PeoplePageHeader: Story = {
  render: () => <PageHeaderPeopleLoader />,
}

export const Center: Story = {}
Center.args = {
  isCenter: true,
}

export const CenterWithContent: Story = {}
CenterWithContent.args = {
  content: 'small',
  isCenter: true,
}
