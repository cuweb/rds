import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Listing } from '../../components/Listing/Listing'
import { TextImage } from '../../components/TextImage/TextImage'
import { EventData } from '../../data/EventData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const EventListing: Story = {
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
            <TextImage.Content headerType="h1" title="Event Listing">
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
                      <Listing.Footer isType="button">
                        <a href={link}>Event details</a>
                      </Listing.Footer>
                    </Listing.Body>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Container>
            <Heading text="Event Listings: One Column" />
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
                      <Listing.Footer isType="button">
                        <a href={link}>Event details</a>
                      </Listing.Footer>
                    </Listing.Body>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="Event Listings: Default with Grey Bg" />
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
                      <Listing.Footer isType="button">
                        <a href={link}>Event details</a>
                      </Listing.Footer>
                    </Listing.Body>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="Event Listings: One Column with Grey Bg" />
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
                      <Listing.Footer isType="button">
                        <a href={link}>Event details</a>
                      </Listing.Footer>
                    </Listing.Body>
                  </Listing>
                ),
              )}
            </StackedList>
          </Container>

          <Heading text="Event Listings: Offset" />

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <StackedList header="Recent Event" as="ul" cols="1" listType="posts" offset="right" hasShadow>
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
                    <Listing.Footer isType="button">
                      <a href={link}>Event details</a>
                    </Listing.Footer>
                  </Listing.Body>
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
            in. Praesent quis ligula quis nulla malesuada tempor. Nobis voluptatem dolorum et eum doloremque cupiditate
            velit. Praesentium architecto a distinctio aut reprehenderit ducimus.
          </p>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}