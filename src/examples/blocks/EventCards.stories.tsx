import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { EventData } from '../../data/EventData'

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
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="Event Card Options" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="Event Cards: Default" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Default with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
