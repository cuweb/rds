import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { Heading } from '../../components/Heading/Heading'
import { Listing } from '../../components/Listing/Listing'
import { PeopleData } from '../../data/PeopleData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const PeopleListingOptions: Story = {
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
            <HeroTextImage.Content title="People Listing Options" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="People Listings: Default" />
            <StackedList hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="200" height="200" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.Header text={`${firstName} ${lastName}`} />
                      <Listing.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container>
            <Heading text="People Listings: Single Column" />
            <StackedList cols="1" hasShadow>
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="200" height="200" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.Header text={`${firstName} ${lastName}`} />
                      <Listing.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <Heading text="People Listings: Offset" />
          <StackedList header="Meet the Team" as="ul" cols="1" listType="posts" offset="right" hasShadow>
            {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
              <Listing key={id}>
                <a href={link}>
                  <Listing.Figure>
                    <img src={image} alt={alt} width="200" height="200" />
                  </Listing.Figure>
                  <Listing.Content>
                    <Listing.Header text={`${firstName} ${lastName}`} />
                    <Listing.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                  </Listing.Content>
                </a>
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
            <Heading text="People Listings: Default" />
            <StackedList hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="200" height="200" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.Header text={`${firstName} ${lastName}`} />
                      <Listing.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="People Listings: Single Column" />
            <StackedList cols="1" hasShadow>
              {PeopleData.slice(0, 4).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="200" height="200" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.Header text={`${firstName} ${lastName}`} />
                      <Listing.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
