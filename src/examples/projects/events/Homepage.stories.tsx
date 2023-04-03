import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { Column } from '../../../layouts/Column/Column'
import { Panel } from '../../../layouts/Panel/Panel'
import { Aside } from '../../../layouts/Aside/Aside'

import { TopNav } from '../../../components/TopNav/TopNav'
import { Banner } from '../../../components/Banner/Banner'
import { Heading } from '../../../components/Heading/Heading'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { EventCard } from '../../../components/Cards_Deprecated/EventCard/EventCard'
import { EventItem } from '../../../components/Listings/EventItem/EventItem'
import { Pagination } from '../../../components/Pagination/Pagination'
import { Calendar } from '../../../components/Calendar/Calendar'
// import { Filter } from '../../components/Filter/Filter'

import { EventItemData as dataCard } from '../../../components/Cards_Deprecated/EventCard/EventCardData'
import { EventItemData as dataList } from '../../../components/Listings/EventItem/EventItemData'
// import data from '../../components/Filter/FilterData.json'

const meta: Meta = {
  title: 'Examples/Projects/Event Calendar/Homepage',
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => (
    <>
      <TopNav title="Events Calendar" />
      <Banner title="Featured Events" align="left" isType="dark-wave" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="3" maxWidth="7xl">
            {dataCard.map((item) => (
              <EventCard
                key={item.id}
                title={item?.title}
                link={item?.link}
                startDateTime={item?.start_date}
                endDateTime={item?.end_date}
                featuredImage={item?.featured_image}
                eventAddress={item?.event_address}
                onCampus={item?.on_campus}
                onCampusBuilding={item?.on_campus_building}
                onCampusRoomNumber={item?.on_campus_room_number}
                tags={item?.tags}
              />
            ))}
          </Column>

          <Container bgColor="grey" maxWidth="7xl" hasProse>
            <Heading text="Upcoming Events" maxWidth="7xl" />

            {/* <Column maxWidth="7xl">
            <Filter filters={data.filters} callback={callbackfilter} sortOptions={data.sortOptions} />
          </Column> */}

            <Column cols="2/3" maxWidth="7xl">
              <div>
                <Panel hasShadow>
                  {dataList.map(
                    ({
                      id,
                      title, // link,
                      start_date,
                      end_date,
                      event_address,
                      on_campus,
                      on_campus_building,
                      on_campus_room_number,
                      tags,
                    }) => (
                      <EventItem
                        key={id}
                        as="div"
                        link="#"
                        title={title}
                        startDateTime={start_date}
                        endDateTime={end_date}
                        event_address={event_address}
                        on_campus={on_campus}
                        on_campus_building={on_campus_building}
                        on_campus_room_number={on_campus_room_number}
                        tags={tags}
                      />
                    ),
                  )}
                </Panel>

                <Pagination
                  totalCount={48}
                  siblingCount={1}
                  pageSize={5}
                  callback={() => {
                    console.log('Pagination')
                  }}
                />
              </div>

              <Aside>
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
