import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../layouts/Column/Column'
import { Section } from '../../layouts/Section/Section'
import { Card } from './Card'

import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { PeopleData } from '../../data/PeopleData'
import { StatData } from '../../data/StatData'
import { VideoData } from '../../data/VideoData'

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

export const Primary: Story = {
  render: (args) => (
    <Section>
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
    </Section>
  ),
}

export const NewsCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {NewsData.slice(0, 3).map(({ id, link, title, image, alt, date }) => (
          <Card key={id} {...args}>
            <Card.Figure>
              <img src={image} alt={alt} width="400" height="300" />
            </Card.Figure>
            <Card.Header title={title} date={date} />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                Read more
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const EventCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {EventData.slice(0, 3).map(
          ({
            id,
            title,
            link,
            image,
            alt,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address,
          }) => (
            <Card key={id} {...args}>
              <Card.Figure>
                <img src={image} alt={alt} width={400} height={175} />
              </Card.Figure>
              <Card.DateThumb startDate={startDate} endDate={endDate} />
              <Card.Header title={title} />
              <Card.Body>
                <Card.EventMeta
                  startDateTime={startDate}
                  endDateTime={endDate}
                  onCampus={on_campus}
                  onCampusBuilding={on_campus_building}
                  onCampusRoomNumber={on_campus_room_number}
                  eventAddress={event_address}
                />
              </Card.Body>
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  More info
                </a>
              </Card.Footer>
            </Card>
          ),
        )}
      </Column>
    </Section>
  ),
}

export const FeaturedCards: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
          <Card key={id} {...args} noHover>
            <Card.ImageThumb>
              <img src={image} alt={alt} width="200" height="133" />
            </Card.ImageThumb>
            <Card.Header title={title} />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                Get informed
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const IconCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {IconData.slice(0, 3).map(({ id, link, title, icon }) => (
          <Card key={id} {...args}>
            <Card.IconThumb icon={icon} />
            <Card.Header title={title} />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                More info
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const PageCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {NewsData.slice(0, 3).map(({ id, link, title, date }) => (
          <Card key={id} {...args}>
            <Card.Header title={title} date={date} datePrefix="Modified on " datePosition="bottom" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                Read more
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const PeopleCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
          <Card key={id} {...args} isCenter>
            <Card.Figure isRound>
              <img src={image} alt={alt} width={280} height={280} />
            </Card.Figure>
            <Card.Header title={`${firstName} ${lastName}`} />
            <Card.Body>
              <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                <a href={`mailto:${email}`}>{email}</a>
              </Card.PeopleMeta>
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                More info
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const StatCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {StatData.slice(0, 3).map(({ id, stat, desc }) => (
          <Card key={id} {...args} leftBorder noHover>
            <Card.Stats stat={stat} desc={desc} />
          </Card>
        ))}
      </Column>
    </Section>
  ),
}

export const VideoCard: Story = {
  args: {},
  render: (args) => (
    <Section>
      <Column cols="3">
        {VideoData.slice(0, 3).map(({ id, source, title }) => (
          <Card key={id} {...args} noHover>
            <Card.Video source={source} />
            <Card.Header title={title} />
          </Card>
        ))}
      </Column>
    </Section>
  ),
}
