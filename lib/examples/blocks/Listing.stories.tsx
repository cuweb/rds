import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Nav } from '../../components/Nav/Nav'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Listing } from '../../components/Listing/Listing'
import { TextImage } from '../../components/TextImage/TextImage'
import { EventData } from '../../data/EventData'
import { IconData } from '../../data/IconData'
import { NewsData } from '../../data/NewsData'
import { PeopleData } from '../../data/PeopleData'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const Listings: Story = {
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
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Listing Examples">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <Section>
          <PageHeader header="Event Listing: Two Columns" as="h2" size="md" />
          <StackedList>
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
        </Section>

        <Section isGrey>
          <PageHeader header="Event Listing: Two Columns" as="h2" size="md" />
          <StackedList>
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
        </Section>

        <Section>
          <PageHeader header="Event Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
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
        </Section>

        <Section isGrey>
          <PageHeader header="Event Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
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
        </Section>

        <Section>
          <PageHeader header="Icon Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {IconData.slice(0, 3).map(({ id, link, title, icon }) => (
              <Listing key={id}>
                <Listing.IconThumb icon={icon} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />

                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Get Informed
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <Section isGrey>
          <PageHeader header="Icon Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {IconData.slice(0, 3).map(({ id, link, title, icon }) => (
              <Listing key={id}>
                <Listing.IconThumb icon={icon} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />

                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Get Informed
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <Section>
          <PageHeader header="Icon Listing: One Columns" as="h2" size="md" />
          <StackedList cols="1">
            {IconData.slice(0, 3).map(({ id, link, title, icon }) => (
              <Listing key={id}>
                <Listing.IconThumb icon={icon} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />

                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Get Informed
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <Section isGrey>
          <PageHeader header="Icon Listing: One Columns" as="h2" size="md" />
          <StackedList cols="1">
            {IconData.slice(0, 3).map(({ id, link, title, icon }) => (
              <Listing key={id}>
                <Listing.IconThumb icon={icon} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />

                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Get Informed
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>

        <Section>
          <PageHeader header="News Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
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

        <Section isGrey>
          <PageHeader header="News Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
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

        <Section>
          <PageHeader header="News Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
            {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
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

        <Section isGrey>
          <PageHeader header="News Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
            {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
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

        <Section>
          <PageHeader header="People Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <Listing.Figure isSquare>
                  <img src={image} alt={alt} width="200" height="200" />
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
        </Section>

        <Section isGrey>
          <PageHeader header="People Listing: Two Columns" as="h2" size="md" />
          <StackedList>
            {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <Listing.Figure isSquare>
                  <img src={image} alt={alt} width="200" height="200" />
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
        </Section>

        <Section>
          <PageHeader header="People Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
            {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <Listing.Figure isSquare>
                  <img src={image} alt={alt} width="200" height="200" />
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
        </Section>

        <Section isGrey>
          <PageHeader header="People Listing: One Column" as="h2" size="md" />
          <StackedList cols="1">
            {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <Listing.Figure isSquare>
                  <img src={image} alt={alt} width="200" height="200" />
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
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
