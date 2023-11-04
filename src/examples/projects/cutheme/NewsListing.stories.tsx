import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { StackedList } from '../../../layouts/StackedList/StackedList'

import { TopBar } from '../../../components/TopBar/TopBar'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { Listing } from '../../../components/Listing/Listing'

import { NewsData as data } from '../../../data/NewsData'
import { Heading } from '../../../components/Heading/Heading'
import { HeroTextImage } from '../../../components/HeroTextImage/HeroTextImage'
import { TopBarDataSingle } from '../../../data/TopBarData'

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
        volutpat, tortor risus vehicula nisl.
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
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Raven Design System" link="https://carleton.ca/webservices">
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
        <TopBar.Secondary>
          <TopBar.Menu>
            {TopBarDataSingle.map((topBarLink, i) => (
              <>
                {!topBarLink.submenu && (
                  <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                    {topBarLink.title}
                  </a>
                )}
                {topBarLink.submenu && (
                  <TopBar.SubMenu label={topBarLink.title}>
                    {topBarLink.submenu.map((topBarSubLink, s) => (
                      <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                        {topBarSubLink.title}
                      </a>
                    ))}
                  </TopBar.SubMenu>
                )}
              </>
            ))}
          </TopBar.Menu>
        </TopBar.Secondary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="News Listing Examples" headerType="h1" />
          </HeroTextImage>

          <DoublePara />

          <h2>News Listing Block</h2>
          <SinglePara />

          <Container maxWidth="5xl">
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
