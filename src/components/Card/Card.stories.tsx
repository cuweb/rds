import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { EventDataSingle as eventData } from '../../data/EventData'
import { IconDataSingle as iconData } from '../../data/IconData'
import { NewsDataSingle as newsData } from '../../data/NewsData'
import { PeopleDataSingle as peopleData } from '../../data/PeopleData'
import { StatDataSingle as statData } from '../../data/StatData'
import { VideoDataSingle as videoData } from '../../data/VideoData'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>How to Write for the Web</Card.Header>
        <Card.Body>
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Body>
        <Card.Footer isType="button">
          <a href="https://carleton.ca/webservices">More info</a>
        </Card.Footer>
      </>
    ),
  },
}

export const EventCard: Story = {
  render: () => (
    <Card hasShadow="onCard">
      <Card.Figure>
        <img src={eventData.image} alt={eventData.alt} width="400" height="175" />
      </Card.Figure>
      <Card.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Card.Header as="h3">{eventData.title}</Card.Header>
      <Card.Body>
        <Card.EventMeta
          startDateTime={eventData.startDate}
          endDateTime={eventData.endDate}
          onCampus={eventData.on_campus}
          onCampusBuilding={eventData.on_campus_building}
          onCampusRoomNumber={eventData.on_campus_room_number}
          eventAddress={eventData.event_address}
        />
      </Card.Body>
      <Card.Footer isType="button">
        <a href={eventData.link}>Event details</a>
      </Card.Footer>
    </Card>
  ),
}

export const NewsCard: Story = {
  render: () => (
    <Card hasShadow="onCard">
      <Card.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Header date={newsData.date}>{newsData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer isType="button">
        <a href={newsData.link}>Read more</a>
      </Card.Footer>
    </Card>
  ),
}

export const IconCard: Story = {
  render: () => (
    <Card hasShadow="onCard" noHover>
      <Card.IconThumb icon={iconData.icon} />
      <Card.Header>{iconData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
      </Card.Body>
      <Card.Footer isType="button" buttonStyle="grey">
        <a href={iconData.link}>Get informed</a>
      </Card.Footer>
    </Card>
  ),
}

export const PageCard: Story = {
  render: () => (
    <Card hasShadow="onCard">
      <Card.Header date={newsData.date} datePrefix="Modified on " datePosition="bottom">
        {newsData.title}
      </Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer isType="button">
        <a href={newsData.link}>Read more</a>
      </Card.Footer>
    </Card>
  ),
}

export const PeopleCard: Story = {
  render: () => (
    <Card hasShadow="onCard" isCenter>
      <Card.Figure isRound>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Card.Figure>
      <Card.Header>{`${peopleData.firstName} ${peopleData.lastName}`}</Card.Header>
      <Card.Body>
        <Card.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={`mailto:${peopleData.email}`}>{peopleData.email}</a>
        </Card.PeopleMeta>
      </Card.Body>
      <Card.Footer isType="button">
        <a href={peopleData.link}>View profile</a>
      </Card.Footer>
    </Card>
  ),
}

export const SpotlightCard: Story = {
  render: () => (
    <Card hasShadow="onCard" noHover>
      <Card.ImageThumb>
        <img src={newsData.image} alt={newsData.alt} width="200" height="133" />
      </Card.ImageThumb>
      <Card.Header>{newsData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
      </Card.Body>
      <Card.Footer isType="button" buttonStyle="grey">
        <a href={newsData.link}>Get informed</a>
      </Card.Footer>
    </Card>
  ),
}

export const StatCard: Story = {
  render: () => (
    <Card hasShadow="onCard" hasRedBorder noHover>
      <Card.Stats stat={statData.stat} desc={statData.desc} />
    </Card>
  ),
}

export const VideoCard: Story = {
  render: () => (
    <Card hasShadow="onCard">
      <Card.Video source={videoData.source} />
      <Card.Header>{videoData.title}</Card.Header>
    </Card>
  ),
}
