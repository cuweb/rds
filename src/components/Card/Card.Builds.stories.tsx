import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../../components/Card/Card'
import { NewsDataSingle as singleNews } from '../../data/NewsData'
import { EventDataSingle as singleEvent } from '../../data/EventData'
import { PeopleDataSingle as singlePeople } from '../../data/PeopleData'
import { VideoDataSingle as singleVideo } from '../../data/VideoData'

const meta: Meta<typeof Card> = {
  title: 'Components/Card/Examples',
  component: Card,
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
type Story = StoryObj<typeof Card>

export const NewsCard: Story = {
  args: {
    children: (
      <a href={singleNews?.link}>
        <Card.Figure>
          <img src={singleNews?.image} alt={singleNews?.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={singleNews?.date} />
          <Card.Header text={singleNews?.title} />
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Content>
      </a>
    ),
  },
}

export const EventCard: Story = {
  args: {
    children: (
      <a href={singleEvent?.link}>
        <Card.Figure>
          <img src={singleEvent?.image} alt={singleEvent?.alt} width={400} height={175} />
        </Card.Figure>
        <Card.Content>
          <Card.DateBox startDate={singleEvent?.startDate} endDate={singleEvent?.endDate} />
          <Card.Header text={singleEvent?.title} />
          <Card.EventMeta
            startDateTime={singleEvent?.startDate}
            endDateTime={singleEvent?.endDate}
            onCampus={singleEvent?.on_campus}
            onCampusBuilding={singleEvent?.on_campus_building}
            onCampusRoomNumber={singleEvent?.on_campus_room_number}
            eventAddress={singleEvent?.event_address}
          />
        </Card.Content>
      </a>
    ),
  },
}

export const PeopleCard: Story = {
  args: {
    isCenter: true,
    children: (
      <a href={singlePeople?.link}>
        <Card.Figure isRound>
          <img src={singlePeople?.image} alt={singlePeople?.alt} width={280} height={280} />
        </Card.Figure>
        <Card.Content>
          <Card.Header text={`${singlePeople?.firstName} ${singlePeople?.lastName}`} />
          <Card.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Card.Content>
      </a>
    ),
  },
}

export const PeopleCardInitials: Story = {
  args: {
    isCenter: true,
    children: (
      <a href={singlePeople?.link}>
        <Card.Initials initials="CU" />
        <Card.Content>
          <Card.Header text={`${singlePeople?.firstName} ${singlePeople?.lastName}`} />
          <Card.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Card.Content>
      </a>
    ),
  },
}

export const VideoCard: Story = {
  args: {
    children: (
      <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
      </div>
    ),
  },
}

export const NumberCard: Story = {
  args: {
    border: 'red',
    noLink: true,
    children: (
      <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
    ),
  },
}
