import React from 'react'
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
  render: (args) => (
    <Card {...args}>
      <Card.Header title="How to Write for the Web" />
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer>
        <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
          More info
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const NewsCard: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="300" />
      </Card.Figure>
      <Card.Header title={newsData.title} date={newsData.date} />
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer>
        <a href={newsData.link} className="cu-button cu-button--red cu-button--small">
          Read more
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const EventCard: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Figure>
        <img src={eventData.image} alt={eventData.alt} width="400" height="300" />
      </Card.Figure>
      <Card.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Card.Header title={eventData.title} as="h3" />
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
      <Card.Footer>
        <a href={eventData.link} className="cu-button cu-button--red cu-button--small">
          Event details
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const IconCard: Story = {
  render: (args) => (
    <>
      <Card {...args} noHover>
        <Card.IconThumb icon={iconData.icon} />
        <Card.Header title={iconData.title} />
        <Card.Body>
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
        </Card.Body>
        <Card.Footer>
          <a href={iconData.link} className="cu-button cu-button--red cu-button--small">
            Get informed
          </a>
        </Card.Footer>
      </Card>
    </>
  ),
}

export const PageCard: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header title={newsData.title} date={newsData.date} datePrefix="Modified on " datePosition="bottom" />
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer>
        <a href={newsData.link} className="cu-button cu-button--red cu-button--small">
          Read more
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const PeopleCard: Story = {
  render: (args) => (
    <Card {...args} isCenter>
      <Card.Figure isRound>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Card.Figure>
      <Card.Header title={`${peopleData.firstName} ${peopleData.lastName}`} />
      <Card.Body>
        <Card.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={`mailto:${peopleData.email}`}>{peopleData.email}</a>
        </Card.PeopleMeta>
      </Card.Body>
      <Card.Footer>
        <a href={peopleData.link} className="cu-button cu-button--red cu-button--small">
          View profile
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const SpotlightCard: Story = {
  render: (args) => (
    <Card {...args} noHover>
      <Card.ImageThumb>
        <img src={newsData.image} alt={newsData.alt} width="200" height="133" />
      </Card.ImageThumb>
      <Card.Header title={newsData.title} />
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
      </Card.Body>
      <Card.Footer>
        <a href={newsData.link} className="cu-button cu-button--red cu-button--small">
          Get informed
        </a>
      </Card.Footer>
    </Card>
  ),
}

export const StatCard: Story = {
  render: (args) => (
    <Card {...args} leftBorder noHover>
      <Card.Stats stat={statData.stat} desc={statData.desc} />
    </Card>
  ),
}

export const VideoCard: Story = {
  render: (args) => (
    <Card {...args} noHover>
      <Card.Video source={videoData.source} />
      <Card.Header title={videoData.title} />
    </Card>
  ),
}
