import type { Meta, StoryObj } from '@storybook/react'
import { MultiDayCalendar } from './MultiDayCalendar'
import { useCallback, useState } from 'react'

const meta: Meta<typeof MultiDayCalendar> = {
  title: 'Components/MultiDayCalendar',
  component: MultiDayCalendar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

const data = {
  title: 'Events',
  classname: '.events',
  events: [
    {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-10-21T13:00',
      endDatetime: '2022-10-21T14:30',
    },
    {
      id: 2,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-10-21T09:00',
      endDatetime: '2022-10-21T11:30',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-10-24T17:00',
      endDatetime: '2022-10-24T18:30',
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-10-26T13:00',
      endDatetime: '2022-10-26T14:30',
    },
    {
      id: 5,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-10-30T14:00',
      endDatetime: '2022-10-30T14:30',
    },
  ],
}

type Story = StoryObj<typeof MultiDayCalendar>

export const Default: Story = () => {
  const [, setSelectedDays] = useState<Date[]>([])
  const callbackcal = useCallback(
    (itemSelected: Date[]) => {
      setSelectedDays(itemSelected)
    },
    [setSelectedDays],
  )
  return <MultiDayCalendar events={data.events} callback={callbackcal} />
}

Default.storyName = 'Default MultiDay Calendar'
