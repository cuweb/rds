import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  args: {
    totalCount: 48,
    siblingCount: 1,
    pageSize: 5,
    callback: () => undefined,
    callbackPage: () => undefined,
    hasBorder: false,
    hasSpacing: false,
  },
  render: (args) => {
    return <Pagination {...args} />
  },
}
