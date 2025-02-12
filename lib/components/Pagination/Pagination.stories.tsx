import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { Main } from '../../layouts/Main/Main'

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
    currentPageNumber: 4,
  },
  render: (args) => {
    return (
      <Main>
        <Pagination {...args} />
      </Main>
    )
  },
}
