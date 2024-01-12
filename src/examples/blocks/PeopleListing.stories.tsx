import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { Listing } from '../../components/Listing/Listing'
import { TextImage } from '../../components/TextImage/TextImage'
import { PeopleData } from '../../data/PeopleData'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const PeopleListing: Story = {
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
        <Section hasProse>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="People Listing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="People Listings: Default" />
            <StackedList hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <Listing.Figure isSquare>
                    <img src={image} alt={alt} width="200" height="200" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header>{`${firstName} ${lastName}`}</Listing.Header>
                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Listing.PeopleMeta>
                    <Listing.Footer isType="button">
                      <a href={link}>View profile</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container>
            <Heading text="People Listings: One Column" />
            <StackedList cols="1" hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <Listing.Figure isSquare>
                    <img src={image} alt={alt} width="200" height="200" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header>{`${firstName} ${lastName}`}</Listing.Header>
                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Listing.PeopleMeta>
                    <Listing.Footer isType="button">
                      <a href={link}>View profile</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="People Listings: Default with Grey Bg" />
            <StackedList hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <Listing.Figure isSquare>
                    <img src={image} alt={alt} width="200" height="200" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header>{`${firstName} ${lastName}`}</Listing.Header>
                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Listing.PeopleMeta>
                    <Listing.Footer isType="button">
                      <a href={link}>View profile</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="People Listings: One Column with Grey Bg" />
            <StackedList cols="1" hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <Listing.Figure isSquare>
                    <img src={image} alt={alt} width="200" height="200" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header>{`${firstName} ${lastName}`}</Listing.Header>
                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Listing.PeopleMeta>
                    <Listing.Footer isType="button">
                      <a href={link}>View profile</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Heading text="People Listings: Offset" />

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <StackedList header="Our People" as="ul" cols="1" listType="posts" offset="right" hasShadow>
            {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <Listing.Figure isSquare>
                  <img src={image} alt={alt} width="200" height="200" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header>{`${firstName} ${lastName}`}</Listing.Header>
                  <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </Listing.PeopleMeta>
                  <Listing.Footer isType="button">
                    <a href={link}>View profile</a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
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
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
