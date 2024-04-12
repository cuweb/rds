import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Listing } from './Listing'
import { IconDataSingle as iconData } from '../../data/IconData'
import { EventDataSingle as eventData } from '../../data/EventData'
import { NewsDataSingle as newsData } from '../../data/NewsData'
import { PeopleDataSingle as peopleData } from '../../data/PeopleData'

const meta: Meta<typeof Listing> = {
  title: 'Components/Listing',
  component: Listing,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Listing>

export const Default: Story = {
  render: (args) => (
    <Listing {...args}>
      <Listing.Body>
        <Listing.Header title="How to Write for the Web" />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            More info
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
  ),
}

export const NewsListing: Story = {
  render: (args) => (
    <Listing {...args}>
      <Listing.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="266" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={newsData.title} date={newsData.date} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Read more
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
  ),
}

export const EventListItem: Story = {
  render: (args) => (
    <Listing {...args}>
      <Listing.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Listing.Body>
        <Listing.Header title={eventData.title} />
        <Listing.EventMeta
          startDateTime={eventData.startDate}
          endDateTime={eventData.endDate}
          onCampus={eventData.on_campus}
          onCampusBuilding={eventData.on_campus_building}
          onCampusRoomNumber={eventData.on_campus_room_number}
          eventAddress={eventData.event_address}
        />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Event details
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
  ),
}

export const IconListing: Story = {
  render: (args) => (
    <Listing {...args}>
      <Listing.IconThumb icon={iconData.icon} />
      <Listing.Body>
        <Listing.Header title={iconData.title} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Get informed
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
  ),
}

export const PeopleListing: Story = {
  render: (args) => (
    <Listing {...args}>
      <Listing.Figure>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={`${peopleData.firstName} ${peopleData.lastName}`} />
        <Listing.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={`mailto:${peopleData.email}`}>{peopleData.email}</a>
        </Listing.PeopleMeta>
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            View profile
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
  ),
}
