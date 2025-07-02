import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../../layouts/Section/Section'
import { Main } from '../../../layouts/Main/Main'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { WideImage } from '../../../components/WideImage/WideImage'
import { Nav } from '../../../components/Nav/Nav'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { Column } from '../../../layouts/Column/Column'
import { StackedList } from '../../../layouts/StackedList/StackedList'
import { Aside } from '../../../layouts/Aside/Aside'
import { Card } from '../../../components/Card/Card'
import { Listing } from '../../../components/Listing/Listing'
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel'
import { Pagination } from '../../../components/Pagination/Pagination'
import { MultiDayCalendar } from '../../../components/MultiDayCalendar/MultiDayCalendar'
import { FilterPanelData } from '../../../data/FilterData'
import { NavButtonsData } from '../../../data/NavData'
import { EventData } from '../../../data/EventData'

const meta: Meta = {
  title: 'Prototypes/Projects/Event Calendar',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => (
    <>
      <Nav.Top>
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Aside>
          <Nav.Buttons menu={NavButtonsData} />
        </Nav.Aside>
      </Nav.Top>

      <Main>
        <Section maxWidth="max">
          <WideImage
            title="True Leaders Challenge What's Possible"
            headerType="h1"
            isType="image"
            image="https://picsum.photos/1600/700"
            hasWave
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
          <PageHeader as="h2" header="Featured Events" size="md" />
          <Column cols="4">
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
          <PageHeader as="h2" header="Upcoming Events" size="md" />
          <FilterPanel>
            <FilterPanel.Top sortOptions={FilterPanelData.sortOptions} filterOptions={FilterPanelData.filters} />
            <FilterPanel.Bottom />
          </FilterPanel>
          <Column cols="2/3">
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
