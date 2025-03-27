import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Column } from '../../../layouts/Column/Column'
import { ImageCover } from '../../../layouts/ImageCover/ImageCover'
import { WideWave } from '../../../layouts/WideWave/WideWave'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { FullBanner } from '../../../components/FullBanner/FullBanner'
import { Testimonial } from '../../../components/Testimonial/Testimonial'
import { Quote } from '../../../components/Quote/Quote'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { Embed } from '../../../components/Embed/Embed'
import { ImageGrid } from '../../../components/ImageGrid/ImageGrid'
import { Nav } from '../../../components/Nav/Nav'
import { BadgeGroup } from '../../../components/BadgeGroup/BadgeGroup'
import { Badge } from '../../../components/Badge/Badge'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'
import { Card } from '../../../components/Card/Card'
import { TextMedia } from '../../../components/TextMedia/TextMedia'
import { NavButtonsData, NavDataSingle } from '../../../data/NavData'
import { NewsData } from '../../../data/NewsData'
import { EventData } from '../../../data/EventData'

const meta: Meta = {
  title: 'Prototypes/Projects/cutheme',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo />
          <Nav.Aside>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main>
        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="Carleton homepage mock-up" opacity={90}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis.</p>
            <ButtonGroup>
              <Button title="Learn More" />
            </ButtonGroup>
          </FullBanner.Content>
        </FullBanner>

        <Section maxWidth="7xl">
          <Column cols="4">
            <Card leftBorder noHover>
              <Card.Stats desc="Student Population" stat="30,500+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Clubs & Societies" stat="170+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Scholarships & Bursaries" stat="85.4 M+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Research Funding" stat="$116 M" />
            </Card>
          </Column>

          <Column cols="4">
            {NewsData.slice(0, 4).map(({ id, link, title, image, alt, date }) => (
              <Card key={id}>
                <Card.Figure>
                  <BadgeGroup gap="2" isAbsolute top={10} left={10}>
                    <Badge color="black80" text="Research" rounded="lg" />
                  </BadgeGroup>
                  <img src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <WideWave>
          <Section maxWidth="7xl">
            <TextMedia>
              <TextMedia.Content hasUnderline title="Safeguarding Newborn Health" width={50}>
                <p>
                  Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                  reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                  accusamus in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio
                  aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
                </p>
                <ButtonGroup>
                  <a
                    className="cu-button cu-button--white"
                    href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                  >
                    Read more
                  </a>
                </ButtonGroup>
              </TextMedia.Content>
              <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
            </TextMedia>
          </Section>
        </WideWave>

        <ImageCover focalPointX="50" focalPointY="50" image="tory" imageZoom={0} maxWidth="7xl" opacity={85}>
          <PageHeader header="Attend Carleton" size="md" />
          <Column cols="4">
            {NewsData.slice(0, 4).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.Figure>
                  <BadgeGroup gap="2" isAbsolute top={10} left={10}>
                    <Badge color="black80" text="Research" rounded="lg" />
                  </BadgeGroup>
                  <img src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
          <Embed isRounded>
            <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=QsR50Qi0gfA" />
          </Embed>
        </ImageCover>

        <Section maxWidth="7xl">
          <ImageGrid cols="4">
            <ImageGrid.Image
              colSpan="2"
              content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
              imageUrl="https://picsum.photos/id/531/600/400"
              link="https://github.com/cuweb/rds"
              rowSpan="2"
              title="Overlay Image Title"
            />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
          </ImageGrid>
        </Section>

        <WideWave wave="black">
          <Section maxWidth="7xl">
            <TextMedia reverse>
              <TextMedia.Content hasUnderline title="Cheer on the Carleton Ravens" width={65}>
                <p>
                  Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                  reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                  accusamus in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio
                  aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
                </p>
                <ButtonGroup>
                  <a
                    className="cu-button cu-button--white"
                    href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                  >
                    Read more
                  </a>
                </ButtonGroup>
              </TextMedia.Content>
              <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
            </TextMedia>
          </Section>
        </WideWave>

        <Section maxWidth="7xl">
          <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
            <Quote cite="Jane Doe" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
              </p>
            </Quote>
          </Testimonial>
        </Section>

        <Section maxWidth="7xl" isGrey>
          <PageHeader header="Upcoming Events" size="md" />
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
          <ButtonGroup align="center">
            <a
              className="cu-button cu-button--dark-grey"
              href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
            >
              View More
            </a>
          </ButtonGroup>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
