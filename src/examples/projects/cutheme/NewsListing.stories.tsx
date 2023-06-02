import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { StackedList } from '../../../layouts/StackedList/StackedList'

import { TopNav } from '../../../components/TopNav/TopNav'
import { Banner } from '../../../components/Banner/Banner'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { Listing } from '../../../components/Listing/Listing'

import { NewsData as data } from '../../../data/NewsData'
import { Heading } from '../../../components/Heading/Heading'

const meta: Meta = {
  title: 'Examples/Projects/cutheme/Blocks',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
        malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
        sapien in urna.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
        malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
        sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const NewsListings: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner title="cutheme news card testing" isType="dark-wave" align="left" />

      <Main>
        <Section hasProse>
          <DoublePara />

          <h2>News Listing Block</h2>
          <SinglePara />

          <Container maxWidth="7xl">
            <Heading text="Basic News Listing Block" />
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <DoublePara />

          <h2>News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container isGrey>
            <Heading text="News Listing Block with Grey Bg" />
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block</h2>
          <SinglePara />

          <Container>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container isGrey>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
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
