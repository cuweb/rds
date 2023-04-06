import type { Meta, StoryObj } from '@storybook/react'
import { Listing } from './Listing'
import { NewsDataSingle as singleNews } from '../../data/NewsData'
import { EventDataSingle as singleEvent } from '../../data/EventData'
import { PeopleDataSingle as singlePeople } from '../../data/PeopleData'

const meta: Meta<typeof Listing> = {
  title: 'Cards & Lists/Listing Builds',
  component: Listing,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Listing>

export const NewsItem: Story = {
  args: {
    children: (
      <a href={singleNews?.link}>
        <Listing.Figure>
          <img src={singleNews?.image} alt={singleNews?.alt} width="280" height="186" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={singleNews?.date} />
          <Listing.Header text={singleNews?.title} />
          <Listing.Excerpt text={singleNews?.excerpt} />
          <Listing.Badges tags={singleNews?.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const EventListing: Story = {
  args: {
    children: (
      <a href={singleEvent?.link}>
        <Listing.DateBox startDate={singleEvent?.startDate} />
        <Listing.Content>
          <Listing.Header text={singleEvent?.title} />
          <Listing.EventMeta
            startDateTime={singleEvent?.startDate}
            endDateTime={singleEvent?.endDate}
            onCampus={singleEvent?.on_campus}
            onCampusBuilding={singleEvent?.on_campus_building}
            onCampusRoomNumber={singleEvent?.on_campus_room_number}
            eventAddress={singleEvent?.event_address}
          />
          <Listing.Badges tags={singleEvent?.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const PeopleListing: Story = {
  args: {
    children: (
      <a href={singlePeople?.link}>
        <Listing.Figure size="small">
          <img src={singlePeople?.image} alt={singlePeople?.alt} width="200" height="200" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.Header text={`${singlePeople?.firstName} ${singlePeople?.lastName}`} />
          <Listing.PeopleMeta
            jobTitle={singlePeople?.jobTitle}
            email={singlePeople?.email}
            phone={singlePeople?.phone}
          />
          <Listing.Badges tags={singlePeople?.tags} />
        </Listing.Content>
      </a>
    ),
  },
}
