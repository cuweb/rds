import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { Section } from '../../layouts/Section/Section'
import { MultiDayCalendar } from './MultiDayCalendar'
import { CalendarData } from '../../data/CalendarData'

const meta: Meta<typeof MultiDayCalendar> = {
  title: 'Components/Multi-day Calendar',
  component: MultiDayCalendar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof MultiDayCalendar>

export const Primary: Story = {
  args: {
    events: CalendarData.events,
  },
  render: (args) => {
    const [, setSelectedDays] = useState<Date[]>([])
    const callbackcal = useCallback(
      (itemSelected: Date[]) => {
        setSelectedDays(itemSelected)
      },
      [setSelectedDays],
    )

    return (
      <Section>
        <MultiDayCalendar events={args.events} callback={callbackcal} />
      </Section>
    )
  },
}
