import type { Meta, StoryObj } from '@storybook/react'
import { PaginationLoader } from './PaginationLoader'
import { Section } from '../../../layouts/Section/Section'
import React from 'react'

const meta: Meta<typeof PaginationLoader> = {
  title: 'Components/Load Screens/PaginationLoader',
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
    hasBorder: false,
    hasSpacing: false,
  },
  render: (args) => {
    return (
      <Section>
        <PaginationLoader {...args} />
      </Section>
    )
  },
}
