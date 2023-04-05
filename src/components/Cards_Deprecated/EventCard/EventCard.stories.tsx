import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { EventCard } from './EventCard'
import { EventItemData as data } from './EventCardData'
const meta: Meta<typeof EventCard> = {
  title: 'Cards & Lists/Cards (Deprecated)/Event Card',
  component: EventCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof EventCard>

export const Default: Story = {}

Default.args = {
  heading: 'h3',
  title: 'Lived Experience Luncheon Series with Dr. Alex Auerbach',
  link: '#',
  startDateTime: '2022-12-16 01:00:00',
  endDateTime: '2022-12-16 02:40:00',
  eventAddress: '405 Robertson Hall',
  onCampus: false,
  tags: {
    category: [
      {
        id: 3,
        name: 'Category One',
        slug: 'category-one',
      },
      {
        id: 4,
        name: 'Category Two',
        slug: 'category-two',
      },
    ],
    audience: [
      {
        id: 1,
        name: 'Student',
        slug: 'student',
      },
      {
        id: 2,
        name: 'Faculty',
        slug: 'faculty',
      },
    ],
  },
}

export const GridCards: Story = {
  render: () => (
    <Column cols="3" maxWidth="7xl">
      {data.map((item, index) => (
        <EventCard
          key={index}
          title={item?.title}
          link={item?.link}
          startDateTime={item?.start_date}
          endDateTime={item?.end_date}
          featuredImage={item?.featured_image}
          eventAddress={item?.event_address}
          onCampus={item?.on_campus}
          onCampusBuilding={item?.on_campus_building}
          onCampusRoomNumber={item?.on_campus_room_number}
          tags={item?.tags}
        />
      ))}
    </Column>
  ),
}
