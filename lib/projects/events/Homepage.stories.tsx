import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Column } from '../../layouts/Column/Column'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Aside } from '../../layouts/Aside/Aside'

import { Banner } from '../../_deprecated/Banner/Banner'

import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Card } from '../../components/Card/Card'
import { Listing } from '../../components/Listing/Listing'
import { Pagination } from '../../components/Pagination/Pagination'
import { Calendar } from '../../components/Calendar/Calendar'
import { Filter } from '../../components/Filter/Filter'

import { EventData as dataCard, EventData as dataList } from '../../data/EventData'
import { FilterData as dataFilter } from '../../data/FilterData'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Projects/Event Calendar',
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Banner title="Featured Events" align="left" isType="light-grey" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="4" maxWidth="7xl">
            {dataCard.slice(0, 4).map((item) => (
              <Card key={item?.id} hasShadow="onCard">
                <Card.Figure>
                  <img src={item?.image} alt={item?.alt} width={400} height={175} />
                </Card.Figure>
                <Card.DateThumb startDate={item?.startDate} endDate={item?.endDate} />
                <Card.Header>{item?.title}</Card.Header>
                <Card.Body>
                  <Card.EventMeta
                    startDateTime={item?.startDate}
                    endDateTime={item?.endDate}
                    onCampus={item?.on_campus}
                    onCampusBuilding={item?.on_campus_building}
                    onCampusRoomNumber={item?.on_campus_room_number}
                    eventAddress={item?.event_address}
                  />
                </Card.Body>
                <Card.Footer isType="button">
                  <a href={item?.link}>More info</a>
                </Card.Footer>
              </Card>
            ))}
          </Column>

          <Container maxWidth="7xl" isGrey>
            <Heading text="Upcoming Events" maxWidth="7xl" />

            <Column maxWidth="7xl">
              <Filter filters={dataFilter.filters} callback={() => undefined} sortOptions={dataFilter.sortOptions} />
            </Column>

            <Column cols="2/3" maxWidth="7xl">
              <div>
                <StackedList hasShadow>
                  {dataList.map(
                    ({
                      id,
                      title,
                      link,
                      startDate,
                      endDate,
                      event_address,
                      on_campus,
                      on_campus_building,
                      // tags,
                      on_campus_room_number,
                    }) => (
                      <Listing key={id}>
                        <a href={link}>
                          <Listing.DateThumb startDate={startDate} endDate={endDate} />
                          <Listing.Body>
                            <Listing.Header>{title}</Listing.Header>
                            <Listing.EventMeta
                              startDateTime={startDate}
                              endDateTime={endDate}
                              onCampus={on_campus}
                              onCampusBuilding={on_campus_building}
                              onCampusRoomNumber={on_campus_room_number}
                              eventAddress={event_address}
                            />
                          </Listing.Body>
                        </a>
                      </Listing>
                    ),
                  )}
                </StackedList>

                <Pagination
                  totalCount={48}
                  siblingCount={1}
                  pageSize={5}
                  callback={() => {
                    console.log('Pagination')
                  }}
                />
              </div>

              <Aside isSticky topSpace="10">
                <Calendar
                  callback={() => {
                    console.log('Calendar')
                  }}
                />
              </Aside>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
