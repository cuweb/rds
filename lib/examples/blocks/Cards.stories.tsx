import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { PageHeaders } from '../../components/PageHeaders/PageHeaders'
import { Card } from '../../components/Card/Card'
import { TextImage } from '../../components/TextImage/TextImage'
import { NavDataSingle, NavAsideData } from '../../data/NavData'
import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { PeopleData } from '../../data/PeopleData'
import { StatData } from '../../data/StatData'
import { VideoData } from '../../data/VideoData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const Cards: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <TextImage>
            <TextImage.Content headerType="h1" title="Card Examples">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <Section>
          <PageHeaders header="Event Cards" as="h2" size="md" />
          <Column cols="3">
            {EventData.slice(0, 6).map(
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

        <Section isGrey>
          <PageHeaders header="Event Cards" as="h2" size="md" />
          <Column cols="3">
            {EventData.slice(0, 6).map(
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

        <Section>
          <PageHeaders header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 6).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 6).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="Icon Cards" as="h2" size="md" />
          <Column cols="3">
            {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
              <Card key={id}>
                <Card.IconThumb icon={icon} />
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="Icon Cards" as="h2" size="md" />
          <Column cols="3">
            {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
              <Card key={id}>
                <Card.IconThumb icon={icon} />
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="News Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 6).map(({ id, link, image, alt, date, title }) => (
              <Card key={id}>
                <Card.Figure>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="News Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 6).map(({ id, link, image, alt, date, title }) => (
              <Card key={id}>
                <Card.Figure>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="People Cards" as="h2" size="md" />
          <Column cols="3">
            {PeopleData.slice(0, 6).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Card key={id} isCenter>
                <Card.Figure isRound>
                  <img src={image} alt={alt} width={280} height={280} />
                </Card.Figure>
                <Card.Header title={`${firstName} ${lastName}`} />
                <Card.Body>
                  <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </Card.PeopleMeta>
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="People Cards" as="h2" size="md" />
          <Column cols="3">
            {PeopleData.slice(0, 6).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Card key={id} isCenter>
                <Card.Figure isRound>
                  <img src={image} alt={alt} width={280} height={280} />
                </Card.Figure>
                <Card.Header title={`${firstName} ${lastName}`} />
                <Card.Body>
                  <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </Card.PeopleMeta>
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="Stat Cards" as="h2" size="md" />
          <Column cols="3">
            {StatData.slice(0, 6).map(({ id, stat, desc }) => (
              <Card key={id} leftBorder noHover>
                <Card.Stats stat={stat} desc={desc} />
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="Stat Cards" as="h2" size="md" />
          <Column cols="3">
            {StatData.slice(0, 6).map(({ id, stat, desc }) => (
              <Card key={id} leftBorder noHover>
                <Card.Stats stat={stat} desc={desc} />
              </Card>
            ))}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="Video Cards" as="h2" size="md" />
          <Column cols="3">
            {VideoData.slice(0, 6).map(({ id, source, title }) => (
              <Card key={id} noHover>
                <Card.Video source={source} />
                <Card.Header title={title} />
              </Card>
            ))}
          </Column>
        </Section>

        <Section isGrey>
          <PageHeaders header="Video Cards" as="h2" size="md" />
          <Column cols="3">
            {VideoData.slice(0, 6).map(({ id, source, title }) => (
              <Card key={id} noHover>
                <Card.Video source={source} />
                <Card.Header title={title} />
              </Card>
            ))}
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
