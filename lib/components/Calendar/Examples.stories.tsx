import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Calendar } from './Calendar'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Listing } from '../Listing/Listing'
import { Column } from '../../layouts/Column/Column'
import { CalendarData } from '../../data/CalendarData'
import { EventData } from '../../data/EventData'

const meta: Meta = {
  title: 'Components/Calendar/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const eventData = [...CalendarData.events]
const listingEventData = [...EventData]
export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />
        <Calendar callback={() => {}} events={eventData} />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="7xl" isGrey>
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="3xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        {/* ADDED: StackedList for event listings */}
        <h2>Event Listings Layout 1</h2>
        <Column cols="1/3" maxWidth="7xl" reverse={false}>
          <StackedList cols="1">
            {listingEventData.map(({ id, title, startDate, endDate, event_address, link }) => (
              <Listing key={id}>
                <Listing.DateThumb startDate={startDate} endDate={endDate} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.EventMeta
                    startDateTime={startDate}
                    endDateTime={endDate}
                    eventAddress={event_address}
                    onCampus={false}
                  />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Event details
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
          <Calendar callback={() => {}} events={eventData} />
        </Column>

        {/* ADDED: StackedList for event listings */}
        <h2>Event Listings Layout 2</h2>
        <Column cols="1/3" maxWidth="7xl" reverse={true}>
          <StackedList cols="1">
            {listingEventData.map(({ id, title, startDate, endDate, event_address, link }) => (
              <Listing key={id}>
                <Listing.DateThumb startDate={startDate} endDate={endDate} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.EventMeta
                    startDateTime={startDate}
                    endDateTime={endDate}
                    eventAddress={event_address}
                    onCampus={false}
                  />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Event details
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
          <Calendar callback={() => {}} events={eventData} />
        </Column>
      </Main>

      <FooterStandard />
    </>
  ),
}
