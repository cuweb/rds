import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Main } from '../../layouts/Main/Main'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Listing } from './Listing'

import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { PeopleData } from '../../data/PeopleData'
import { ProgramsData } from '../../data/ProgramsData'

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
    <Main>
      <Listing {...args}>
        <Listing.Body>
          <Listing.Header title="How to Write for the Web" />
          <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
          <Listing.Footer>
            <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
              More info
            </a>
          </Listing.Footer>
        </Listing.Body>
      </Listing>
    </Main>
  ),
}

export const SingleNewsListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1">
        {NewsData.slice(0, 1).map(({ id, link, title, image, alt, date }) => (
          <Listing key={id} {...args}>
            <Listing.Figure>
              <img src={image} alt={alt} width="400" height="300" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={title} date={date} />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const MultipleNewsListings: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2">
        {NewsData.slice(1, 5).map(({ id, link, title, image, alt, date }) => (
          <Listing key={id} {...args}>
            <Listing.Figure>
              <img src={image} alt={alt} width="400" height="300" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={title} date={date} />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const SingleEventListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1">
        {EventData.slice(0, 1).map(
          ({
            id,
            title,
            link,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address,
          }) => (
            <Listing key={id} {...args}>
              <Listing.DateThumb startDate={startDate} endDate={endDate} />
              <Listing.Body>
                <Listing.Header title={title} />
                <Listing.EventMeta
                  startDateTime={startDate}
                  endDateTime={endDate}
                  onCampus={on_campus}
                  onCampusBuilding={on_campus_building}
                  onCampusRoomNumber={on_campus_room_number}
                  eventAddress={event_address}
                />
                <Listing.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Event details
                  </a>
                </Listing.Footer>
              </Listing.Body>
            </Listing>
          ),
        )}
      </StackedList>
    </Main>
  ),
}

export const MultipleEventListings: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2">
        {EventData.slice(1, 5).map(
          ({
            id,
            title,
            link,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address,
          }) => (
            <Listing key={id} {...args}>
              <Listing.DateThumb startDate={startDate} endDate={endDate} />
              <Listing.Body>
                <Listing.Header title={title} />
                <Listing.EventMeta
                  startDateTime={startDate}
                  endDateTime={endDate}
                  onCampus={on_campus}
                  onCampusBuilding={on_campus_building}
                  onCampusRoomNumber={on_campus_room_number}
                  eventAddress={event_address}
                />
                <Listing.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Event details
                  </a>
                </Listing.Footer>
              </Listing.Body>
            </Listing>
          ),
        )}
      </StackedList>
    </Main>
  ),
}

export const SingleIconListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1">
        {IconData.slice(0, 1).map(({ id, link, title, icon }) => (
          <Listing key={id} {...args}>
            <Listing.IconThumb icon={icon} />
            <Listing.Body>
              <Listing.Header title={title} />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Get informed
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const MultipleIconListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2">
        {IconData.slice(1, 5).map(({ id, link, title, icon }) => (
          <Listing key={id} {...args}>
            <Listing.IconThumb icon={icon} />
            <Listing.Body>
              <Listing.Header title={title} />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Get informed
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const SinglePageListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1">
        {NewsData.slice(0, 1).map(({ id, link, title, date }) => (
          <Listing key={id} {...args}>
            <Listing.Body>
              <Listing.Header title={title} date={date} datePrefix="Modified on " datePosition="bottom" />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const MultiplePageListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2">
        {NewsData.slice(1, 5).map(({ id, link, title, date }) => (
          <Listing key={id} {...args}>
            <Listing.Body>
              <Listing.Header title={title} date={date} datePrefix="Modified on " datePosition="bottom" />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const SinglePeopleListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1">
        {PeopleData.slice(0, 1).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSquare>
              <img src={image} alt={alt} width="280" height="280" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={`${firstName} ${lastName}`} />
              <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                <a href={`mailto:${email}`}>{email}</a>
              </Listing.PeopleMeta>
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  View profile
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const MultiplePeopleListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2">
        {PeopleData.slice(1, 5).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSquare>
              <img src={image} alt={alt} width="280" height="280" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={`${firstName} ${lastName}`} />
              <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                <a href={`mailto:${email}`}>{email}</a>
              </Listing.PeopleMeta>
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  View profile
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const SingleProgramListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="1" noShadow>
        {ProgramsData.slice(0, 1).map(({ id, link, title, image, alt, degree }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSmall hideMobile>
              <img src={image} alt={alt} width="400" height="300" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={title} />
              <Listing.Content>
                <p>
                  <em>{degree}</em>
                </p>
              </Listing.Content>
              <Listing.Footer>
                <ButtonGroup>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Apply Now
                  </a>
                  <a href={link} className="cu-button cu-button--grey cu-button--small">
                    More Info
                  </a>
                </ButtonGroup>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}

export const MultipleProgramListing: Story = {
  args: {},
  render: (args) => (
    <Main>
      <StackedList cols="2" noShadow>
        {ProgramsData.slice(0, 12).map(({ id, link, title, image, alt, degree }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSmall hideMobile>
              <img src={image} alt={alt} width="400" height="300" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={title} />
              <Listing.Content>
                <p>
                  <em>{degree}</em>
                </p>
              </Listing.Content>
              <Listing.Footer>
                <ButtonGroup>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Apply Now
                  </a>
                  <a href={link} className="cu-button cu-button--grey cu-button--small">
                    More Info
                  </a>
                </ButtonGroup>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>
    </Main>
  ),
}
