import type { Meta, StoryObj } from '@storybook/react'
import { CalendarLoader } from './CalendarLoader'
import { Section } from '../../../layouts/Section/Section'
import React from 'react'

const meta: Meta<typeof CalendarLoader> = {
  title: 'Components/Load Screens/Calendar Loader',
  component: CalendarLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CalendarLoader>

export const Primary: Story = {
  args: {
    showClearButton: true,
  },
  render: (args) => {
    return (
      <Section>
        <CalendarLoader {...args} />
      </Section>
    )
  },
}
