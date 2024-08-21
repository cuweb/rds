import React from 'react'
import { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { CalendarData } from '../../data/CalendarData'
import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Primary: Story = {
  args: {
    events: CalendarData.events,
  },
  render: (args) => {
    const [, setSelectedDate] = useState(new Date())
    const callbackcal = useCallback(
      (itemSelected: Date) => {
        setSelectedDate(itemSelected)
      },
      [setSelectedDate],
    )

    return (
      <Section>
        <Calendar events={args.events} callback={callbackcal} />
      </Section>
    )
  },
}
