/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { EventItem } from '../components/Listings/EventItem/EventItem'
import { EventItemData as data } from '../components/Listings/EventItem/EventItemData'
import { StackedList } from '../layouts/StackedList/StackedList'
import { Container } from '../layouts/Container/Container'
const meta: Meta<typeof EventItem> = {
  title: 'Cards & Lists/Lists/Event Item',
  component: EventItem,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof EventItem>

export const Default: Story = {}

Default.args = {
  fontSize: 'base',
  title: 'Event item title',
  link: 'https://carleton.ca',
  event_address: 'Robertson Hall',
  startDateTime: '2022-12-16 01:48:41',
  endDateTime: '2022-12-18 05:22:15',
  on_campus: true,
  on_campus_building: 'Robertson Hall',
  on_campus_room_number: '407',
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

export const SingleItemList: Story = {
  render: (args) => (
    <Column maxWidth="5xl">
      <StackedList hasBorder>
        <EventItem
          as="li"
          link={args.link}
          fontSize={args.fontSize}
          title={args.title}
          startDateTime={args.startDateTime}
          endDateTime={args.endDateTime}
          event_address={args.event_address}
          on_campus={args.on_campus}
          on_campus_building={args.on_campus_building}
          on_campus_room_number={args.on_campus_room_number}
          tags={args.tags}
        />
      </StackedList>
    </Column>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: (args) => (
    <Container>
      <Column maxWidth="5xl">
        <StackedList hasShadow>
          {data.map(() => (
            <EventItem
              as="li"
              link={args.link}
              fontSize={args.fontSize}
              title={args.title}
              startDateTime={args.startDateTime}
              endDateTime={args.endDateTime}
              event_address={args.event_address}
              on_campus={args.on_campus}
              on_campus_building={args.on_campus_building}
              on_campus_room_number={args.on_campus_room_number}
              tags={args.tags}
            />
          ))}
        </StackedList>
      </Column>
    </Container>
  ),
}

MultiItemList.args = {
  ...Default.args,
}

export const MultiItemColumns: Story = {
  render: (args) => (
    <Container>
      <Column maxWidth="5xl">
        <StackedList cols="2" hasShadow>
          {data.map(() => (
            <EventItem
              as="li"
              link={args.link}
              fontSize={args.fontSize}
              title={args.title}
              startDateTime={args.startDateTime}
              endDateTime={args.endDateTime}
              event_address={args.event_address}
              on_campus={args.on_campus}
              on_campus_building={args.on_campus_building}
              on_campus_room_number={args.on_campus_room_number}
              tags={args.tags}
            />
          ))}
        </StackedList>
      </Column>
    </Container>
  ),
}

MultiItemColumns.args = {
  ...Default.args,
}
