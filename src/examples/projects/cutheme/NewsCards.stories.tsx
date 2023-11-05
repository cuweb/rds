import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { Column } from '../../../layouts/Column/Column'

import { TopBar } from '../../../components/TopBar/TopBar'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { Heading } from '../../../components/Heading/Heading'
import { Card } from '../../../components/Card/Card'

import { NewsData as data } from '../../../data/NewsData'
import { HeroTextImage } from '../../../_deprecated/HeroTextImage/HeroTextImage'
import { Button } from '../../../components/Button/Button'
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

export const NewsCards: Story = {
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
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="News Card Examples"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
              vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
              condimentum magna vel orci vulputate, eget vulputate neque porttitor."
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>

          <DoublePara />

          <Container>
            <Heading text="Basic News Card Block" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container isGrey>
            <Heading text="News Card Block with Grey Bg" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <h2>Consecutive News Card Block</h2>
          <SinglePara />

          <Container>
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container maxWidth="5xl">
            <Column cols="3" maxWidth="7xl">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <h2>Consecutive News Card Block with Grey Bg</h2>
          <SinglePara />

          <Container isGrey maxWidth="5xl">
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Column cols="3" maxWidth="7xl">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
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
