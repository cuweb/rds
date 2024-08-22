import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { Section } from '../../layouts/Section/Section'

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
    return (
      <Section>
        <Pagination {...args} />
      </Section>
    )
  },
}
