import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Listing } from '../../components/Listing/Listing'
import { EventData } from '../../data/EventData'
import { TextImage } from '../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const EventListingOptions: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <img
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Event Listing Options">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Event Listings: Default" />
            <StackedList hasShadow>
              {EventData.slice(0, 4).map(
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
                    <a href={link}>
                      <Listing.DateBox startDate={startDate} endDate={endDate} />
                      <Listing.Content>
                        <Listing.Header text={title} />
                        <Listing.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Container>
            <Heading text="Event Listings: Single Column" />
            <StackedList cols="1" hasShadow>
              {EventData.slice(0, 3).map(
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
                    <a href={link}>
                      <Listing.DateBox startDate={startDate} endDate={endDate} />
                      <Listing.Content>
                        <Listing.Header text={title} />
                        <Listing.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <Heading text="Event Listings: Offset" />
          <StackedList header="Upcoming Event" as="ul" cols="1" listType="posts" offset="right" hasShadow>
            {EventData.slice(0, 3).map(
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
                  <a href={link}>
                    <Listing.DateBox startDate={startDate} endDate={endDate} />
                    <Listing.Content>
                      <Listing.Header text={title} />
                      <Listing.EventMeta
                        startDateTime={startDate}
                        endDateTime={endDate}
                        onCampus={on_campus}
                        onCampusBuilding={on_campus_building}
                        onCampusRoomNumber={on_campus_room_number}
                        eventAddress={event_address}
                      />
                    </Listing.Content>
                  </a>
                </Listing>
              ),
            )}
          </StackedList>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <Container isGrey>
            <Heading text="Event Listings: Default" />
            <StackedList hasShadow>
              {EventData.slice(0, 4).map(
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
                    <a href={link}>
                      <Listing.DateBox startDate={startDate} endDate={endDate} />
                      <Listing.Content>
                        <Listing.Header text={title} />
                        <Listing.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="Event Listings: Single Column" />
            <StackedList cols="1" hasShadow>
              {EventData.slice(0, 4).map(
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
                    <a href={link}>
                      <Listing.DateBox startDate={startDate} endDate={endDate} />
                      <Listing.Content>
                        <Listing.Header text={title} />
                        <Listing.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
