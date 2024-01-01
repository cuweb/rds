import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { EventData } from '../../data/EventData'
import { TextImage } from '../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const EventCardOptions: Story = {
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
            <TextImage.Content headerType="h1" title="Event Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Event Cards: Default" />
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
                  <Card key={id}>
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover" />
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
                  <Card key={id} hasShadow="onHover">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover" />
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
                  <Card key={id} hasShadow="onCard">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="dark-grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Default with Grey Bg" />
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
                  <Card key={id} isGrey>
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="white">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
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
                  <Card key={id} isGrey hasShadow="onHover">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonType="outline">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
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
                  <Card key={id} isGrey hasShadow="onCard">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default" />
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
                  <Card key={id}>
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover" />
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
                  <Card key={id} hasShadow="onHover">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover" />
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
                  <Card key={id} hasShadow="onCard">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="dark-grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default with Grey Bg" />
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
                  <Card key={id} isGrey>
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonStyle="white">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
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
                  <Card key={id} isGrey hasShadow="onHover">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonType="outline">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
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
                  <Card key={id} isGrey hasShadow="onCard">
                    <Card.Figure>
                      <img src={image} alt={alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.DateThumb startDate={startDate} endDate={endDate} />
                    <Card.Header>{title}</Card.Header>
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
                    <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                      <a href={link}>More info</a>
                    </Card.Footer>
                  </Card>
                ),
              )}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
