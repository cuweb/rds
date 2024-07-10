import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { WideImage } from '../../components/WideImage/WideImage'
import { Nav } from '../../components/Nav/Nav'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { PageHeaders } from '../../components/PageHeaders/PageHeaders'
import { Column } from '../../layouts/Column/Column'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Aside } from '../../layouts/Aside/Aside'
import { Card } from '../../components/Card/Card'
import { Listing } from '../../components/Listing/Listing'
import { Filter } from '../../components/Filter/Filter'
import { Pagination } from '../../components/Pagination/Pagination'
import { MultiDayCalendar } from '../../components/MultiDayCalendar/MultiDayCalendar'

import { FilterData } from '../../data/FilterData'
import { NavAsideEventCal } from '../../data/NavData'
import { EventData } from '../../data/EventData'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const meta: Meta = {
  title: 'Projects/Events',
}

export default meta
type Story = StoryObj

export const EventsHome: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Events Calendar" link="https://events.carleton.ca" />
          <Nav.Aside menu={NavAsideEventCal}>
            <button aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>

      <Main>
        <Section maxWidth="7xl">
          <WideImage
            title="True Leaders Challenge What's Possible"
            headerType="h1"
            isType="image"
            image="https://picsum.photos/1600/700"
          >
            <p>
              True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for
              Carleton's Challenge Conference.
            </p>
            <ButtonGroup>
              <Button title="Register Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
        </Section>

        <Section maxWidth="7xl">
          <PageHeaders as="h2" header="Featured Events" size="md" />
          <Column cols="4" maxWidth="7xl">
            {EventData.slice(0, 4).map(
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
                <Card key={id}>
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

        <Section maxWidth="7xl" isGrey>
          <PageHeaders as="h2" header="Upcoming Events" size="md" />
          <Filter filters={FilterData.filters} callback={() => undefined} />
          <Column cols="2/3" maxWidth="7xl">
            <Column.Content>
              <StackedList>
                {EventData.slice(0, 6).map(
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
                    <Listing key={id}>
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
              <Pagination
                totalCount={48}
                siblingCount={1}
                pageSize={5}
                callback={() => undefined}
                callbackPage={() => undefined}
              />
            </Column.Content>
            <Aside isSticky topSpace={105}>
              <MultiDayCalendar events={[]} callback={() => {}} defaultDate="" />
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
