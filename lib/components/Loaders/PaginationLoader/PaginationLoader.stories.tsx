import type { Meta, StoryObj } from '@storybook/react-vite'
import { PaginationLoader } from './PaginationLoader'
import { Section } from '../../../layouts/Section/Section'
import React from 'react'

const meta: Meta<typeof PaginationLoader> = {
  title: 'Components/Load Screens/Pagination Loader',
  component: PaginationLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PaginationLoader>

export const Primary: Story = {
  args: {
    hasBorder: true,
    pageCount: 5,
  },
  render: (args) => {
    return (
      <Section>
        <PaginationLoader {...args} />
      </Section>
    )
  },
}
