import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { Column } from '../../layouts/Column/Column'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { PageHeader } from '../PageHeader/PageHeader'
import { NavButtonsData } from '../../data/NavData'
import { Card } from './Card'
import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { PeopleData } from '../../data/PeopleData'
import { StatData } from '../../data/StatData'
import { VideoData } from '../../data/VideoData'

const meta: Meta = {
  title: 'Components/Card/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Card Grid Layouts"
            size="lg"
          />
          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt, date }) => (
              <Card key={id}>
                <Card.Figure>
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

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader header="Event Cards" size="md" />
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

        <SinglePara />
        <SinglePara />

        <Column cols="3">
          {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
            <Card key={id} noHover>
              <Card.ImageThumb>
                <img src={image} alt={alt} width="200" height="133" />
              </Card.ImageThumb>
              <Card.Header title={title} />
              <Card.Body>
                <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
              </Card.Body>
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Get informed
                </a>
              </Card.Footer>
            </Card>
          ))}
        </Column>

        <Section maxWidth="7xl" isGrey>
          <Column cols="4">
            {IconData.slice(0, 4).map(({ id, link, title, icon }) => (
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
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Column cols="3">
          {NewsData.slice(0, 3).map(({ id, link, title, date }) => (
            <Card key={id}>
              <Card.Header title={title} date={date} datePrefix="Modified on " datePosition="bottom" />
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

        <Section maxWidth="7xl">
          <Column cols="3">
            {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
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
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <Column cols="3">
          {VideoData.slice(0, 3).map(({ id, source, title }) => (
            <Card key={id} noHover>
              <Card.Video source={source} />
              <Card.Header title={title} />
            </Card>
          ))}
        </Column>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <Column cols="4">
            {StatData.slice(0, 4).map(({ id, stat, desc }) => (
              <Card key={id} leftBorder noHover>
                <Card.Stats stat={stat} desc={desc} />
              </Card>
            ))}
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
