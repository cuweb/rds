import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { NavButtonsData } from '../../data/NavData'
import { Listing } from './Listing'
import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { PeopleData } from '../../data/PeopleData'
import { ProgramsData } from '../../data/ProgramsData'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Listing/Examples',
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
            header="Listing Layouts"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />
          <StackedList cols="2">
            {NewsData.slice(0, 4).map(({ id, link, title, image, alt, date }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Read more
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <StackedList cols="2">
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

        <StackedList cols="2">
          {IconData.slice(1, 5).map(({ id, link, title, icon }) => (
            <Listing key={id}>
              <Listing.IconThumb icon={icon} />
              <Listing.Body>
                <Listing.Header title={title} />
                <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                <Listing.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Get informed
                  </a>
                </Listing.Footer>
              </Listing.Body>
            </Listing>
          ))}
        </StackedList>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="7xl" isGrey>
          <StackedList cols="2">
            {NewsData.slice(1, 5).map(({ id, link, title, date }) => (
              <Listing key={id}>
                <Listing.Body>
                  <Listing.Header title={title} date={date} datePrefix="Modified on " datePosition="bottom" />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Read more
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <StackedList cols="2">
          {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
            <Listing key={id}>
              <Listing.Figure isSquare>
                <img src={image} alt={alt} width="280" height="280" />
              </Listing.Figure>
              <Listing.Body>
                <Listing.Header title={`${firstName} ${lastName}`} />
                <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                  <a href={`mailto:${email}`}>{email}</a>
                </Listing.PeopleMeta>
                <Listing.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    View profile
                  </a>
                </Listing.Footer>
              </Listing.Body>
            </Listing>
          ))}
        </StackedList>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <StackedList cols="2" noShadow>
          {ProgramsData.slice(0, 12).map(({ id, link, title, image, alt, degree }) => (
            <Listing key={id}>
              <Listing.Figure isSmall hideMobile>
                <img src={image} alt={alt} width="400" height="300" />
              </Listing.Figure>
              <Listing.Body>
                <Listing.Header title={title} />
                <Listing.Content>
                  <p>
                    <em>{degree}</em>
                  </p>
                </Listing.Content>
                <Listing.Footer>
                  <ButtonGroup>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Apply Now
                    </a>
                    <a href={link} className="cu-button cu-button--grey cu-button--small">
                      More Info
                    </a>
                  </ButtonGroup>
                </Listing.Footer>
              </Listing.Body>
            </Listing>
          ))}
        </StackedList>
      </Main>

      <FooterStandard />
    </>
  ),
}
